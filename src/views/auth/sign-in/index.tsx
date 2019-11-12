import React from 'react'
import { useIntl } from 'react-intl'

import messages from './messages'
import { SignInForm } from './components/SignInForm'
import { signInEffect } from '../../../effects/signIn'

interface SignInPayload {
    email: string
    password: string
}

export const View: React.FC = () => {
    const { formatMessage } = useIntl()

    function logIn (payload: SignInPayload): void {
        const { email, password } = payload
        console.log('email', email)
        console.log('password', password)
        signInEffect('aaa')
    }

    return (
        <>
            <h1>{formatMessage(messages.signIn)}</h1>
            <SignInForm 
                handleSubmit={logIn}
                loading={false}
                error={null}
            />
        </>
    )
}