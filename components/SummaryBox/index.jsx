import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.section`
    background-color: ${theme.purple};
    color: white;
    text-align: center;
    padding: 25px;
    border-radius: 5px;
    position: sticky;
    top: 65px;
`

const Headline = styled.h2`
    margin-bottom: 10px;
`

const P = styled.p`
    font-size: 1.1em;
    margin-bottom: 20px;
`

const A = styled.a`
    display: block;
    background-color: white;
    color: ${theme.purple};
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
    padding: 15px;
    border-radius: 5px;
    text-decoration: none;
`

const DisabledA = styled(A)`
    opacity: 0.2;
`

const SummaryBox = ({
    complete
}) =>
    <Outer aria-live="polite">
        {
            complete ? 
            <>
                <Headline>Your list is ready</Headline>
                <A href="#" disabled>Go to list</A>
            </>
            :
            <>
                <Headline>We’re putting your options together</Headline>
                <P>Answer a few more questions to see the results.</P>
                <DisabledA>Go to list</DisabledA>
            </>
        }
    </Outer>

export default SummaryBox