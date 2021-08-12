import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledBackground } from '../../../StyledComponents/StyledBackground'
import InitNavBar from '../../NavBarContainer/NavBarContainer'

const H2 = styled.h2`
margin-top: 16vh;
position: relative;
z-index: 3;
text-align: center;
font-family: "Kufam", cursive;
font-size:calc(1vh + 2vw + 1rem);
color: white;
background-color: #305cae;
`

const Container = styled.div`
margin-top: 4vh;
position: relative;
z-index: 3;
display: flex;
flex-wrap: wrap;
color: white;
justify-content: center;
grid-gap: calc(3vh + 3vw); 
align-items: center;
padding: 0 5vw 2rem 5vw;
    article{
        padding: 20px 20px 30px 20px;
        text-align: center;
        border: 3px solid #b6fbfb83;
        border-radius: 5px;
        background: #305cae;
        font-size: calc(2vh + 1vw);
            h1{
                padding-bottom: 30px;
            }
            a{
                padding: 15px;
                font-size: calc(2vh + 1vw + 10px);
                color: white;
                background: #b6fbfb83;
                border-radius: 5px;
                margin-bottom: 2rem;
            }

    }
`

const Options = [10,20,30, 40, 50, 60, 70, 80, 90, 100]

const ChooseTablas = () => {
    return (
        <div>
            <InitNavBar/>
            <StyledBackground/>
            <H2>Tablas de multiplicar</H2>
            <Container>
                {
                    Options && Options.map((data,idx) => {
                        return <article key={idx}>
                            <h1>Números del {data - 9} al {data}</h1>
                            <Link to={"/tablas-de-multiplicar/" + data}>
                                Elegir
                            </Link>
                        </article>
                    })
                }
            </Container>
        </div>
    )
}

export default ChooseTablas
