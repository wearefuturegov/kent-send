import React from "react"
import styled from "styled-components"
import theme from "../_theme"

import logo from "./logo.svg"
import twitter from "./twitter.svg"
import facebook from "./facebook.svg"
import youtube from "./youtube.svg"

const Outer = styled.footer`
    background: ${theme.teal};
    color: white;
`

const Upper = styled.div`
    max-width: 970px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 15px;
    @media screen and (min-width: 37.5em) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

const Lower = styled.div`
    background-color: ${theme.darkestTeal};
`

const Nav = styled.nav`
    margin-bottom: 30px;
    @media screen and (min-width: 300px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 25px;
    }
    @media screen and (min-width: 37.5em) {
        grid-row-gap: 10px;
    }
`

const Link = styled.a`
    display: block;
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.15rem;
    margin-bottom: 10px;
    &:hover{
        text-decoration: underline;
    }
    &:focus{
        outline: 4px solid ${theme.focus}
    }
`

const Copyright = styled.div`
    @media screen and (min-width: 37.5em) {
        text-align: right;
    }
`

const A = styled.a`
    display: inline-flex;
    &:focus{
        outline: 4px solid ${theme.focus}
    }
`

const P = styled.p`
    font-size: 1.15rem;
    margin-top: 5px;
`

const Social = styled.div`
    max-width: 970px;
    margin-left: auto;
    margin-right: auto;
    padding: 15px 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (min-width: 600px){
        flex-wrap: no-wrap;
    }
`

const SocialLink = styled.a`

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 1em;
    text-decoration: none;
    margin-bottom: 15px;
    flex: 1;
    max-width: 50%;
    margin-right: 10px;
    &:hover{
        text-decoration: underline;
    }
    &:focus{
        outline: 4px solid ${theme.focus};
    }
    @media screen and (min-width: 800px){
        margin-right: 85px;
        margin-bottom: 0px;
        flex: initial;
    }
`

const SocialIcon = styled.img`
    width: 39.91px;
    margin-right: 10px;
`

const Footer = () =>
    <Outer>
        <Upper>
            <Nav>
                <Link href="https://www.kent.gov.uk/about-the-council/contact-us">Contact us</Link>
                <Link href="https://www.kent.gov.uk/about-the-council/about-the-website">About the website</Link>
                <Link href="https://www.kent.gov.uk/about-the-council/about-the-website/privacy-statement">Privacy statement</Link>
                <Link href="https://www.kent.gov.uk/about-the-council/about-the-website/cookies">Cookies</Link>
                <Link href="https://www.kent.gov.uk/about-the-council/about-the-website/accessibility-statement">Accessibility statement</Link>
                <Link href="https://www.kent.gov.uk/sitemap">Site map</Link>
            </Nav>
            <Copyright>
                <A href="https://kent.gov.uk">
                    <img src={logo} alt="Kent County Council"/>
                </A>
                <P>© 2019 Kent County Council</P>
            </Copyright>
        </Upper>
        <Lower>
            <Social>
                <SocialLink href="https://twitter.com/kent_cc"><SocialIcon src={twitter} alt=""/> KCC on Twitter</SocialLink>
                <SocialLink href="https://www.facebook.com/KentCountyCouncil/"><SocialIcon src={facebook} alt=""/> KCC on Facebook</SocialLink>
                <SocialLink href="http://www.youtube.com/user/KentCountyCouncil"><SocialIcon src={youtube} alt=""/> Find us on YouTube</SocialLink>
            </Social>
        </Lower>
    </Outer>

export default Footer