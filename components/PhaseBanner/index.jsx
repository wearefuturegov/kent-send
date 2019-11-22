import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.section`
    background: ${theme.blue};
    color: white;
    box-shadow: 0 -12px 0 rgba(0,0,0,.12) inset;
`

const Inner = styled.div`
    max-width: 970px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 15px 42px 15px;
    font-size: 1.1rem;
    a{
        color: white;
        font-weight: bold;
        &:hover{
            text-decoration: none;
        }
        &:focus{
            outline: 4px solid ${theme.focus};
        }
    }
`

const PhaseBanner = () =>
    <Outer>
        <Inner>
            This is a new service. Your <a href="#">feedback</a> will help us improve it.
        </Inner>
    </Outer>

export default PhaseBanner