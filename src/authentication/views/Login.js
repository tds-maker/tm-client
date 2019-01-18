import React from 'react'
import styled from '@emotion/styled'

import loginImage from '../../assets/images/login_img1.jpg'
import loginIcon from '../../assets/images/login_icon1.svg'
import { ReactComponent as LogoSmall } from '../../assets/images/logo_small.svg'

import { Button, Input } from '../../components'

const PageColumns = styled('div')`
    height: 100%;
`
const PageContent = styled('div')`
    flex-basis: 0;
    flex-grow: 1;
`
const PageContentBg = styled(PageContent)`
    max-width: 490px;
    background-position: center right;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('${loginImage}')
`
const PageContentInner = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`
const MainContentArea = styled('div')`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 40px 130px 40px 180px;
    position: relative;
`

const MainContentAreaInner = styled('div')`
    width: 100%;
`

const CopyrightWrapper = styled('div')`
    padding: 27px 20px;
    font-size: 10px;
    font-weight: 300;
`
const Passion = styled('span')`
    vertical-align: middle;
    margin: 0 1px 0 2px;
    background: url('${loginIcon}') no-repeat center;
    width: 18px;
    height: 35px;
    display: inline-block;
`
const PageHeadingWrapper = styled('div')`
    margin-bottom: 58px;
`

const H2 = styled('h2')`
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 0.011em;
`

const LoginForm = styled('form')`
    max-width: 310px;

    label {
        font-size: 16px;
    }
`

const FormGroup = styled('div')`
    margin-bottom: 38px;

    label {
        margin-bottom: 10px;
    }

    & + button {
        margin-top: 40px;
    }
`

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


const Login = () => {
   return (
    <PageColumns className="d-flex">
        <PageContent>
            <PageContentInner>
                <MainContentArea>
                    <MainContentAreaInner>
                        <PageHeadingWrapper>
                            <H2>Welcome back TDSmaker!</H2>
                        </PageHeadingWrapper>
                        <LoginForm>
                            <FormGroup>
                                <label>Email address</label>
                                <Input type="email" placeholder="elon@tesla.com" md />
                            </FormGroup>
                            <FormGroup>
                                <label>Password</label>
                                <Input type="password" placeholder="Enter 6 characters or more" md />
                            </FormGroup>
                            <Button color="blue" block md>LOGIN</Button>
                            <FormOtherActions>
                                <p><a href="/">Forgot password?</a></p>
                                <p>Don’t have an account? <a href="/">Sign up here</a></p>
                            </FormOtherActions>
                        </LoginForm>
                    </MainContentAreaInner>
                </MainContentArea>
                <CopyrightWrapper className="text-center">
                    ©Created with 
                        <Passion/> passion by <LogoSmall />
                </CopyrightWrapper>
            </PageContentInner>
        </PageContent>
        <PageContentBg />
    </PageColumns>
    )
}

export default Login