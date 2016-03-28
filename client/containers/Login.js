import { GithubButton } from '../models/Github';
import { GoogleButton } from '../models/Google';
import { FacebookButton } from '../models/Facebook';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function LoginContainer({ facebook=nullFn, google=nullFn, }) {
  return (
    <div className='auth'>
      <FacebookButton />
      <GithubButton />
      <GoogleButton />
      </div>
  );
}
