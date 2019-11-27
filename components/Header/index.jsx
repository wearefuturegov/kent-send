import React from "react"
import styled from "styled-components"
import theme from "../_theme"

import wordmark from "./wordmark.svg"
import logo from "./logo.svg"
import initials from "./initials.svg"
import search from "./search.svg"

const Outer = styled.header`
    background: ${theme.teal};
    /* border-bottom: 8px solid ${theme.darkTeal}; */
    color: white;
`

const Inner = styled.div`
    max-width: 970px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const LogoLink = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    text-decoration: none;
    color: white;
    height: 55px;
    overflow: hidden;
    &:focus{
        outline: none;
        box-shadow: inset 0px 0px 0px 4px ${theme.focus};
    }
    @media screen and (min-width: 510px){
        height: 73px;
    }
`

const Title = styled.span`
    font-size: 2em;
    margin-right: 10px;
`
const Initials = styled.img`
    margin: 15px 5px 15px 15px;
    width: 51.7px;
    @media screen and (min-width: 510px){
        display: none;
    }
`

const Wordmark = styled.img`
    display: none;
    @media screen and (min-width: 510px){
        display: block;
        padding: 22px 15px;
        width: 320px;
    }
    @media screen and (min-width: 56.25rem){
        width: 369px;
        padding: 20px 16px;
    }
`

const Logo = styled.img`
    width: 60px;
    margin-top: 7px;
    /* z-index: -1; */
    @media screen and (min-width: 510px){
        width: 71.6px;
        margin-top: 9px;
    }
`

const SearchForm = styled.form`
    display: none;
    @media screen and (min-width: 730px){
        display: block;
        padding: 10px 15px;
        margin-left: 15px;
        position: relative;
        flex: 1;
    }
    @media screen and (min-width: 56.25rem){
        margin-left: 45px;
    }
`

const HiddenLabel = styled.label`
    font-size: 0px;
    opacity: 0;
`

const Input = styled.input`
    width: 100%;
    font-size: 20px;
    border-radius: 3px;
    padding: 12px 15px;
    border: 1px solid ${theme.grey};
    &:focus{
        outline: 4px solid ${theme.focus};
    }
`

const Button = styled.button`
    position: absolute;
    border: none;
    background: none;
    right: 15px;
    top: 10px;
    height: 50px;
    width: 50px;
    padding: 10px;
    cursor: pointer;
`

const Header = () =>
    <Outer>
        <Inner>
            <LogoLink href="http://kent.gov.uk">
                <Initials src={initials} alt="Kent County Council"/>
                <Wordmark src={wordmark} alt="Kent County Council"/>
                <Logo src={logo} alt=""/>
            </LogoLink>

            <SearchForm 
                action="https://kent.gov.uk/search" 
                method="get"
                role="search"
            >
                <input name="mode" type="hidden" value="results"></input>
                <HiddenLabel htmlFor="query">Search</HiddenLabel>
                <Input 
                    id="query" 
                    name="queries_keyword_query" 
                    placeholder="Search kent.gov.uk..." 
                required 
                />
                <Button>
                    <img src={search} alt="submit search"/>
                </Button>
            </SearchForm>
        </Inner>
    </Outer>

export default Header