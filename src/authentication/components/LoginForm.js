import React from 'react'
import styled from '@emotion/styled'

import { Button, Input, FormGroup } from '../../components'

const FormOtherActions = styled('div')`
    margin-top: 20px;
    font-size: 11px;
    letter-spacing: 0.07em;
    line-height: 1.6em;
    text-align: center!important;

    p {
        margin-bottom: 6px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

class LoginForm extends React.PureComponent {
    state = {
        email: "",
        password: "",
        emailError: "",
        passwordError: ""
    }

    onChange = (e) => {
        const { name } = e.target;
        this.setState({
            [name]: e.target.value,
            [`${name}Error`]: ""
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = e.target.checkValidity();
        const { setErrorMessage } = this;
        const { email, password} = this.state
        const { onSubmit } = this.props;

        isValid && onSubmit({ email, password})
            .then(({ status, message }) => {
                if(status){

                }else{
                    setErrorMessage(message)
                }
            });
    }

    setErrorMessage = (message) => {
        switch(message){
            case "USER_NOT_FOUND":
                this.setState({ emailError : "Wrong e-mail address!"});
                break;
            case "INVALID_PASSWORD":
                this.setState({ passwordError : "Wrong password!"});
                break;
            default:
                break;
        }
    }

    render() {
        const { onChange, onSubmit } = this
        const { emailError, passwordError } = this.state;

        return (
            <form style={{maxWidth:'310px'}} onSubmit={onSubmit}  noValidate>
                <FormGroup label="Email address" errorMessage={emailError}>
                    {(hasError) => <Input name="email" type="email" placeholder="elon@tesla.com" onChange={onChange} hasError={hasError} md validation required />}
                </FormGroup>
                <FormGroup label="Password" errorMessage={passwordError}>
                    {(hasError) => <Input name="password" type="password" pattern=".{6,}" onChange={onChange} placeholder="Enter 6 characters or more" hasError={hasError} md validation required />}
                </FormGroup>
                <Button type="submit" color="blue" block md>LOGIN</Button>
                <FormOtherActions>
                    <p><a href="/">Forgot password?</a></p>
                    <p>Don’t have an account? <a href="/">Sign up here</a></p>
                </FormOtherActions>
            </form>)
    }
}

export default LoginForm