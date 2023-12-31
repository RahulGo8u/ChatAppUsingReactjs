import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };
    return (
        <main className="welcome">
            <h2>My Chat App</h2>
            <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
            <p>Sign in with Google to chat with with your friends.</p>
            <button className="sign-in">
                <img
                    onClick={googleSignIn}
                    src={GoogleSignin}
                    alt="sign in with google"
                    type="button"
                />
            </button>
        </main>
    );
};
export default Welcome;