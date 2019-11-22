import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import arrow from "./arrow.svg"

const Outer = styled.header`
    background: ${theme.darkTeal};
    color: white;
`

const Inner = styled.ol`
    max-width: 970px;
    margin-left: auto;
    margin-right: auto;
    padding: 7px 15px;
    list-style: none;
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */
`

const Link = styled.a`
    color: white;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
    &:focus{
        outline: 4px solid ${theme.focus}
    }
`

const ListItem = styled.li`
    display: inline-block;
    margin-right: 12px;
    &:after{
        content: "";
        display: inline-block;
        background-image: url(${arrow});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 13px;
        width: 12px;
        margin-left: 12px;
    }
`

const Breadcrumbs = () =>
    <Outer>
        <Inner>
            <ListItem>
                <Link href="https://kent.gov.uk">Home</Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.kent.gov.uk/education-and-children">Education and children</Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.kent.gov.uk/education-and-children/special-educational-needs">SEND local offer</Link>
            </ListItem>

        </Inner>
    </Outer>

export default Breadcrumbs