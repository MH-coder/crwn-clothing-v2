import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const { setCurrentUser } = useContext(UserContext)
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            if (email && password == confirmPassword) {
                const response = await createAuthUserWithEmailAndPassword(email, password)

                if (response) {
                    setCurrentUser(response.user)
                    await createUserDocumentFromAuth(response.user, { displayName });
                    resetFormFields();
                }
            }
            else {
                alert(`Passwords doesn't match!`)
            }
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('User ALready Registered!')
            }
        }
    }

    return <>
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Dsiplay Name' type="text" name="displayName" onChange={changeHandler} value={displayName} required />

                <FormInput label='Email' type="email" name="email" onChange={changeHandler} value={email} required />

                <FormInput label='Password' type="password" name="password" onChange={changeHandler} value={password} required />

                <FormInput label='Confirm Password' type="password" name="confirmPassword" onChange={changeHandler} value={confirmPassword} required />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    </>
}

export default SignUpForm;