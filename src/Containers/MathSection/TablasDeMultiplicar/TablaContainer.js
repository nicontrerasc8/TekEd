import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import useAppContext from '../../../Context/AppContext'
import { StyledBackground } from '../../../StyledComponents/StyledBackground'
import InitNavBar from '../../NavBarContainer/NavBarContainer'
import InputArea from '../InputArea/InputArea'
import Check from "../check.png"
import Wrong from "../wrong.png"
import useKeypress from 'react-use-keypress'
import MultiplicationSolutionArea from '../SolutionsArea/MultiplicationsSolutionArea'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align:center;
grid-gap: 20px;
justify-content: center;
width:100vw;
padding: 20px 5vw;
margin-top: 100px;
font-family:"Kufam", cursive;
color: white;
position: relative;
z-index: 2;
    h2{
        font-family: 'Carter one', cursive;
        font-size:clamp(40px, calc(2vw + 2vh), calc(2vw + 2vh));
        background-color: #305cae;
        padding: 5px;
        font-weight: 500;
            span{
                color: #b6fbfb;
            }
    }
    button{
        padding: 12px;
        font-size: clamp(25px, calc(1vw + 2vh), calc(2vw + 2vh));
        font-family: "Kufam", cursive;
        border-radius: 5px;
    }
    blockquote{
        width: clamp(350px, 40vw, 40vw);
        display: flex;
        flex-direction: column;
        align-items:center;
        background: #274C90;
        padding: 20px 5%;
        border-radius: 5px;
        border: 3px solid #b6fbfb83;
            p{
                font-size: 35px;
                color: gold;
                padding: 0 0 15px 0;
            }
            article{
                font-size: calc(3vh + 3vw + 20px);
                border-bottom: 3px solid white;
                display: flex;
                flex-direction: column;
                margin: 20px 0 40px 0;
                text-align:right;
            }
            section{
                width: 100%;
                display: flex;
                flex-direction: row;
                grid-gap: 2px;
                align-items: center;
                justify-content:center;
                input{
                    border: 3px solid #b6fbfb83;
                    padding: 10px 0;
                    width: 20%;
                    color: white;
                    margin-bottom: 20px;
                    font-family: "Kufam", cursive;
                    text-align: center;
                    border-radius: 5px;
                    font-weight: 500;
                    font-size: calc(1vw + 1vh + 10px);
                    background-color: transparent;
                    ::placeholder{
                    color: #b6fbfb83;
                    };
                    ::focus{
                        border-color: white
                    }
                }
            }
            button{
                font-size: clamp(20px, calc(1vw + 1vh), calc(1vw + 1vh));
                background-color: #b6fbfb83;
                color: white;
            }
    }
`
const Table = styled.article`
width: 100%;
display: flex;
flex-wrap: wrap;
grid-gap: 30px;
align-items: center;
justify-content: center;
font-size: clamp(30px, calc(2vw + 1vh), calc(2vw + 1vh));
    p{
        background-color: #274C90;
        border: 3px solid;
        padding: 20px;
        border-radius: 5px;
    }
`

const ResultsBox = styled.div`
    position: fixed;
    z-index: 10;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #305cae;
    transtion: 1s ease;
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;
    font-family: "Kufam", cursive;
    padding: 20px;
    div{
        width: clamp(320px, 50vw, 60vw);
        background-color: #305cae;
        padding: 20px 5%;
        border: 4px solid #b6fbfb83;
        border-radius: 5px;
        display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align:center;
    }
    img{
        width: clamp(180px, 60%, 80%);
    }
    h3{
        font-size: clamp(35px, calc(3vw+2vh), calc(3vw+2vh));
        font-weight: 600;
        padding: 10px 0;
    }
    h4{
        font-size: clamp(30px, calc(2vw+2vh+5px), calc(2vw+2vh+5px));
        margin-bottom: 20px;
        font-weight: 600;
    }
    button{
        background-color: #b6fbfb83;
        color: white;
        padding: 10px;
        font-family: "Kufam", cursive;
        border-radius: 5px;
        transition: 1s;
        font-size: clamp(25px, calc(1vw+2vh), calc(1vw+2vh));
        &:hover{
            background-color: #7ad4d4;
        }
    }
