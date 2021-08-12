import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { StyledBackground } from '../../../StyledComponents/StyledBackground'
import InitNavBar from '../../NavBarContainer/NavBarContainer'

const Container = styled.div`
display: flex;margin-top: 100px;
flex-wrap: wrap;
grid-gap: 30px;
align-items: center;
text-align:center;
justify-content: center;
width:100vw;
padding: 20px 5vw;
position: relative;
z-index: 2;
    a{
        background: #274C90;
        padding: 20px 5%;
        font-family: "Kufam", cursive;
        color: white;
        font-size: clamp(25px, calc(1vw + 1vh + 10px),calc(1vw + 1vh + 10px));
        border: 3px solid;
        border-radius: 5px;
        transition: 1s;
            span{
                padding: 20px 0;
                font-family: 'Carter one', cursive;
                font-size: clamp(45px, calc(3vw + 3vh), calc(3vw + 3vh));
                color: #b6fbfb;
                transition: 1s;
            }
            &:hover{
                background: #305cae;
                border-color: #b6fbfb;
                    span{
                        color: gold;
                    }
            }
    }
`


const TablasDeMultiplicar = () => {
    var Arr = []
    const [ArrayOfNum, setArrayOfNum] = useState([])
    const {rango} = useParams()
    useEffect(() => {
        for (let i = rango-9; i <= rango; i++) {
            Arr.push(i)
            setArrayOfNum(Arr)
        }
    }, [rango])
    return (
        <div>
            <StyledBackground/>
            <InitNavBar isHome={true} isGoBack={true} Path="/tablas-de-multiplicar"/>
                <Container>
                    {
                        ArrayOfNum && ArrayOfNum.map((data, idx) => {
                            return <Link key={idx} to={"/tablas-de-multiplicar/" + rango + "/" + data}>
                                <span>{data}</span>
                                <p>Tabla del {data}</p>
                            </Link>
                        })
                    }
                </Container>
        </div>
    )
}

export default TablasDeMultiplicar
