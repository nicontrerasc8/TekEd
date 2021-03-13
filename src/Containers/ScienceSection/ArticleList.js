import React from 'react'
import styled from "styled-components"
import LinkButton from '../../StyledComponents/Button/LinkButton'

const StyledArticle = styled.article`
background-color: rgb(30,30,70);
color: white;
text-align: center;
margin: 0 1%;
padding: 20px 5%;
border-radius: 5px;
border: 2px solid rgb(20,150,200);
width: clamp(300px, 30%, 30%);
h2{
    font-size: 30px;
};
p{
    margin: 1rem 0;
}
`
const StyledList = styled.div`
width: 90vw;
position: relative;
display: flex;
flex-wrap:wrap;
justify-content: center;
z-index: 3;
margin-left: 5vw;
margin-top: 30px;
`

const Article = ({article}) => {
    return<StyledArticle> 
    <h2>
        {article.title}
    </h2>
    <p>{article.SubHeader}</p>
    <LinkButton text="Elegir" fontSize="20px" path={"/categoria/ciencia/" + article.area + "/" + article.identification}/>
    </StyledArticle>
}

export const ArticleList = ({articles}) => {
    return (
        <StyledList>
            {
                articles && 
                articles.map((data, idx) => {
                    return <Article article={data} key={idx}/>
                }) 
            }
        </StyledList>
    )
}
