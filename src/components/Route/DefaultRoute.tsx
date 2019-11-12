import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import { Container as Navigation } from '../Navigation'

interface Props {
    component: any
    path?: string
    exact?: boolean
}

export const View: React.FC<Props> = ({
    component: Component, ...rest
}) => (
    <Route
        {...rest}
        render={matchProps => (
            <>
                <Navigation />
                <Container>
                    <Component {...matchProps} />
                </Container>
            </>
        )}
        />
)