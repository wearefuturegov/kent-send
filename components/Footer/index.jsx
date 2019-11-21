import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.footer`
    background: ${theme.teal};
    color: white;
`

const Inner = styled.div`
    max-width: 970px;
    margin-left: auto;
    margin-right: auto;
`

const Lower = styled.div`
    background-color: ${theme.darkTeal};
`

const Nav = styled.nav``

const Link = styled.a``

const Copyright = styled.div``

const P = styled.p``

const Footer = () =>
    <Outer>
        <Inner>
            <Nav>
                <Link href=""></Link>
                <Link href=""></Link>
                <Link href=""></Link>
                <Link href=""></Link>
                <Link href=""></Link>
                <Link href=""></Link>
            </Nav>
            <Copyright>
                <img src={logo} alt="Kent County Council"/>
                <P>© 2019 Kent County Council</P>
            </Copyright>

        </Inner>
        <Lower>
            <Inner>

            </Inner>
        </Lower>
    </Outer>

export default Footer