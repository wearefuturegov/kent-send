import Layout from "../components/Layout"
import styled from "styled-components"
import theme from "../components/_theme"
import questions from "../content/questions"
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion"
import RadioQuestion from "../components/RadioQuestion"
import SummaryBox from "../components/SummaryBox"

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

const PageLede = styled.p`
    margin-top: 10px;
    font-size: 1.2em;
`

const TwoThirdsColumns = styled.div`
    padding-top: 65px;
    @media screen and (min-width: 56.25rem){
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-column-gap: 80px;
    }
`

export default () =>
    <Layout>
        <Main>
            <PageTitle>Explore your options</PageTitle>
            <PageLede>Answer a few questions and we'll suggest useful sources of support.</PageLede>
            <TwoThirdsColumns>
                <div>
                    {questions.map(question =>
                        question.multiple ? 
                            <MultipleChoiceQuestion {...question} key={question.id}/>
                        : 
                            <RadioQuestion {...question} key={question.id}/>
                    )}
                </div>
                <aside>
                    <SummaryBox/>
                </aside>
            </TwoThirdsColumns>
        </Main>
    </Layout>
