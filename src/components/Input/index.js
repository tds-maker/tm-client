import React from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import iconSVG from '../../utils/icon.svg.helper'


const icon = iconSVG(18);
const checkIcon = icon('#4285f4')('mdCheck')
const closeIcon = icon('red')('mdClose')

const error = css`
    content: "";
    position: absolute;
    top: 5px;
    right: 0;
    background: url("data:image/svg+xml;utf8, ${closeIcon}") no-repeat;
    width: 18px;
    height: 18px;
`
const base = () => css`
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

const withMD = ({md}) => {
    if(md) {
        return css`
            border-width: 0;
            border-bottom: 1px solid transparent;
            border-radius: 0;
            padding: 1px 0;
            height: auto;
            letter-spacing: 0.013em;
            outline: none;
            box-shadow: none;
            border-color: #b2b2b2;

            &::placeholder {
                color: #b2b2b2;
            }

            &:focus{
                border-color: #4285f4;
            }
        `
    }
}

const withValidation = ({ validation, touched, hasError}) => {
    if (hasError){
        return css`
            & + i::after {
                ${error}
            }
        `
    }else if(validation && touched){
        return css`
            &:valid + i::after {
                content: "";
                position: absolute;
                top: 5px;
                right: 0;
                background: url("data:image/svg+xml;utf8, ${checkIcon}") no-repeat;
                width: 18px;
                height: 18px;
            }

            &:invalid + i::after {
                ${error}
            }
        `
    }
}


const InputElement = styled('input')(
    base,
    withMD,
    withValidation
)

const InputIcon = styled('i')`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    right: 0;
`

class Input extends React.PureComponent {
    state = {
        touched: false,
        valid: false
    }

    onKeyUp = e => {
        const { touched } = this.state;
        const { value } = e.target;

        if(!touched && value && value.length > 0){
            this.setState({
                touched: true
            })
        }
    }

    onInvalid = e => e.preventDefault()

    render() {
        const { props, onKeyUp, onInvalid } = this;
        const { touched } = this.state;
        const { hasError } = props;

        return (<div style={{ position: 'relative'}}>
            <InputElement {...props} onKeyUp={onKeyUp} onInvalid={onInvalid} touched={touched} hasError={hasError}/>
            <InputIcon />
        </div>)
    }
}

export default Input;