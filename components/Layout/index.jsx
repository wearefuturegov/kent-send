import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Header from "../Header"
import Footer from "../Footer"
import Breadcrumbs from "../Breadcrumbs"
import PhaseBanner from "../PhaseBanner"

const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

const Layout = ({
    children
}) =>
    <>
        <GlobalStyle/>
        <Header/>
        <Breadcrumbs/>
        <PhaseBanner/>
        {children}
        <Footer/>
    </>

export default Layout