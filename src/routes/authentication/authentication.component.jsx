import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

import { getRedirectResult } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'

const Authentication = () => {
    // useEffect(() => {
    //     async function test() {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = createUserDocumentFromAuth(response.user);
    //         }
    //     };
    //     test();
    // }, []);



    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication