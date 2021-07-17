import React,{useState, useEffect} from 'react'
import styled from "styled-components"
import LinkButton from '../../StyledComponents/Button/LinkButton'

const StyledArticle = styled.article`
background-color: rgb(30,30,70);
color: white;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
span{
    color: rgb(0,220,240);
}
`
const StyledList = styled.div`
width: 90vw;
position: relative;
display: flex;
flex-wrap:wrap;
grid-gap: 1rem;
justify-content: center;
z-index: 3;
margin: 30px 5vw;
`

const Article = ({article}) => {

    const [CategoryText, setCategoryText] = useState("")

    useEffect(() => {
        if(article.category === "basico"){
            setCategoryText("Básico (6 a 7 años)")
        }
        if(article.category === "intermedio"){
            setCategoryText("Intermedio (8 a 9 años)")
        }
        if(article.category === "avanzado"){
            setCategoryText("Avanzado (10 a 11 años)")
        }
    }, [])

    return<StyledArticle> 
    <h2>
        {article.title}
    </h2>
    <p>{article.SubHeader}</p>
    <p><span>Dificultad: {CategoryText}</span></p>
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
