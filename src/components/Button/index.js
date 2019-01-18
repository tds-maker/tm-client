import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const base = () => css`
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
` 
const withBlock = ({ block }) => {
    if(block){
        return css`
            display: block;
            width: 100%;
        `
    }
}

const withColor = ({ color }) => {
    if(color === "blue"){
        return css`
            border-color: #3079ed;
            background-color: #4285f4;
            color: #FFF;

            &:hover {
                background-color: #3079ed;
                color: #FFF;
            }
        `
    }
}

const withMD = ({ md }) => {
    if(md){
        return css`
            border-radius: 4px;
            line-height: 1.6;
            letter-spacing: 0.05em;
            font-size: 13px;
            padding: 0.575rem .75rem;
        `
    }
}

const ButtonElement = styled('button')(
    base,
    withColor,
    withBlock,
    withMD
)


const Button = ({children, ...props}) => (
    <ButtonElement {...props}>{children}</ButtonElement>
)

export default Button;