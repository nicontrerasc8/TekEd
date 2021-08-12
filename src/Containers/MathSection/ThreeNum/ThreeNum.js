import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LoadingContainer from '../../../Components/LoadingContainer'
import LinkButton from '../../../StyledComponents/Button/LinkButton'
import { StyledBackground } from '../../../StyledComponents/StyledBackground'
import InitNavBar from '../../NavBarContainer/NavBarContainer'
import SumIMG from "../sum.png"
import MinIMG from "../minus.png"
import DivImg from "../div.png"
import TimesIMG from "../times.png"
import { Link } from 'react-router-dom'

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
h3{
    margin-bottom: 20px;
}
a{
    width: clamp(300px, 30%, 30%);
}
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
border: 4px solid #b6fbfb83;
h3{
    font-size: clamp(30px, calc(2vw+2vh+20px), calc(2vw+2vh+20px));
};
p{
    margin: 1rem 0;
    span{
        text-transform: lowercase;
        color: white;
    }
}
span{
    background:#3077ae;
    padding: 10px;
    border: 4px solid transparent;
    transition: 1s;
    font-size: clamp(25px, calc(2vw + 2vh - 15px), calc(2vw + 2vh - 15px));
    border-radius: 5px;
 }
 transition: 1s;
 &:hover{
    background: #3060ae;
    span{
        border: 4px solid #b6fbfb83;
    }
 }
img{
    width: 50%;
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
]

const ThreeNum = () => {
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    return (
        <div>
            <InitNavBar isHome={true}/>
            <StyledBackground/>
            {Loading && <LoadingContainer/>}
            <Div>
                <h2>Operaciones con 3 números</h2>
                <StyledList>
                    {
                       Values && Values.map((data, idx) => {
                        return <Link to={"/operaciones-con-3-numeros/" + data.path}>
                             <StyledArticle key={idx}>
                            <img src={data.img}/>
                            <h3>{data.text}</h3>
                            <span>Elegir</span>
                        </StyledArticle>
                        </Link>
                    }) 
                    }
                    {/* <StyledArticle>
                            <img src={CombinadasIMG}/>
                            <h3>Operaciones combinadas</h3>
                            <LinkButton path="/operaciones-simples/operaciones-combinadas" text="Elegir" fontSize="25px"/>
                    </StyledArticle> */}
                </StyledList>
            </Div>
        </div>
    )
}

export default ThreeNum
