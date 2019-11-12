import React from 'react'
import { withFormik, FormikProps, Field } from 'formik'
import { Row, Col, Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap'
import * as yup from 'yup'
import isNil from 'lodash/isNil'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

interface FormValues {
    name: string,
    email: string,
    password: string
}

interface FormProps {
    handleSubmit: (payload: FormValues) => void
    error?: any
    loading: boolean
}

const validationSchema = yup.object().shape({
    name: yup.string().required('REQUIRED'),
    email: yup.string().required('REQUIRED'),
    password: yup.string().required('REQUIRED'),
});

const View = (props: FormProps & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, handleSubmit, error, loading } = props
    const isDisabled = isSubmitting || !!(errors.email && touched.email)  || !!(errors.name && touched.name)

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    tag={Field}
                    invalid={touched.name && !isNil(errors.name)}
                />
                { touched.name && !isNil(errors.name) && (
                    <FormFeedback>{ errors.name }</FormFeedback>
                )}
            </FormGroup>
            <FormGroup>
                <Label for="email">E-mail address</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    tag={Field}
                    invalid={touched.email && !isNil(errors.email)}
                />
                { touched.email && !isNil(errors.email) && (
                    <FormFeedback>{ errors.email }</FormFeedback>
                )}
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    tag={Field}
                    invalid={touched.password && !isNil(errors.password)}
                />
                { touched.password && !isNil(errors.password) && (
                    <FormFeedback>{ errors.password }</FormFeedback>
                )}
            </FormGroup>
            <Row>
                { !isNil(error) && (
                    <Col sm={12}>
                        <Alert color="danger">{error}</Alert>
                    </Col>
                )}
                <Col 
                    xs={12}
                    sm={12}
                    md={{ offset: 6, size: 6 }}
                    className="text-right"
                >
                    <Button type="submit" disabled={isDisabled}>
                        { 
                            loading
                                ? <FontAwesomeIcon spin icon={faSpinner} />
                                : 'Sign In'
                        }
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export const SignUpForm = withFormik<FormProps, FormValues>({
    validationSchema,
    mapPropsToValues: () => ({
        email: '',
        name: '',
        password: ''
    }),
    handleSubmit: (payload, formikBag) => {
        formikBag.props.handleSubmit(payload)
        formikBag.setSubmitting(false)
    },
})(View)