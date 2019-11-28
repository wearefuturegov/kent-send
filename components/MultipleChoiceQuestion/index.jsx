import React from "react"
import styled from "styled-components"
import theme from "../_theme"
// import RadioButton from "./RadioButton"

const Outer = styled.fieldset`
    margin-bottom: 65px;
    border: none;
`

const Legend = styled.legend`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 7px;

`

const HelpText = styled.p`
    font-size: 1.1rem;
    margin-bottom: 25px;
    a{
        color: ${theme.red};
        text-decoration: underline;
        &:focus{
            outline: 4px solid ${theme.focus};
        }
    }
`

const RadioQuestion = ({
    question,
    helpText,
    options
}) =>
    <Outer>
        <Legend>{question}</Legend>
        <HelpText dangerouslySetInnerHTML={{__html: helpText}}/>
        {options.map(option =>
            option.value  
        )}
    </Outer>

export default RadioQuestion