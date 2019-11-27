import React from "react"
import styled from "styled-components"

const RadioInput = styled.input``

const RadioLabel = styled.label``

const RadioButton = ({
    name,
    value,
    label
}) =>
    <>
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
    </>

export default RadioButton