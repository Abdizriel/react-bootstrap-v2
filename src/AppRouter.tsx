import React from 'react'
import { Switch, Router } from 'react-router-dom'
// import { Switch, Route } from 'react-router-dom'

import { View as NotFound } from './views/not-found'

import { View as Homepage } from './views/public/homepage'

import { View as SignIn } from './views/auth/sign-in'
import { View as SignUp } from './views/auth/sign-up'

import { View as DefaultRoute } from './components/Route/DefaultRoute'
import { View as AuthRoute } from './components/Route/AuthRoute'

import { history} from './bootstrap/history'

export default (): JSX.Element => {
    return (
        <Router history={history}>
            <Switch>
                <DefaultRoute exact path="/" component={Homepage} />

                <AuthRoute exact path="/auth/sign-in" component={SignIn} />
                <AuthRoute exact path="/auth/sign-up" component={SignUp} />

                <DefaultRoute path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}
