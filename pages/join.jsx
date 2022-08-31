import { auth, googleAuthProvider } from '../lib/firebase';

export default function Enter(props) {
  const user = false;

  return (
    <main>
      {user ? 
        <SignOutButton /> 
        : 
        <SignInButton />
      }
      HELLO
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn green" onClick={signInWithGoogle}>
      <img src={'/google.png'} /> Sign in with Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}