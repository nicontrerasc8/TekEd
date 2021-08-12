import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledBackground } from '../../../StyledComponents/StyledBackground'
import InitNavBar from '../../NavBarContainer/NavBarContainer'

const H2 = styled.h2`
margin-top: 120px;
position: relative;
z-index: 3;
text-align: center;
font-family: "Kufam", cursive;
font-size:calc(2vh + 2vw + 1rem);
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
a{
    color: white;
}
    article{
        padding: 20px 5%;
        transition: 1s;
        text-align: center;
        border: 3px solid;
        border-radius: 5px;
        background: #274C90;
            span{
                font-family: 'Carter one', cursive;
                transition: 1s;
                color: #b6fbfb;
                font-size: clamp(45px, calc(3vw + 2vh - 5px), calc(3vw + 2vh - 5px));
            }
            h1{
                font-size: clamp(35px, calc(2vw + 2vh - 5px), calc(2vw + 2vh - 5px));
                font-family: 'Carter one', cursive;
                font-weight: 400;
            }
            &:hover{
                background-color: #305cae;
                span{
                    color: gold;
                }
            }
    }
`

const Options = [10,20,30, 40, 50, 60, 70, 80, 90, 100]

const ChooseTablas = () => {
    return (
        <div>
            <InitNavBar isHome={true}/>
            <StyledBackground/>
            <H2>Tablas de multiplicar</H2>
            <Container>
                {
                    Options && Options.map((data,idx) => {
                        return <Link to={"/tablas-de-multiplicar/" + data} key={idx}>
                                <article key={idx}>
                            <span>{data-9} - {data}</span>
                            <h1>Números del {data - 9} al {data}</h1>
                        </article>
                        </Link>
                    })
                }
            </Container>
        </div>
    )
}

export default ChooseTablas
