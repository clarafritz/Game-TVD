import type { Save, Character, Relationship } from './types';
const chars: Character[] = ['elena', 'jenna', 'jeremy', 'bonnie', 'caroline', 'matt', 'tyler', 'stefan', 'vicki'];
const initial = (): Record<Character, Relationship> => Object.fromEntries(chars.map(c => [c, { affinity: 0, trust: 0, attraction: 0, curiosity: 0, suspicion: 0 }])) as Record<Character, Relationship>;
export function newGame(): Save { return { scene: 0, node: '', outfit: 1, partyOutfit: 1, relationships: initial(), flags: {}, visited: [], history: [] } }
const KEY = 'tvd-episode1-save-v1';
export function loadGame(): Save | undefined { try { const s = localStorage.getItem(KEY); return s ? JSON.parse(s) as Save : undefined } catch { return undefined } }
export function saveGame(s: Save) { localStorage.setItem(KEY, JSON.stringify(s)) }
export function clearGame() { localStorage.removeItem(KEY) }
