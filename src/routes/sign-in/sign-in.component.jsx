import { signInWithGooglePopup, createUeserDocumentFromAuth } from '../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUeserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google popup</button>
        </div>
    )
}
export default SignIn;

