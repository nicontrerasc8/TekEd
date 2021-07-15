import React from 'react'
import styled from 'styled-components'
import LinkButton from '../../StyledComponents/Button/LinkButton'
import { StyledBackground } from '../../StyledComponents/StyledBackground'
import InitNavBar from '../NavBarContainer/NavBarContainer'

const Div = styled.div`
position: relative;
margin-top: 100px;
color: white;
font-family: "kufam", cursive;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 3;
text-align: center;
span{
    font-size: 40px;
    background-color: black;
    font-weight: 600;
    padding: 10px;
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
    font-size: clamp(30px, calc(2vw+2vh+20px), calc(2vw+2vh+20px));
};
p{
    margin: 1rem 0;
}
span{
    color: rgb(0,220,240);
}
`

const Values = [
    {
        text: "Sumas",
        dif: "Desde sumas con números de 1 dígito hasta números de 4 dígitos",
        path: "sumas"
    },
    {
        text: "Restas",
        dif: "Desde restas con números de 1 dígito hasta números de 4 dígitos",
        path: "restas"
    },
    {
        text: "Multiplicaciones",
        dif: "Desde multiplaciones con números de 1 dígito hasta números de 4 dígitos",
        path: "multiplicaciones"
    },
    {
        text: "Divisiones",
        dif: "Desde multiplaciones con números de 1 dígito hasta números de 4 dígitos",
        path: "divisiones"
    },
]

const AreaContainer = () => {
    return (
        <>
            <StyledBackground/>
            <InitNavBar/>
            <Div>
                <span>
                    Juega y practica con matemáticas
                </span>
                <StyledList>
                    {
                       Values && Values.map((data, idx) => {
                        return <StyledArticle key={idx}>
                            <h2>{data.text}</h2>
                            <p>{data.dif}.</p>
                            <LinkButton path={"/categoria/matematica/" + data.path} text="Elegir" fontSize="25px"/>
                        </StyledArticle>
                    }) 
                    }
                </StyledList>
            </Div>
        </>
    )
}

export default AreaContainer
