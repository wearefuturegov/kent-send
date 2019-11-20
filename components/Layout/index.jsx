import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import theme from "../_theme"
import logo from "./logo.svg"

const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

const Header = styled.header`
    background: ${theme.teal};
    border-bottom: 8px solid ${theme.darkTeal};
    color: white;
`

const LogoLink = styled.a``

const Layout = ({
    children
}) =>
    <>
        <GlobalStyle/>
        <Header>
            <LogoLink href="http://kent.gov.uk">
                KCC
                <img src={logo}/>
            </LogoLink>
            test
        </Header>
        {children}
    </>

export default Layout