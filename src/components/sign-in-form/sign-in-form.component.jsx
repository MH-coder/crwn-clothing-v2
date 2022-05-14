import { useState, /*useContext*/ } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignInUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

// import { UserContext } from "../../contexts/user.context";

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    // const { setCurrentUser } = useContext(UserContext)

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
        // setCurrentUser(user)
        // await createUserDocumentFromAuth(user);
    }

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await SignInUserWithEmailAndPassword(email, password)
            // setCurrentUser(user)
            setFormFields(defaultFormFields)
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                alert('User not found!')
            }
            else if (error.code === 'auth/wrong-password') {
                alert('Wrong Password!')
            }
        }
    }

    return <>
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" name="email" onChange={changeHandler} value={email} required />

                <FormInput label='Password' type="password" name="password" onChange={changeHandler} value={password} required />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>
    </>
}

export default SignInForm;