`
const SolutionBox = styled.div`
position: fixed;
top: 0;
left: ${props => props.isIn ? "0" : "-100vw"};
z-index: 40;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
font-family: "Kufam", cursive;
color: white;
justify-content: center;
height: 100vh;
transition: 1s;
background-color: #305cae;
`

const TableOfMultiplications = ({number}) => {
    var Arr = []
    const [Numbers, setNumbers] = useState([])
    const {rango} = useParams()

    useEffect(() => {
        for (let i = 1; i <= rango; i++) {
            Arr.push(i)
            setNumbers(Arr)
        }
    }, [rango])

    return <Table>
        {
            Numbers && Numbers.map((x, idx) => {
                return <p key={idx}>{number} x {x} = {number*x}</p>
            })
        } 
    </Table>
} 

const TablaContainer = () => {

    const [Y, setY] = useState(0)
    const [Z, setZ] = useState(0)

    const [ShowSolution, setShowSolution] = useState(false)
    const [AnsWasCorrect, setAnsWasCorrect] = useState(false)
    const [ShowResults, setShowResults] = useState(false)

    const [Value, setValue] = useState("")
    const [Value2, setValue2] = useState("")
    const [Value3, setValue3] = useState("")
    const [Value4, setValue4] = useState("")

    const [ShowPractice, setShowPractice] = useState(true)
    const [ShowTable, setShowTable] = useState(false)

    const {rango, number} = useParams()
    const {CounterCorrect, setCounterCorrect} = useAppContext()

    const addCorrect = () => {
        setCounterCorrect(CounterCorrect+1)
        setShowResults(false)
        setValue("")
        setValue2("")
        setValue3("")
        setValue4("")
    }
    const WasIncorrect = () => {
        setShowResults(false)
        setValue("")
        setValue2("")
        setValue3("")
        setValue4("")
    }
    const AvSolution = () => {
        setShowSolution(true)
    }   

    const CheckAnswer = () => {
        if (Value === "") {
            alert("Escribe tu respuesta para luego comprobarla")
        }else if(isNaN(Value)){
            alert("Escribe un valor numérico")
        }
        else {
            var response
            response = Value3 + Value2 + Value
            if(response == Z){
                setAnsWasCorrect(true)
            }else{
                setAnsWasCorrect(false)
            }
            setTimeout(() => {
                setShowResults(true)
            }, 500);    
        }
    }
    useKeypress(["Enter"],(event) => {
        if(event.key === "Enter"){
            CheckAnswer()
        }
    })
    const SolutionOut = () => {
        setShowSolution(false)
        setShowResults(false)
        setValue("")
        setValue2("")
        setValue3("")
        setValue4("")
    }
    const ChangeShowValues = () => {
        setShowPractice(!ShowPractice)
        setShowTable(!ShowTable)
    }

    useEffect(() => {
        var y = Math.floor(Math.random() * (rango - 1) + 1)
        var z = y * number
        setY(y)
        setZ(z)
        return () => 0
    }, [rango, number, CounterCorrect])

    return <div>
            <InitNavBar isGoBack={true} Path={"/tablas-de-multiplicar/" + rango} isHome={true}/>
            <StyledBackground/>
            <SolutionBox isIn={ShowSolution}>
                 <MultiplicationSolutionArea x={Y} y={number} Result={Z} fnOut={SolutionOut}/> 
            </SolutionBox>
            <ResultsBox className={ShowResults ? "active-results" : "results"}>
               <div>
                   <img src={AnsWasCorrect ? Check : Wrong}/>
               <h3>{AnsWasCorrect ? "¡Respuesta correcta!" : "¡Sigue intentando!"}</h3>
               {
                   AnsWasCorrect && <h4>{Y} x {number} = {Z}</h4>
               }
               <button onClick={AnsWasCorrect ? addCorrect : WasIncorrect}>{AnsWasCorrect ? "Siguiente ejercicio" : "Intenta de nuevo"}</button>
               {
                   !AnsWasCorrect && <button onClick={AvSolution} style={{marginTop:"20px", background:"white", color:"#305cae"}}>
                       Aprende a resolverlo
                    </button>
               }
                </div>
           </ResultsBox>
            <Container>
                <h2>Tabla del <span>{number}</span></h2>
                <button className="practice" onClick={ChangeShowValues}>
                {ShowPractice ? <p>Ver la tabla</p> : "Practicar"}
                </button>
                {
                    ShowPractice && <blockquote>
                        {
                   CounterCorrect > 0 && <p><i className="fas fa-medal"></i> x {CounterCorrect} </p>
               }
                        <article>
                            <span>{Y}</span>
                            <span>x {number}</span>
                        </article>
                        <InputArea
                            x1={Value}
                            x2={Value2}
                            x3={Value3}
                            x4={Value4}
                            y1={setValue}
                            y2={setValue2}
                            y3={setValue3}
                            y4={setValue4}
                            val={Z} 
                            />
                        <button onClick={CheckAnswer}>Comprobar</button>
                    </blockquote>
                }

                {
                    ShowTable && <TableOfMultiplications number={number}/>
                }
            </Container>
        </div>
    
}

export default TablaContainer
