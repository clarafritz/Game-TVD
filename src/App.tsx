import { useEffect, useMemo, useState } from 'react';
import { episode01 } from './data/episode01';
import type { Save, Line, Choice, Character } from './engine/types';
import { newGame, loadGame, saveGame, clearGame } from './engine/saveManager';
import { findNode, applyChoice } from './engine/dialogueEngine';
import { names } from './engine/assets';
import { emotionFor } from './engine/emotions';
import Background from './components/Background';
import CharacterSprite from './components/CharacterSprite';
import DialogueBox from './components/DialogueBox';
import AffinityPanel from './components/AffinityPanel';
import LocationNavigator from './components/LocationNavigator';

const companions: Record<string, { speaker: Character; text: string; options: [string, string, string] }> = {
  stefan: { speaker: 'stefan', text: 'Je suis content que tu sois venue. Tu as l’air d’avoir beaucoup de choses en tête.', options: ['« Tu m’intrigues. »', '« Je voulais juste discuter. »', '« Je ne sais pas encore quoi penser de toi. »'] },
  matt: { speaker: 'matt', text: 'Ça me fait bizarre de te retrouver ici. Je repense souvent à avant.', options: ['« Moi aussi, parfois. »', '« Je tiens à notre amitié. »', '« Je préfère qu’on regarde devant nous. »'] },
  bonnie: { speaker: 'bonnie', text: 'Tu sais que tu peux tout me dire, pas vrai ? Même ce qui te fait peur.', options: ['« Tu comptes beaucoup pour moi. »', '« Je suis contente de t’avoir. »', '« Je n’ai pas envie d’en parler ce soir. »'] },
  caroline: { speaker: 'caroline', text: 'Je fais toujours semblant de savoir exactement ce que je fais. C’est ridicule, hein ?', options: ['« Tu n’as rien à prouver. »', '« J’aime quand tu es toi-même. »', '« On est toutes un peu perdues. »'] },
  tyler: { speaker: 'tyler', text: 'Je pensais que tu ne m’aimais pas beaucoup. Pourquoi tu es venue ?', options: ['« J’aimerais mieux te connaître. »', '« Tu peux être sympa quand tu veux. »', '« Je voulais comprendre ton attitude. »'] },
};

function branchChoice(key: string, idx: number): Choice {
  const person = key as Character;
  const stat = idx === 0 && person !== 'bonnie' && person !== 'caroline' ? 'attraction' : 'trust';
  return { label: '', effects: idx === 2 ? [] : [{ person, stat, amount: 1 }], flags: { [`campfire_${key}_tone`]: ['close', 'friendly', 'reserved'][idx] } };
}

type PendingResponse = { lines: Line[]; index: number; next: string; returnToExplore: boolean };

