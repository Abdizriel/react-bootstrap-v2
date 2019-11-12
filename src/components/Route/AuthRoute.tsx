import React from 'react'
import { Route } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

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
            <Container fluid>
                <Row>
                    <Col className="d-none d-sm-none d-md-block" md={6}>
                        BG
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <Component {...matchProps} />
                    </Col>
                </Row>
            </Container>
        )}
    />
)