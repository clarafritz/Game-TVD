import { useState, useEffect } from 'react';
import { backgroundUrl } from '../engine/assets';

export default function Background({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [name]);
  const url = backgroundUrl(name);
  return <div className={'background' + (failed ? ' background-missing' : '')}
    style={failed ? undefined : { backgroundImage: `linear-gradient(90deg,rgba(5,8,16,.30),rgba(5,8,16,.08)),url("${url}")` }}>
    {!failed && <img className="probe" src={url} onError={() => setFailed(true)} alt="" />}
  </div>;
}
