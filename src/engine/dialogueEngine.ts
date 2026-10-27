import type { Save, Choice, Scene, Node } from './types';

export const findNode = (scene: Scene, id: string): Node => {
  const node = scene.nodes.find(n => n.id === id);
  if (!node) throw new Error(`Nœud introuvable : ${scene.id}/${id}`);
  return node;
};

export function applyChoice(save: Save, choice: Choice): Save {
  const updated: Save = {
    ...save,
    flags: { ...save.flags, ...choice.flags },
    relationships: structuredClone(save.relationships),
    history: [...save.history],
  };
  for (const effect of choice.effects || []) {
    updated.relationships[effect.person][effect.stat] = Math.max(-20, Math.min(100,
      updated.relationships[effect.person][effect.stat] + effect.amount));
  }
  return updated;
}
