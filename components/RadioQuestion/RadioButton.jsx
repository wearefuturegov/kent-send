import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    position: relative;
    margin-right: 10px;
    /* border: 1px solid red; */
    padding: 10px 0px;
`

const RadioInput = styled.input`
    font-size: 0;
    opacity: 0;
    &:checked + label:after{
        content: "";
        display: inline-block;
        width: 24px;
        height: 24px;
        background-color: ${theme.darkTeal};
        border-radius: 100%;
        position: absolute;
        left: 5px;
        top: 9px;
    }
`

const RadioLabel = styled.label`
    font-size: 1.1rem;
    margin-top: 50px;
    margin-left: 40px;
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
        top: 4px;
    }
`

const RadioButton = ({
    name,
    value,
    label
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
        </RadioLabel>
    </Outer>

export default RadioButton