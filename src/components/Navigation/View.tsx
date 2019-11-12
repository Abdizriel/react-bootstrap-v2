import React, { useState } from 'react'
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'
import isNil from 'lodash/isNil'

import { logOutEffect } from '../../effects/logOut'
import { IAccount } from '../../utils/types'

interface Props {
    isLoading: boolean
    error: any
    account: IAccount | null
}

export const View: React.FC<Props> = ({
    isLoading, error, account
}) => {
    const [isOpen, setIsOpen] = useState(false)

    function renderGuest(): JSX.Element {
        return (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink
                        tag={RRNavLink}
                        to="/auth/sign-in"
                    >
                        Login
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        tag={RRNavLink}
                        to="/auth/sign-up"
                    >
                        Register
                    </NavLink>
                </NavItem>
            </Nav>
        )
    }

    function renderLogged(): JSX.Element {
        return (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink
                        href="#logOut"
                        onClick={logOutEffect}
                    >
                        Log out
                    </NavLink>
                </NavItem>
            </Nav>
        )
    }

    return (
        <Navbar color="light" light fixed={'true'} expand="md">
            <Container>
                <NavbarBrand tag={RRNavLink} to="/">
                    React
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                to="/"
                            >
                                Homepage
                            </NavLink>
                        </NavItem>
                    </Nav>
                    { 
                        !isNil(account)
                            ? renderLogged()
                            : renderGuest() 
                    }
                </Collapse>
            </Container>
        </Navbar>
    )
}
