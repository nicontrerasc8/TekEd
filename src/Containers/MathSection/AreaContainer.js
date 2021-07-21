import React from 'react'
import styled from 'styled-components'
import LinkButton from '../../StyledComponents/Button/LinkButton'
import { StyledBackground } from '../../StyledComponents/StyledBackground'
import InitNavBar from '../NavBarContainer/NavBarContainer'
import SumIMG from "./sum.png"
import MinIMG from "./minus.png"
import DivImg from "./div.png"
import TimesIMG from "./times.png"

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
h2{
    font-size: clamp(40px, calc(3vw+3vh), calc(3vw+3vh));
    background-color: #305cae;
    font-weight: 600;
    padding: 20px;
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
background-color: #274C90;
color: white;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 1%;
padding: 20px 5%;
border-radius: 5px;
border: 2px solid #b6fbfb83;
width: clamp(300px, 30%, 30%);
h3{
    font-size: clamp(30px, calc(2vw+2vh+20px), calc(2vw+2vh+20px));
};
p{
    margin: 1rem 0;
}
span{
    color: rgb(0,220,240);
}
img{
    width: 200px;
    margin-bottom: 40px;
}
`

const Values = [
    {
        img: SumIMG,
        text: "Sumas",
        dif: "Desde sumas con números de 1 dígito hasta números de 4 dígitos",
        path: "sumas",
    },
    {
        img: MinIMG,
        text: "Restas",
        dif: "Desde restas con números de 1 dígito hasta números de 4 dígitos",
        path: "restas"
    },
    {
        img: TimesIMG,
        text: "Multiplicaciones",
        dif: "Desde multiplaciones con números de 1 dígito hasta números de 4 dígitos",
        path: "multiplicaciones"
    },
    {
        img: DivImg,
        text: "Divisiones",
        dif: "Desde multiplaciones con números de 1 dígito hasta números de 4 dígitos",
        path: "divisiones"
    },
]

const AreaContainer = () => {
    return (
        <div>
            <StyledBackground/>
            <InitNavBar/>
            <Div>
                <h2>
                    Juega y practica con matemáticas
                </h2>
                <StyledList>
                    {
                       Values && Values.map((data, idx) => {
                        return <StyledArticle key={idx}>
                            <img src={data.img}/>
                            <h3>{data.text}</h3>
                            <p>{data.dif}.</p>
                            <LinkButton path={"/matematica/" + data.path} text="Elegir" fontSize="25px"/>
                        </StyledArticle>
                    }) 
                    }
                </StyledList>
            </Div>
        </div>
    )
}

export default AreaContainer
