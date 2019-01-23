import React from 'react'
import styled from '@emotion/styled'

import loginImage from '../../assets/images/login_img1.jpg'
import loginIcon from '../../assets/images/login_icon1.svg'
import { ReactComponent as LogoSmall } from '../../assets/images/logo_small.svg'

import { signIn } from '../../services/authentication.service'
import LoginForm from '../components/LoginForm'

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
                        <LoginForm onSubmit={signIn} />
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