import React from 'react'
import styled from 'styled-components'
import LinkButton from '../../../StyledComponents/Button/LinkButton'

const Container = styled.div`
padding: 2rem 10px;
background-color: rgb(40,40,50);
border: 2px solid rgb(20,180,200);
border-radius: 5px;
width: clamp(300px, 31%, 31%);
display: flex;
flex-direction: column;
text-align: center;
font-family: "Kufam", cursive;
color: white;
`
const Title = styled.span`
font-size: 2.5rem;
margin: 10px 0;
`
const Subtitle = styled.span`
font-size: 19px;
margin-bottom: 1rem;
`

const ArticleLink = ({data}) => {
    return (
        <Container>
            <Title>
                {data.title}
            </Title>
            <Subtitle>
                {data.SubHeader}
            </Subtitle>
            <LinkButton text="Leer" fontSize="20px"/>
        </Container>
    )
}

export default ArticleLink
