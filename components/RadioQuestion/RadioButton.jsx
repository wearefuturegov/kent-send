import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    position: relative;
    margin-right: 10px;
    margin-bottom: 20px;
`

const RadioInput = styled.input`
    font-size: 0;
    opacity: 0;
    position: absolute;
    &:checked + label:after{
        content: "";
        display: inline-block;
        width: 24px;
        height: 24px;
        background-color: ${theme.darkTeal};
        border-radius: 100%;
        position: absolute;
        left: 5px;
        top: -1px;
    }
    &:focus + label:before{
        box-shadow: 0px 0px 0px 4px ${theme.focus};
    }
`

const RadioLabel = styled.label`
    font-size: 1.1rem;
    margin-top: 50px;
    padding-left: 50px;
    cursor: pointer;
    &:before{
        content: "";
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 2px solid ${theme.darkTeal};
        border-radius: 100%;
        position: absolute;
        left: 0px;
        top: -6px;
    }
`

const HelpText = styled.p`
    font-size: 0.9rem;
    padding-left: 50px;
`


const RadioButton = ({
    name,
    value,
    label,
    helpText
}) =>
    <Outer>
        <RadioInput
            type="radio"
            name={name}
            value={value}
            id={`${name}-${value}`}
        />
        <RadioLabel
            htmlFor={`${name}-${value}`}
            >
            {label}
            <HelpText>{helpText}</HelpText>
        </RadioLabel>
    </Outer>

export default RadioButton