export default function App() {
  const [save, setSave] = useState<Save>(() => loadGame() || newGame());
  const [showRelations, setShowRelations] = useState(false);
  const [menu, setMenu] = useState(false);
  const [branch, setBranch] = useState<'intro' | null>(null);
  const [response, setResponse] = useState<PendingResponse | null>(null);
  const [exploreLocation, setExploreLocation] = useState(() => loadGame()?.location || '');

  const scene = episode01[save.scene] || episode01[0];
  const node = useMemo(() => findNode(scene, save.node || scene.start), [scene, save.node]);
  const exploreNode = scene.nodes.find(n => n.type === 'explore');
  const exploreId = exploreNode?.id || '';
  const exploreKey = `${scene.id}:${exploreId}:`;
  const visited = save.visited.filter(v => v.startsWith(exploreKey)).map(v => v.slice(exploreKey.length));
  const activeLocation = exploreLocation || exploreNode?.locations?.[0]?.id || '';
  const inExploration = node.type === 'explore';
  const atLastScene = save.scene >= episode01.length - 1;

  useEffect(() => { saveGame(save); }, [save]);
  // Les transitions ordinaires sont immédiates et sauvegardées automatiquement.
  useEffect(() => {
    if (node.type !== 'end' || atLastScene) return;
    setExploreLocation('');
    setResponse(null);
    setBranch(null);
    setSave(old => old.scene === save.scene ? { ...old, scene: old.scene + 1, node: '', location: '' } : old);
  }, [node.type, atLastScene, save.scene]);
  const update = (fn: (s: Save) => Save) => setSave(old => fn(old));
  const go = (id?: string) => {
    const index = scene.nodes.findIndex(n => n.id === node.id);
    const next = id || node.next || scene.nodes[index + 1]?.id;
    if (next) update(s => ({ ...s, node: next }));
  };
  const takeChoice = (choice: Choice) => {
    const idx = scene.nodes.findIndex(n => n.id === node.id);
    const next = choice.next || node.next || scene.nodes[idx + 1]?.id || node.id;
    const returnToExplore = !!exploreNode && scene.nodes.indexOf(exploreNode) < idx && scene.nodes.slice(scene.nodes.indexOf(exploreNode) + 1, idx + 1).some(n => n.id === node.id);
    const choiceKey = `${scene.id}:${node.id}`;
    update(old => old.history.includes(choiceKey) ? old : { ...applyChoice(old, choice), history: [...old.history, choiceKey] });
    if (choice.lines?.length) {
      setResponse({ lines: choice.lines, index: 0, next, returnToExplore });
    } else {
      update(s => ({ ...s, node: returnToExplore ? exploreId : next }));
    }
    if (scene.id === 'ep01_scene17') setBranch('intro');
  };
  const nextResponse = () => {
    if (!response) return;
    if (response.index + 1 < response.lines.length) {
      setResponse({ ...response, index: response.index + 1 });
    } else {
      update(s => ({ ...s, node: response.returnToExplore ? exploreId : response.next }));
      setResponse(null);
    }
  };
  const chooseOutfit = (outfit: 1 | 2) => {
    update(s => ({ ...s, outfit: outfit, partyOutfit: save.scene === 14 ? outfit : s.partyOutfit,
      flags: { ...s.flags, [save.scene === 14 ? 'outfit_party' : 'outfit_school']: `elena_outfit_0${outfit}` } }));
    go();
  };
  const onExplore = (target: string) => {
    const encounter = exploreNode?.locations?.flatMap(l => l.characters).find(c => c.next === target);
    if (!encounter || visited.includes(encounter.id)) return;
    update(s => ({ ...s, node: target, visited: [...s.visited, `${exploreKey}${encounter.id}`] }));
  };
  // Si une exploration commence directement dans un lieu occupé, la
  // conversation se déclenche à l’arrivée, sans bouton « parler ».
  useEffect(() => {
    if (!inExploration || !exploreNode) return;
    const location = exploreNode.locations?.find(loc => loc.id === activeLocation);
    const encounter = location?.characters.find(c => !visited.includes(c.id));
    if (!encounter) return;
    setSave(old => {
      const key = `${exploreKey}${encounter.id}`;
      if (old.visited.includes(key)) return old;
      return { ...old, node: encounter.next, visited: [...old.visited, key] };
    });
  }, [inExploration, exploreId, activeLocation, save.scene]);
  const moveExplore = (locationId: string) => {
    setExploreLocation(locationId);
    update(old => ({ ...old, location: locationId }));
    // Rencontrer naturellement le premier personnage présent à l'arrivée.
    const destination = exploreNode?.locations?.find(loc => loc.id === locationId);
    const encounter = destination?.characters.find(c => !visited.includes(c.id));
    if (encounter) onExplore(encounter.next);
  };
  const finishExplore = () => {
    if (!exploreNode) return;
    const end = scene.nodes.find(n => n.type === 'end');
    if (end) update(s => ({ ...s, node: end.id, location: '' }));
  };
  const activeLine = response ? response.lines[response.index] : node.type === 'line' ? node.line : undefined;
  const activePerson = activeLine?.speaker && ['elena','jenna','jeremy','bonnie','caroline','matt','tyler','stefan','vicki'].includes(activeLine.speaker)
    ? activeLine.speaker as Character : undefined;
  const selectedCompanion = String(save.flags.campfire_companion || 'alone');
  const showBranch = scene.id === 'ep01_scene17' && branch && selectedCompanion !== 'alone' && !response;
  const finishBranch = (i: number) => { update(s => applyChoice(s, branchChoice(selectedCompanion, i))); setBranch(null); };
  const bg = exploreLocation && exploreNode && (inExploration || (node.type !== 'end' && save.node !== scene.start)) ? exploreLocation : inExploration && activeLocation ? activeLocation : scene.id === 'ep01_scene01' && scene.nodes.findIndex(n => n.id === node.id) >= 3 ? 'kitchen' : scene.background;

  return <div className="app">
    <Background name={bg} />
    <header>
      <div className="brand">✦ MYSTIC FALLS <div className="chapter-inline"><span>ÉPISODE 1</span><span className="chapter-divider">·</span><span>{scene.title}</span></div></div>
      <div className="top-actions">
        <button onClick={() => setShowRelations(true)}>♡ Relations</button>
        <button onClick={() => setMenu(v => !v)}>☰ Menu</button>
      </div>
    </header>
    {activePerson && !inExploration && !showBranch && <CharacterSprite person={activePerson} expression={activeLine ? emotionFor(activeLine) : 'neutre'} outfit={activePerson === 'elena' ? save.outfit : 1} />}
    {inExploration && !response && exploreNode && <LocationNavigator node={exploreNode} visited={visited} currentLocation={activeLocation} onMove={moveExplore} onFinish={finishExplore} />}
    <main className={'stage ' + (inExploration && !response ? 'stage-exploration' : node.type === 'outfit' ? 'wardrobe-stage' : '')}>
      {response && activeLine ? <DialogueBox line={activeLine} outfit={save.outfit} onNext={nextResponse} /> :
      showBranch ? <div className="choices"><h2>{names[companions[selectedCompanion].speaker]}</h2><p>{companions[selectedCompanion].text}</p>{companions[selectedCompanion].options.map((text,i) => <button key={i} onClick={() => finishBranch(i)}>{text}</button>)}</div> :
      node.type === 'line' && node.line ? <DialogueBox line={node.line} outfit={save.outfit} onNext={() => go()} /> :
      node.type === 'choice' ? <div className="choices"><h2>Que répond Elena ?</h2>{node.choices?.map((c,i) => <button key={i} onClick={() => takeChoice(c)}>{c.label}</button>)}</div> :
      node.type === 'outfit' ? <div className="wardrobe"><div className="wardrobe-caption"><span>GARDE-ROBE D’ELENA</span><h2>Quelle tenue choisir ?</h2><p>Choisis le style d’Elena pour la suite de l’histoire.</p></div><div className="wardrobe-options">{([1,2] as const).map(n => <button className="wardrobe-card" key={n} onClick={() => chooseOutfit(n)}><img src={`/characters/elena/tenue-${n}-neutre.png`} alt={`Aperçu de la tenue ${n}`} /><span>Tenue {n} <b>Choisir →</b></span></button>)}</div></div> :
      node.type === 'end' && atLastScene ? <div className="dialogue narrative finale"><div className="dialogue-copy"><div className="speaker">Fin de l’épisode 1</div><p>À suivre…</p></div><button onClick={() => setMenu(true)}>Menu ›</button></div> : null}
    </main>
    {showRelations && <AffinityPanel save={save} onClose={() => setShowRelations(false)} />}
    {menu && <div className="modalshade" onClick={() => setMenu(false)}><section className="modal" onClick={e => e.stopPropagation()}><button className="close" onClick={() => setMenu(false)}>✕</button><h2>Menu</h2><p>Épisode 1 — {scene.title}</p><button className="wide" onClick={() => { saveGame(save); setMenu(false); }}>Continuer</button><button className="wide danger" onClick={() => { if (window.confirm('Recommencer l’épisode ? La sauvegarde actuelle sera effacée.')) { clearGame(); setSave(newGame()); setResponse(null); setExploreLocation(''); setBranch(null); setMenu(false); } }}>Nouvelle partie</button></section></div>}
  </div>;
}
