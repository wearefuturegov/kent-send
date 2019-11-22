import Layout from "../components/Layout"
import styled from "styled-components"
import theme from "../components/_theme"

const Main = styled.main`
    max-width: 970px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 15px;
    color: ${theme.darkTeal};
`

const PageTitle = styled.h1`
    font-size: 2.5rem;
    @media screen and (min-width: 56.25rem){
        font-size: 3rem;
    }
`

export default () =>
    <Layout>
        <Main>
            <PageTitle>Test page</PageTitle>
        </Main>
    </Layout>
