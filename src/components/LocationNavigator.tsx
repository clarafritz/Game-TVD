import type { Node } from '../engine/types';

type Props = {
  node: Node;
  visited: string[];
  currentLocation: string;
  onMove: (locationId: string) => void;
  onFinish: () => void;
};
export default function LocationNavigator({ node, visited, currentLocation, onMove, onFinish }: Props) {
  const locations = node.locations || [];
  const current = locations.find(loc => loc.id === currentLocation) || locations[0];
  const ready = (node.required || []).every(id => visited.includes(id));
  if (!current) return null;
  return <div className="exploration-overlay">
    <div className="exploration-hint"><span>EXPLORATION</span><strong>{current.name}</strong><small>Déplace-toi avec les flèches : les rencontres se déclenchent en arrivant.</small></div>
    <div className="hotspot-area" aria-label="Interactions et déplacements">
      {locations.filter(loc => loc.id !== current.id).map((loc, i) =>
        <button key={loc.id} className="hotspot travel-hotspot"
          style={{ left: `${11 + i * (70 / Math.max(1, locations.length - 1))}%`, top: `${65 + (i % 2) * 9}%` }}
          onClick={() => onMove(loc.id)} aria-label={`Aller : ${loc.name}`}>
          <span className="hotspot-dot">➜</span><span className="hotspot-tooltip">Aller : {loc.name}</span>
        </button>)}
      {ready && <button className="hotspot exit-hotspot" style={{ left: '91%', top: '81%' }}
        onClick={onFinish} aria-label="Quitter ce lieu">
        <span className="hotspot-dot">➜</span><span className="hotspot-tooltip">Quitter le lieu</span>
      </button>}
    </div>
    {!ready && <div className="exploration-objective">Une rencontre importante reste à faire.</div>}
  </div>;
}
