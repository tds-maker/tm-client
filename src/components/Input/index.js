import React from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/core'

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
        `
    }
}

const InputElement = styled('input')(
    base,
    withMD
)

const Input = (props) => (
    <InputElement {...props} />
)

export default Input;