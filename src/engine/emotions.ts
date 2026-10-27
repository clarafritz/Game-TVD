import type { Line } from './types';

/** Sélection d'expressions : les indications écrites dans l'épisode ont priorité. */
export function emotionFor(line: Line): string {
  if (line.expression && line.expression !== 'neutre') return line.expression;
  const text = line.text.toLowerCase();
  if (/souris|sourire|heureuse|contente|ravie|amus|drôle|plaisant|rire|rigol|merci|super|génial|enchant/.test(text)) return 'sourire';
  if (/peur|inqui|angoiss|danger|attention|prudence|ça va \?|tu vas bien|qu'est-ce qui se passe/.test(text)) return 'inquiete';
  if (/colère|furieu|arrête|laisse-moi|mensonge|idiot|dégage|jamais !|tais-toi/.test(text)) return 'colere';
  if (/désol|triste|manque|perdu|mort|parents|souffr|seule|pleur/.test(text)) return 'triste';
  if (/quoi \?|vraiment \?|comment \?|sérieux \?|impossible|incroyable|surpris/.test(text)) return 'surprise';
  if (/je sais|crois-moi|promis|je peux|je vais|ne t'en fais pas|je m'en occupe/.test(text)) return 'assuree';
  if (/secret|petit sourire|clin d'œil|entre nous/.test(text)) return 'clin-oeil';
  return line.expression || 'neutre';
}
