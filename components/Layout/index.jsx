import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

const layout = ({
    children
}) =>
    <>
        <GlobalStyle/>
        {children}
    </>