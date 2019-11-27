import React from "react"
import styled from "styled-components"
import RadioButton from "./RadioButton"

const Outer = styled.fieldset`
    margin-bottom: 65px;
    border: none;
`

const Legend = styled.legend`
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 7px;

`

const HelpText = styled.p`
    font-size: 1.1em;
    margin-bottom: 25px;
`

const RadioQuestion = ({
    question,
    helpText,
    options
}) =>
    <Outer>
        <Legend>{question}</Legend>
        <HelpText>{helpText}</HelpText>
        {options.map(option =>
            <RadioButton {...option} key={option.value} name={question}/>    
        )}
    </Outer>

export default RadioQuestion