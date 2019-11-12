import React from 'react'

import { SignUpForm } from './components/SignUpForm'
import { signInEffect } from '../../../effects/signIn'

interface SignUpPayload {
    email: string
    password: string
    name: string
}

export const View: React.FC = () => {
    function logIn (payload: SignUpPayload): void {
        const { email, password, name } = payload
        console.log('email', email)
        console.log('password', password)
        console.log('name', name)
        signInEffect('aaa')
    }

    return (
        <>
            <h1>Sign Up</h1>
            <SignUpForm 
                handleSubmit={logIn}
                loading={false}
                error={null}
            />
        </>
    )
}