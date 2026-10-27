import { useEffect, useState } from 'react';
import type { Character, Line } from '../engine/types';
import { names, spriteUrl } from '../engine/assets';
import { emotionFor } from '../engine/emotions';

const special = ['journal', 'narration', 'thought', 'system'];
export default function DialogueBox({ line, onNext, outfit = 1 }: { line: Line; onNext: () => void; outfit?: 1 | 2 }) {
  const person = line.speaker && !special.includes(line.speaker) ? line.speaker as Character : undefined;
  const [fallback, setFallback] = useState(0);
  const expression = emotionFor(line);
  useEffect(() => setFallback(0), [person, expression, outfit]);
  const name = person ? names[person] : line.speaker === 'journal' ? 'Journal d’Elena' : line.speaker === 'thought' ? 'Pensée d’Elena' : line.speaker === 'system' ? 'Jeu' : '';
  const portraitOutfit = person === 'elena' ? outfit : 1;
  return <div className={'dialogue ' + (line.speaker === 'thought' ? 'thought-dialogue' : line.speaker === 'journal' ? 'journal-dialogue' : special.includes(line.speaker || '') ? 'narrative' : '')}>
    {person && <div className="portrait" aria-hidden="true"><img
      src={spriteUrl(person, fallback === 0 ? expression : "neutre", portraitOutfit)}
      alt="" onError={() => setFallback(v => Math.min(2, v + 1))}
      style={fallback >= 2 ? { display: 'none' } : undefined} /></div>}
    <div className="dialogue-copy"><div className="speaker">{name}</div><p>{line.text}</p></div>
    <button onClick={onNext}>Continuer <span>›</span></button>
  </div>;
}
