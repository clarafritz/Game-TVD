import type { Character } from './types';

// Décors présents dans le dossier d'origine. Les lieux non illustrés
// utilisent temporairement un décor existant, sans modifier les images.
export const backgrounds: Record<string, string> = {
  bedroom: 'img-MaisonGilbert-ElenaRoom.jpg',
  kitchen: 'img-MaisonGilbert-Kitchen.jpg',
  house: 'img-MaisonGilbert-Exterieur.jpg',
  schoolfront: 'img-Lycee-Devant.png',
  lockers: 'img-Lycee-Casier.jpg',
  hall: 'img-Lycee-Couloir.png',
  classroom: 'img-Lycee-Classe.png',
  cafeteria: 'img-Lycee-Cafeteria.png',
  living: 'img-MaisonGilbert-Salon.png',
  cemetery: 'img-Cimetiere.png',
  cemetery2: 'img-Cimetiere-DeuxiemePartie.png',
  cemeteryexit: 'img-Cimetiere-Sortie.png',
  grill: 'img-MysticGrill-Interieur.jpg',
  grillexit: 'img-MysticGrill-Exterieur.png',
  forest: 'img-Foret.jpg',
  clearing: 'img-Foret-Clairiere.jpg',
  path: 'img-Foret-Chemin.jpg',
  campfire: 'img-Foret-FeuDeCamp.png',
  edge: 'img-Foret-Lisiere.jpg',
};
export const backgroundUrl = (key: string) => '/backgrounds/' + (backgrounds[key] || key);
export const spriteUrl = (character: Character, expression = 'neutre', outfit: 1 | 2 = 1) => `/characters/${character}/tenue-${outfit}-${expression}.png`;
export const names: Record<Character, string> = { elena: 'Elena', jenna: 'Jenna', jeremy: 'Jeremy', bonnie: 'Bonnie', caroline: 'Caroline', matt: 'Matt', tyler: 'Tyler', stefan: 'Stefan', vicki: 'Vicki' };
