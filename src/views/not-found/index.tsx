import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'

const wrapperStyle = {
    maxWidth: '50vw',
    width: '100%',
    padding: '1.5rem',
    margin: 'auto',
}

export const View: React.FC = () => (
    <Container fluid style={{ height: '100vh ' }}>
        <Row className="align-items-center justify-content-center h-100">
            <Col sm={12}>
                <div style={wrapperStyle} className="text-center">
                    <h1>404</h1>
                    <h2>Ooops! This Page Not Found</h2>
                    <h3>The link may be corrupted,</h3>
                    <h4>or page may be removed</h4>
                    <Button tag={Link} to="/">
                        Go back home
                    </Button>
                </div>
            </Col>
        </Row>
    </Container>
)
