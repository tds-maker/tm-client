import React from 'react';
import styled from '@emotion/styled'

const FormGroupWrapper = styled('div')`
    position: relative;
    margin-bottom: 38px;

    label {
        margin-bottom: 10px;
    }

    & + button {
        margin-top: 40px;
    }
`
const FormLabel = styled('label')`
    font-size: 16px;
`

const FormInputMessage = styled('div')`
    position: absolute;
    left: 100%;
    bottom: 2px;
    min-width: 211px;
    font-size: 11px;
    color: #b2b2b2;
    padding-left: 21px;
    font-style: italic;
    font-weight: 400;
    letter-spacing: 0.02em;
`

class FormGroup extends React.PureComponent{

    render() {
        const {children, label, errorMessage, errorLinkMessage, errorLink} = this.props;
        const hasError = errorMessage || errorLinkMessage
        return (<FormGroupWrapper>
            <FormLabel>{label}</FormLabel>
            {typeof children === 'function' ? children(hasError) : children}
            {hasError && <FormInputMessage>
                {errorMessage} <br /> {errorLink && <a href="/">{errorLinkMessage}</a>}
            </FormInputMessage>}
        </FormGroupWrapper>)
    }
}

export default FormGroup;