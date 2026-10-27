import { useEffect, useState } from 'react';
import type { Character } from '../engine/types';
import { spriteUrl } from '../engine/assets';

type Props = { person: Character; expression?: string; outfit?: 1 | 2 };
export default function CharacterSprite({ person, expression = 'neutre', outfit = 1 }: Props) {
  const [fallback, setFallback] = useState(0);
  useEffect(() => setFallback(0), [person, expression, outfit]);
  const url = spriteUrl(person, fallback === 0 ? expression : 'neutre', outfit);
  return <img className="sprite" src={url} alt="" aria-hidden="true"
    onError={() => setFallback(v => Math.min(2, v + 1))}
    style={fallback === 2 ? { display: 'none' } : undefined} />;
}
