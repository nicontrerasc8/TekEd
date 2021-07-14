import React, { useEffect, useState } from 'react'
import { StyledBackground } from '../../StyledComponents/StyledBackground'
import InitNavBar from '../NavBarContainer/NavBarContainer'
import styled from 'styled-components'
import LinkButton from '../../StyledComponents/Button/LinkButton'

const Article = styled.article`
position: relative;
display: flex;
flex-direction: column;
align-items: center;font-family: "Kufam", cursive;
z-index: 3;
background-color: rgba(0,0,50,.8);
color: white;
border: 3px solid rgb(25,125,179);
border-radius: 5px;
padding: 20px;
width: clamp(320px, 40vw, 40vw);
text-align: center;
p{
    font-size: 20px;
    padding: 0 0 15px 0;
}
h2{
    font-size: calc(3vh + 3vw + 20px);
    padding-bottom: 20px;
}
input{
    border: 3px solid rgb(11,125,179);
    padding: 10px;
    color: rgb(179,179,179);
    margin-bottom: 20px;
    font-family: "Kufam", cursive;
    text-align: center;
    border-radius: 5px;
    font-weight: 500;
    font-size: calc(1vw + 1vh + 10px);
    background-color: rgb(0,0,70);
    ::placeholder{
       color: rgb(120,120,120)
    }
    ::focus{
        border-color: rgb(0,0,0)
    }
}
div{
    padding-top: 20px;
    display: flex;
    width: 100%;
    grid-gap: 10px;
    align-items: center;
    justify-content: space-between;
    button{
        font-size: 20px;
        padding: 8px;
        background: rgb(20,130,180);
        color: white;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer
    }
}
`
const Button = styled.button`
padding: 10px;
font-size: 25px;
background-color: rgb(40,150,200);
border-radius: 5px;
color: white;
font-family: "Kufam", cursive;
`

const AdditionContainer = () => {
    const [Counter, setCounter] = useState(0)
    const [CounterCorrect, setCounterCorrect] = useState(0)
    const [Value, setValue] = useState("")
    const [valor1, setvalor1] = useState(0)
    const [valor2, setvalor2] = useState(0)
    const addCorrect = () => {
        setCounterCorrect(CounterCorrect+1)
        setCounter(Counter+1)
    }
    const CheckAnswer = () => {
        if(Value == valor1 + valor2){
            addCorrect()
        }else{
            setCounter(Counter+1)
        } 
        setValue("")
    }
    useEffect(() => {
        console.log("xd")
        var v1 = Math.floor(Math.random() * 10 + 1);
        var v2 = Math.floor(Math.random() * 10 + 1);
        setvalor1(v1)
        setvalor2(v2)
    }, [Counter])


    return <Article>
        <p>Puntacion: {CounterCorrect}/{Counter}</p>
        <h2>{valor1} + {valor2}</h2>
        <input placeholder="Escribe aquí tu respuesta" value={Value} onChange={(e) => setValue(e.target.value)}/>
        <Button onClick={CheckAnswer}>
            Comprobar
        </Button>
        {/* <div>
        <button>Disminuir dificultad</button>
        <button>Aumentar dificultad</button>
        </div> */}
    </Article>
}

const MathAreaContainer = () => {
    return (
        <>
            <StyledBackground/>
            <InitNavBar/>
            <div className="math-ex">
                <h2>Resuelve</h2>
                <AdditionContainer/>
            </div>
        </>
    )
}

export default MathAreaContainer
