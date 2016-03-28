import { Button, ButtonToolbar } from 'react-bootstrap';
import { GithubButton } from '../models/Github';
import { GoogleButton } from '../models/Google';
import { FacebookButton } from '../models/Facebook';

function nullFn(e) { console.log('you clicked me ' + e.target.className); };

export function LoginContainer({ facebook=nullFn, google=nullFn, }) {
  return (
	<div className='auth'>
		<FacebookButton className='FacebookButton' onClick={facebook}>
			<ButtonToolbar className="authButtons">
				<Button bsStyle="primary" bsSize="large" block>Facebook</Button>
			</ButtonToolbar>
		</FacebookButton>

		<GoogleButton className='GoogleButton' onClick={GoogleButton}>
			<ButtonToolbar className="authButtons">
				<Button bsStyle="primary" bsSize="large" block>Google</Button>
			</ButtonToolbar>
		</GoogleButton>

		<GithubButton className='GithubButton' onClick={GithubButton}>
			<ButtonToolbar className="authButtons">
				<Button bsStyle="primary" bsSize="large" block>Github</Button>
			</ButtonToolbar>
		</GithubButton>
	</div>
  );
}
