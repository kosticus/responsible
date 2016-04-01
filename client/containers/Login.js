import { GithubButton } from '../models/Github';
import { GoogleButton } from '../models/Google';
import { FacebookButton } from '../models/Facebook';

export function LoginContainer() {
  return (
    <div className='auth'>
      <FacebookButton />
      <GithubButton />
      <GoogleButton />
    </div>
  );
}
