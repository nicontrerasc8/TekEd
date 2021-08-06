import React, { useEffect, useState, useRef } from 'react'
import { StyledBackground } from '../../StyledComponents/StyledBackground'
import InitNavBar from '../NavBarContainer/NavBarContainer'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import useAppContext from '../../Context/AppContext'
import LoadingContainer from "../../Components/LoadingContainer"
import LinkButton from '../../StyledComponents/Button/LinkButton'
import useKeypress from "react-use-keypress"
import Check from "./check.png"
import Wrong from "./wrong.png"
import InputArea from './InputArea/InputArea'
import Sum_SubstractSolutionArea from './SolutionsArea/Sum&SubstractSolutionArea'
import MultiplicationSolutionArea from './SolutionsArea/MultiplicationsSolutionArea'
import DivisionSolutionArea from './SolutionsArea/DivisionSolutionArea'

const Accordeon = styled.div`
position: relative;
display: flex;
flex-direction: column;
padding: 20px;
background: #305cae;
width: clamp(300px, 70vw, 70vw);
align-items: center;
font-family: "Kufam", cursive;
text-align:right;
z-index: 3;
article{
    button{
        font-weight: 600;
        background-color: #b6fbfb50;
        color: white;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: left;
        font-family: "Kufam", cursive;
        border: 2px solid #b6fbfb83;
        padding: 10px;
        border-radius: 5px;
        font-size: clamp(25px, calc(1vw + 1vh), calc(1vw + 1vh));
        div{
            font-weight: bold;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            border-bottom: 3px solid;
            margin-bottom: 10px;
        }
        section{
            font-weight: bold;
            display: flex;
            flex-direction: row;
            margin-bottom: 10px;
        }
    }
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

const Span = styled.span`
border-left: 3px solid;
border-bottom: 3px solid;
margin-left: 20px;
padding: 10px;
`

const Article = styled.article`
position: relative;
display: flex;
flex-direction: column;
align-items: center;font-family: "Kufam", cursive;
z-index: 3;
background-color: #305cae;
color: white;
border: 3px solid #b6fbfb83;
border-radius: 5px;
padding: 20px;
width: clamp(350px, 40vw, 40vw);
p{
    font-size: 35px;
    color: gold;
    padding: 0 0 15px 0;
}
article{
    text-align: right;
    font-size: calc(3vh + 3vw + 20px);
    padding: 0;
    margin: 20px 0 40px 0;
    display: flex;
    flex-direction: column;
    border-bottom: 3px solid white;
}
section{
    display: flex;
    flex-direction: row;
    grid-gap: 2px;
    align-items: center;
    justify-content:center;
}
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
        background: #b6fbfb83;
        color: white;
        font-weight: 600;
        font-family: "Kufam", cursive;
        border-radius: 5px;
        cursor: pointer;
        transition: 1s;
        &:hover{
            background-color: #7ad4d4;
        }
    }
}
`
const Button = styled.button`
padding: 10px;
font-size: 25px;
background-color: #b6fbfb83;
border-radius: 5px;
color: white;
font-family: "Kufam", cursive;
transition: 1s;
&:hover{
    background-color: #7ad4d4;
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

const Info = [
    {
        fn1: 1,
        fn2: 1, 
    },
    {
        fn1: 2,
        fn2: 1, 
    },
    {
        fn1: 3,
        fn2: 1, 
    },
    {
        fn1: 4,
        fn2: 1, 
    },
    {
        fn1: 2,
        fn2: 2, 
    },
    {
        fn1: 3,
        fn2: 2, 
    },
    {
        fn1: 4,
        fn2: 2, 
    },
    {
        fn1: 3,
        fn2: 3, 
    },
    {
        fn1: 4,
        fn2: 3, 
    },
    {
        fn1: 4,
        fn2: 4, 
    },
]


const ExContainer = () => {
    const [Loading, setLoading] = useState(false)
    const [Explanation, setExplanation] = useState(0)
    const [ShowSolution, setShowSolution] = useState(false)
    const [S, setS] = useState(false)
    const {CounterCorrect, setCounterCorrect} = useAppContext()
    const [Value, setValue] = useState("")
    const [Value2, setValue2] = useState("")
    const [Value3, setValue3] = useState("")
    const [Value4, setValue4] = useState("")
    const [Value5, setValue5] = useState("")
    const [Value6, setValue6] = useState("")
    const [Value7, setValue7] = useState("")
    const [Value8, setValue8] = useState("")
    const [Title, setTitle] = useState("")
    const [valor1, setvalor1] = useState(0)
    const [valor2, setvalor2] = useState(0)
    const [FinalResult, setFinalResult] = useState(0)
    const [ShowResults, setShowResults] = useState(false)
    const [AnsWasCorrect, setAnsWasCorrect] = useState(false)
    const [Operator, setOperator] = useState("")
    const {type} = useParams()
    const [Level, setLevel] = useState(1)
    const [Level2, setLevel2] = useState(1)
/*     const [InvalidateHarder, setInvalidateHarder] = useState(false)
    const [InvalidateSofter, setInvalidateSofter] = useState(false) */
        const [ChooseLevel, setChooseLevel] = useState(true)

    const addCorrect = () => {
        setCounterCorrect(CounterCorrect+1)
        setShowResults(false)
        setValue("")
        setValue2("")
        setValue3("")
        setValue4("")
        setValue5("")
        setValue6("")
        setValue7("")
        setValue8("")
    }

    const WasIncorrect = () => {
        setShowResults(false)
        setValue("")
        setValue2("")
        setValue3("")
        setValue4("")
        setValue5("")
        setValue6("")
        setValue7("")
        setValue8("")
    }
    const SetLevel = (param, param2) => {
        setLevel(param)
        setLevel2(param2)
        setChooseLevel(false)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }
    
    const CheckAnswer = () => {
        if (Value === "") {
            alert("Escribe tu respuesta para luego comprobarla")
        }else if(isNaN(Value)){
            alert("Escribe un valor numérico")
        }
        else {
            var response
            response = Value8 + Value7 + Value6 + Value5 + Value4 + Value3 + Value2 + Value
            if(response == FinalResult){
                setAnsWasCorrect(true)
            }else{
                setAnsWasCorrect(false)
            }
            setTimeout(() => {
                setShowResults(true)
            }, 500);    
        }
    }

    const AvSolution = () => {
        setShowSolution(true)
    }
    const SolutionOut = () => {
        setShowSolution(false)
        setShowResults(false)
        setValue("")
        setValue2("")
        setValue3("")
        setValue4("")
        setValue5("")
        setValue6("")
        setValue7("")
        setValue8("")
    }

    useKeypress(["Enter"],(event) => {
        if(event.key === "Enter"){
            CheckAnswer()
        }
    })
        
    useEffect(() => {
        if(ChooseLevel){
            window.scrollTo(0,0)
        }
        var v1, v2
        v1 = Math.floor(Math.random() * Math.pow(10, Level) + 1);
        v2 = Math.floor(Math.random() * Math.pow(10, Level2) + 1)
        if (Level === 2 && v1 < 10) v1 += 10;
        if (Level === 3 && v1 < 100){
            v1 += 100;
        }
        if (Level === 4 && v1 < 1000){
            v1 += 1000;
        }
        if (Level2 === 2 && v2 < 10){
            v2 += 10;
        }
        if (Level2 === 3 && v2 < 100){
            v2 += 100;
        }
        if (Level2 === 4 && v2 < 1000){
            v2 += 1000;
        }
        if(type === "sumas"){ 
            var result = v1+v2
            setOperator("+")
        }
        else if(type === "restas"){
            if (v1 < v2){
                var aux = v1;
                v1 = v2
                v2 = aux
            }
            var result = v1-v2
            setOperator("-")
        }
        else if(type === "multiplicaciones"){
            var result = v1*v2
            setOperator("x")
        }
        else if(type === "divisiones") {
            setLevel(2)
            setLevel2(1)
            do {
                v1 = Math.floor(Math.random() * (Math.pow(10, Level) - 2) + 2);
                v2 = Math.floor(Math.random() * (Math.pow(10, Level2) - 2) + 2);
                if (Level === 2 && v1 < 10) v1 += 10;
                if (Level === 3 && v1 < 100){
                    v1 += 100;
                }
                if (Level === 4 && v1 < 1000){
                    v1 += 1000;
                }
                if (Level2 === 2 && v2 < 10){
                    v2 += 10;
                }
                if (Level2 === 3 && v2 < 100){
                    v2 += 100;
                }
                if (Level2 === 4 && v2 < 1000){
                    v2 += 1000;
                }
            } while (v1 % v2 != 0 || v2/2 % 2 != 0);
                if (v1 === v2){
                    v2 = v1/2
                }
            var result = v1/v2
            setOperator("÷")
        }
        setvalor1(v1)
        setvalor2(v2)
        setFinalResult(result)
    }, [CounterCorrect, Level, Level2])


    return <div className="math-ex">
        <main className="main-ex">
            {
                Loading && <LoadingContainer/>
            }
            <SolutionBox isIn={ShowSolution}>
                {
                    (type === "sumas" || type === "restas") && <Sum_SubstractSolutionArea x={valor1} y={valor2} operator={Operator} type={type} Result={FinalResult} fnOut={SolutionOut}/>
                } 
                {
                    type === "multiplicaciones" && <MultiplicationSolutionArea x={valor1} y={valor2} Result={FinalResult} fnOut={SolutionOut}/> 
                }
                {
                    type === "divisiones" && <DivisionSolutionArea x={valor1} y={valor2} Result={FinalResult} fnOut={SolutionOut}/>
                }
            </SolutionBox>
       <ResultsBox className={ShowResults ? "active-results" : "results"}>
               <div>
                   <img src={AnsWasCorrect ? Check : Wrong}/>
               <h3>{AnsWasCorrect ? "¡Respuesta correcta!" : "¡Sigue intentando!"}</h3>
               {
                   AnsWasCorrect && <h4>{valor1} {Operator} {valor2} = {FinalResult}</h4>
               }
               <button onClick={AnsWasCorrect ? addCorrect : WasIncorrect}>{AnsWasCorrect ? "Siguiente ejercicio" : "Intenta de nuevo"}</button>
               {
                   !AnsWasCorrect && <button onClick={AvSolution} style={{marginTop:"20px", background:"white", color:"#305cae"}}>
                       Aprende a resolverlo
                    </button>
               }
           </div>
           </ResultsBox>
           <Accordeon>
           <LinkButton path={"/matematica/" + type} text="Elige la dificultad" callback={() => setChooseLevel(!ChooseLevel)}/>
          {
              ChooseLevel &&  <article className="buttons">
              {
                  Info && Info.map((data, idx) => {
                      return <button key={idx}
                      onClick={() => SetLevel(data.fn1, data.fn2)} >
                          {
                              Operator != "÷" ? <div>
                              <span>
                                  {data.fn1 === 1 && 8} 
                                  {data.fn1 === 2 && 54} 
                                  {data.fn1 === 3 && 820}
                                  {data.fn1 === 4 && 3264}
                            </span>
                          <span>
                                  {Operator}&#160;
                                  {data.fn2 === 1 && 6} 
                                  {data.fn2 === 2 && 32} 
                                  {data.fn2 === 3 && 464}
                                  {data.fn2 === 4 && 7427}
                          </span>
                            </div> : <section>
                                <span style={{marginTop: "10px"}}>
                                {data.fn1 === 1 && 8} 
                                  {data.fn1 === 2 && 54} 
                                  {data.fn1 === 3 && 820}
                                  {data.fn1 === 4 && 3264}
                                </span> 
                                <Span>{data.fn2 === 1 && 6} 
                                {data.fn2 === 2 && 32} 
                                {data.fn2 === 3 && 464}
                                {data.fn2 === 4 && 7427}
                                </Span>
                                </section>
                          }
                          <p>
                          {data.fn1} cifra{data.fn1 > 1 ? "s " : " "} 
                           {Operator}
                           &#160;{data.fn2} cifra{data.fn2 > 1 && "s "}
                          </p>
                      </button>
                  })
              }
          </article>
          }

           </Accordeon>
       <Article>
               {
                   CounterCorrect > 0 && <p><i className="fas fa-medal"></i> x {CounterCorrect} </p>
               }

           {
               Operator != "÷" ? <article>
                   <span>{valor1}</span> <span>{Operator} {valor2}</span>
               </article> : <section className="division-section">
                   <span>{valor1}</span> <Span>{valor2}</Span>
               </section>
           }
           <InputArea val={FinalResult} 
            x1={Value}
            x2={Value2}
            x3={Value3}
            x4={Value4}
            x5={Value5}
            x6={Value6}
            x7={Value7}
            x8={Value8}
            y1={setValue}
            y2={setValue2}
            y3={setValue3}
            y4={setValue4}
            y5={setValue5}
            y6={setValue6}
            y7={setValue7}
            y8={setValue8}
           />
           <Button onClick={CheckAnswer}>
               Comprobar
           </Button>
       </Article>
       </main>
    </div>
}

const ExAreaContainer = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div>
            <StyledBackground/>
            <InitNavBar isEx={true}/>
            <ExContainer/>
        </div>
    )
}

export default ExAreaContainer
