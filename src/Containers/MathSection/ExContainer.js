import React, { useEffect, useState, useRef } from 'react'
import { StyledBackground } from '../../StyledComponents/StyledBackground'
import InitNavBar from '../NavBarContainer/NavBarContainer'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import useAppContext from '../../Context/AppContext'

const ChooseDiv = styled.div`
position: fixed;
    z-index: 20;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(30,30,60);
    display: flex;
    align-items: center;
    color: white;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    font-family: "Kufam", cursive;
    padding: 20px;
    div{
        display: flex;
    align-items: center;
    flex-direction: column;
    width: clamp(320px, 50vw, 60vw);
    border: 3px solid rgb(30,100,200);
    padding: 20px;
    border-radius: 5px;
    justify-content: center;
        h2{
            font-size: clamp(30px, calc(2vw+2vh+5px), calc(2vw+2vh+5px));
        }
        button{
            margin-top: 20px;
            padding: 10px;
            font-family: "Kufam", cursive;
            width: 180px;
            font-size: 19px;
            color: white;
            background-color: rgb(30,100,200);
            border-radius: 5px;
            border: 3px solid;
        }
    }
`

const ResultsBox = styled.div`
    position: fixed;
    z-index: 10;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(30,30,60,.95);
    transtion: 1s ease;
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;
    font-family: "Kufam", cursive;
    padding: 20px;
    div{
        width: clamp(320px, 50vw, 60vw);
        background-color: rgba(0,0,50,.8);
        padding: 20px 5%;
        border: 4px solid rgb(30,150,200);
        border-radius: 5px;
        display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align:center;
    }
    h3{
        font-size: clamp(35px, calc(3vw+2vh), calc(3vw+2vh));
        font-weight: 600;
        padding: 10px 0 30px 0;
    }
    h4{
        font-size: clamp(30px, calc(2vw+2vh+5px), calc(2vw+2vh+5px));
        margin-bottom: 30px;
        font-weight: 600;
    }
    button{
        background-color: rgb(30,100,200);
        color: white;
        padding: 10px;
        border: 2px solid;
        font-family: "Kufam", cursive;
        font-weight: 500;
        border-radius: 5px;
        font-size: clamp(25px, calc(1vw+2vh), calc(1vw+2vh));
    }
`

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
width: clamp(350px, 40vw, 40vw);
text-align: center;
p{
    font-size: 20px;
    padding: 0 0 15px 0;
}
h2{
    font-size: calc(3vh + 3vw + 20px);
    padding: 20px 0;
}
input{
    border: 3px solid rgb(11,125,179);
    padding: 10px 0;
    width: 100%;
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
        background: rgb(130,40,180);
        color: white;
        font-weight: 600;
        font-family: "Kufam", cursive;
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


const ExContainer = () => {
    const [Counter, setCounter] = useState(0)
    const [CounterCorrect, setCounterCorrect] = useState(0)
    const [Value, setValue] = useState("")
    const [valor1, setvalor1] = useState(0)
    const [valor2, setvalor2] = useState(0)
    const [FinalResult, setFinalResult] = useState(0)
    const [ShowResults, setShowResults] = useState(false)
    const [AnsWasCorrect, setAnsWasCorrect] = useState(false)
    const [Operator, setOperator] = useState("")
    const {type} = useParams()
    const inputRef = useRef(null);
    const [InvalidateHarder, setInvalidateHarder] = useState(false)
    const [InvalidateSofter, setInvalidateSofter] = useState(false)
    const {SumLevel, setSumLevel, 
        SubstractLevel, setSubstractLevel, 
        MulLevel, setMulLevel, 
        DivLevel, setDivLevel} = useAppContext()
        const [ChooseLevel, setChooseLevel] = useState(false)

    const addCorrect = () => {
        setCounterCorrect(CounterCorrect+1)
        setCounter(Counter+1)
        setShowResults(false)
        setValue("")
    }
    const addIncorrect = () => {
        setCounter(Counter+1)
        setShowResults(false)
        setValue("")
    }
    const SetLevel = (param) => {
        if(type === "sumas"){
            setSumLevel(param)
        }
        if(type === "restas"){
            setSubstractLevel(param)
        }
        if(type === "multiplicaciones"){
            setMulLevel(param)
        }
        if(type === "divisiones"){
            setDivLevel(param)
        }
        setChooseLevel(false)
    }

    const ChangeLevel = (param) => {
        if(type === "sumas"){
            setSumLevel(SumLevel + param)
            console.log(SumLevel)
        }
        if(type === "restas"){
            setSubstractLevel(SubstractLevel + param)
        }
        if(type === "multiplicaciones"){
            setMulLevel(MulLevel + param)
        }
        if(type === "divisiones"){
            setDivLevel(DivLevel + param)
        }
    }
    
    const CheckAnswer = () => {
        if (Value === "") {
            alert("Escribe tu respuesta para luego comprobarla")
        }else if(isNaN(Value)){
            alert("Escribe un valor numérico")
        }
        else {
            if(Value == FinalResult){
                setAnsWasCorrect(true)
            }else{
                setAnsWasCorrect(false)
            }
            setTimeout(() => {
                setShowResults(true)
            }, 200);    
        }
    }
        
    useEffect(() => {
        if(type === "sumas"){
            var v1 = Math.floor(Math.random() * Math.pow(10, SumLevel) + 1);
            if (SumLevel === 2 && v1 < 10){
                v1 += 10;
            }
            if (SumLevel === 3 && v1 < 100){
                v1 += 100;
            }
            if (SumLevel === 4 && v1 < 1000){
                v1 += 1000;
            }
            var v2 = Math.floor(Math.random() * Math.pow(10, SumLevel) + 1);
            if (SumLevel === 2 && v2 < 10){
                v2 += 10;
            }
            if (SumLevel === 3 && v2 < 100){
                v2 += 100;
            }
            if (SumLevel === 4 && v2 < 1000){
                v2 += 1000;
            }
            var result = v1+v2
            setOperator("+")
            if (SumLevel === null){
                setChooseLevel(true)
            }else {
                setChooseLevel(false)
            }


            if (SumLevel === 1){
                setInvalidateSofter(true)
            }
            else{
                setInvalidateSofter(false)
            }


            if(SumLevel === 4){
                setInvalidateHarder(true)
            }
            else{
                setInvalidateHarder(false)
            }
        }
        if(type === "restas"){
            var v1 = Math.floor(Math.random() * Math.pow(10, SubstractLevel) + 1);
            if (SubstractLevel === 2 && v1 < 10){
                v1 += 10;
            }
            if (SubstractLevel === 3 && v1 < 100){
                v1 += 100;
            }
            if (SubstractLevel === 4 && v1 < 1000){
                v1 += 1000;
            }
            var v2 = Math.floor(Math.random() * Math.pow(10, SubstractLevel) + 1);
            if (SubstractLevel === 2 && v2 < 10){
                v2 += 10;
            }
            if (SubstractLevel === 3 && v2 < 100){
                v2 += 100;
            }
            if (SubstractLevel === 4 && v2 < 1000){
                v2 += 1000;
            }
            if (v1 < v2){
                var aux = v1;
                v1 = v2
                v2 = aux
            }
            var result = v1-v2
            setOperator("-")
            if (SubstractLevel === null){
                setChooseLevel(true)
            }else {
                setChooseLevel(false)
            }


            if (SubstractLevel === 1){
                setInvalidateSofter(true)
            }
            else{
                setInvalidateSofter(false)
            }


            if (SubstractLevel === 4){
                setInvalidateHarder(true)
            }
            else{
                setInvalidateHarder(false)
            }
        }
        if(type === "multiplicaciones"){
            var v1 = Math.floor(Math.random() * Math.pow(10, MulLevel) + 1);
            if (MulLevel === 2 && v1 < 10){
                v1 += 10;
            }
            if (MulLevel === 3 && v1 < 100){
                v1 += 100;
            }
            if (MulLevel === 4 && v1 < 1000){
                v1 += 1000;
            }
            var v2 = Math.floor(Math.random() * Math.pow(10, MulLevel) + 1);
            if (MulLevel === 2 && v2 < 10){
                v2 += 10;
            }
            if (MulLevel === 3 && v2 < 100){
                v2 += 100;
            }
            if (MulLevel === 4 && v2 < 1000){
                v2 += 1000;
            }
            var result = v1*v2
            setOperator("x")
            if (MulLevel === null){
                setChooseLevel(true)
            }else {
                setChooseLevel(false)
            }


            if (MulLevel === 1){
                setInvalidateSofter(true)
            }
            else{
                setInvalidateSofter(false)
            }


            if (MulLevel === 4){
                setInvalidateHarder(true)
            }
            else{
                setInvalidateHarder(false)
            }
        }
        if(type === "divisiones") {
            var v1 = Math.floor(Math.random() * Math.pow(10, DivLevel) + 1);
            if (DivLevel === 2 && v1 < 10){
                v1 += 10;
            }
            if (DivLevel === 3 && v1 < 100){
                v1 += 100;
            }
            if (DivLevel === 4 && v1 < 1000){
                v1 += 1000;
            }
            var v2 = Math.floor(Math.random() * Math.pow(10, DivLevel) + 1);
            if (DivLevel === 2 && v2 < 10){
                v2 += 10;
            }
            if (DivLevel === 3 && v2 < 100){
                v2 += 100;
            }
            if (DivLevel === 4 && v2 < 1000){
                v2 += 1000;
            }
            var result = v1/v2
            setOperator("÷")
            if (DivLevel === null){
                setChooseLevel(true)
            }else {
                setChooseLevel(false)
            }


            if (DivLevel === 1){
                setInvalidateSofter(true)
            }
            else{
                setInvalidateSofter(false)
            }


            if(DivLevel === 4){
                setInvalidateHarder(true)
            }
            else{
                setInvalidateHarder(false)
            }
        }
        setvalor1(v1)
        setvalor2(v2)
        setFinalResult(result)
        inputRef.current.focus()
    }, [Counter, ChooseLevel, SumLevel, SubstractLevel, MulLevel, DivLevel])


    return <main>
        {
            ChooseLevel && <ChooseDiv>
                <div>
                <h2>Elige la cantidad de dígitos con los que quieres realizar las {type}</h2>
                <button onClick={() => SetLevel(1)}>Un dígito</button>
                <button onClick={() => SetLevel(2)}>Dos dígitos</button>
                <button onClick={() => SetLevel(3)}>Tres dígitos</button>
                <button onClick={() => SetLevel(4)}>Cuatro dígitos</button>
                </div>
            </ChooseDiv>
        }
    <ResultsBox className={ShowResults ? "active-results" : "results"}>
        {
            AnsWasCorrect ? 
            <div>
                <h3>¡Respuesta correcta!</h3>
                <h4>{valor1} {Operator} {valor2} = {FinalResult}</h4>
                <button onClick={addCorrect}>Siguiente ejercicio</button>
            </div> : 
            <div>
            <h3>¡Sigue intentando!</h3>
            <h4>{valor1} {Operator} {valor2} = {FinalResult}</h4>
            <h4>Tu respuesta fue: {Value}</h4>
            <button onClick={addIncorrect}>Siguiente ejercicio</button>
        </div>
        }
        </ResultsBox>
    <Article>
        <p>Puntacion: {CounterCorrect}/{Counter}</p>
        <h2>{valor1} {Operator} {valor2}</h2>
        <input autoComplete="off" ref={inputRef} placeholder="Escribe aquí tu respuesta" value={Value} onChange={(e) => setValue(e.target.value)}/>
        <Button onClick={CheckAnswer}>
            Comprobar
        </Button>
        <div>
        <button disabled={InvalidateSofter} onClick={() => ChangeLevel(-1)}>Disminuir dificultad</button>
        <button disabled={InvalidateHarder} onClick={() => ChangeLevel(1)}>Aumentar dificultad</button>
        </div>
    </Article> </main>
}

const ExAreaContainer = () => {

    return (
        <div>
            <StyledBackground/>
            <InitNavBar/>
            <div className="math-ex">
                <h2>Resuelve</h2>
                <ExContainer/>
            </div>
        </div>
    )
}

export default ExAreaContainer
