import React,{useEffect, useState} from 'react'
import styled from "styled-components"

const Div = styled.article`
padding: 2rem 5vw;
margin-top: 7rem;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
h2{
    text-align: center;
    font-size: 2.5rem;
};
h5{
    margin-top: 1rem;
    text-align: center;
    font-size: 1.3rem;
    opacity: .8;
};
p{
font-size: 20px;
margin: 0 0 2rem 0;
}
`
const MainImage = styled.img`
width: clamp(300px, 40%, 40%);
margin: 2rem 0;
max-height: 850px;
`
const Quiz = styled.div`
margin: 3rem 0;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
border-top: 3px solid rgb(20,150,200);
h6{
    margin: 1.5rem 0;
    font-size: 2rem;
}
article{
    width: clamp(320px, 50%, 50%);
    background-color: rgb(30,30,50);
    border: 2px solid rgb(20,150,200);
    padding: 20px 5%;
    display: flex;
    flex-direction:column; 
    border-radius: 5px;
    text-align: center;
}
strong{
    font-size: 23px;
}
`
const ScoreContainer = styled.div`
font-size: 2rem;
margin-bottom: 2rem; 
`
const QuestionCounter = styled.div`
font-size: 2rem;
padding: 10px 0;
text-align: center;
`
const AnswerSection = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin-top:1rem;
button{
    color: white;
    padding: 10px;
    font-family: "Kufam", cursive;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    margin: 0 1rem 1rem 1rem;
    transition: .2s;
    &:hover{
        background-color: rgb(30,60,100);
    }
}
`
const QuestionContainer = styled.ul`

`
const P = styled.h1`
font-size: 30px;
`
const StyledP = styled.p`
padding-top: 1rem;
`

const Message = ({information}) => {

    const questions = information.questions
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false)
    const [showReview, setShowReview] = useState(false)
	const [score, setScore] = useState(0);
    const [RightAnswer, setRightAnswer] = useState(false)
    const nextQuestion = currentQuestion + 1;

    useEffect(() => {
        console.log(information.questions)
    }, [information])

    const HandleAnswerOptionClick = (isCorrect) => {
        setShowReview(true)
        if (isCorrect) {
			setScore(score + 1);
            setRightAnswer(true)
		}
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        }
    }
    const Next = () => {
        setShowReview(false)
        setRightAnswer(false)
        if(nextQuestion === questions.length){
            setShowScore(true)
            setRightAnswer(false)
        }
    }
    const ReInit = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
        setShowReview(false)
        setRightAnswer(false)
    }

    if(!information){
        return "No hay"
    }
    else{
        return <Div>
        <h2>{information.title}</h2>
        <h5>{information.SubHeader}</h5>
        <MainImage src={information.image1}/>
        {
            information.Paragraph1 && <p>{information.Paragraph1}</p>
        }
        {
            information.image2 && <MainImage src={information.image2}/>
        }
        {
            information.Paragraph2 && <p>{information.Paragraph2}</p>
        }
          {
            information.image3 && <MainImage src={information.image3}/>
        }
        {
            information.Paragraph3 && <p>{information.Paragraph3}</p>
        }
          {
            information.image4 && <MainImage src={information.image4}/>
        }
        {
            information.Paragraph4 && <p>{information.Paragraph4}</p>
        }
          {
            information.image5 && <MainImage src={information.image5}/>
        }
        {
            information.Paragraph5 && <p>{information.Paragraph5}</p>
        }
          {
            information.image6 && <MainImage src={information.image6}/>
        }
        {
            information.Paragraph6 && <p>{information.Paragraph6}</p>
        }
        {
            information.image7 && <MainImage src={information.image7}/>
        }
        {
            information.Paragraph7 && <p>{information.Paragraph7}</p>
        }
          {
            information.image8 && <MainImage src={information.image8}/>
        }
        {
            information.Paragraph8 && <p>{information.Paragraph8}</p>
        }
          {
            information.image9 && <MainImage src={information.image9}/>
        }
        {
            information.Paragraph9 && <p>{information.Paragraph9}</p>
        }
          {
            information.image10 && <MainImage src={information.image10}/>
        }
        {
            information.Paragraph10 && <p>{information.Paragraph10}</p>
        }
          {
            information.image11 && <MainImage src={information.image11}/>
        }
        {
            information.Paragraph11 && <p>{information.Paragraph11}</p>
        }
         {
            information.image12 && <MainImage src={information.image12}/>
        }
        {
            information.Paragraph12 && <p>{information.Paragraph12}</p>
        }
       <Quiz>
       <h6>¡Pon a prueba lo aprendido!</h6>
       <article  style={{backgroundColor: RightAnswer ? "rgb(20,60,60)" : "transparent"}}>
   <div>
                   <AnswerSection>
                    {
                        showReview ? 
                            <div>{
                                RightAnswer ? <P>Respuesta correcta</P> : <P>Respuesta incorrecta</P>
                            }<StyledP>{questions[currentQuestion - 1].Explanation}</StyledP>
                            {
                                showScore ? <ScoreContainer>Tu score fue de {score} de {questions.length}</ScoreContainer> : null
                            } 
                            {
                                <button className={showScore ? "ShowScoreButton" : "AnswerButton"} onClick={showScore ? ReInit : Next}>{showScore ? "Reiniciar preguntas" : "Siguiente"}</button>
                            }
                            </div>
                        
                     : <QuestionContainer><QuestionCounter>Pregunta: {currentQuestion + 1}/{questions.length}</QuestionCounter>
                       <p>{questions[currentQuestion].questionTitle}</p> {questions[currentQuestion].listOfAnswers.map((answerOption, idx) => {
                        return <button className="AnswerButton" key={idx} onClick={() => HandleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.text}</button>
                })}</QuestionContainer>
                    }
                   </AnswerSection>
        </div> 
       </article>
       </Quiz>
     </Div>
    }
}

export default Message