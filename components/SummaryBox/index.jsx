import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.section`
    background-color: ${theme.purple};
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 5px;
    position: sticky;
    top: 50%;
    transform: translateY(-50%)
`

const Headline = styled.h2`
    margin-bottom: 10px;
`

const P = styled.p`
    font-size: 1.1em;
    margin-bottom: 10px;
`

const SummaryBox = ({
    complete
}) =>
    <Outer>
        <Headline>We’re putting your options together</Headline>
        <P>Answer a few more questions to see the results.</P>
        {/* Button here */}
    </Outer>

export default SummaryBox