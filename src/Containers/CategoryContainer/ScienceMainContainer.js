import styled from "styled-components"
import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import "./style.css"
import InitNavBar from '../NavBarContainer/NavBarContainer';
import {motion} from "framer-motion"
import LinkButton from "../../StyledComponents/Button/LinkButton"
import LoadingContainer from "../../Components/LoadingContainer";
import { animationOne, animationTwo, animationThree, transitionOneSec, transitionTwoSecs } from "../../animations";
import SelectArea from "../HomeContainer/SelectArea/SelectArea";
import { StyledBackground } from "../../StyledComponents/StyledBackground";
import { db } from "../../firebase";
import ArticleLink from "../../Components/LoadingContainer/ArticleLink/ArticleLink";
 

const Title = styled.div`
margin-top:100px;
position: relative;
z-index: 2;
margin-bottom:2rem;
color:white;
text-align:center;
font-family: "Kufam", cursive;
padding: 20px 10vw 0 10vw;
font-size: clamp(1.2rem, 2.5rem, 40px);
span{
    background-color: rgb(20,20,20);
    padding:5px;
}
`
const GridContainer = styled.div`
width: 90vw;
    margin-left: 5vw;
    position: relative;
    z-index: 2;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`
const AreaArticle = styled.article`
margin: 20px 1%;
border-radius: 5px;
cursor: pointer;
    padding: 10px 5%;
    text-align: center;
    background-color: rgb(40,40,50);
    width: clamp(300px, 31%, 31%);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid rgb(20,150,170);
    h2{
        text-align:center;
        padding: 10px 0;
        font-size: clamp(1rem, 1.5rem, 40px);
    }
`
const ArticleTitle = styled.div`
text-align:center;
        padding: 10px 0;
        font-size: 35px;
`
const ArticleDescription = styled.p`
font-size:17px;
opacity: .8;
margin-bottom: 10px;
`
const UnexistentDiv = styled.div`
width:100vw;
height:100vh;
position: relative;
z-index:2;
display:flex;
align-items:center;
justify-content:center;
`
const UnexistentP = styled.p`
font-size:18px;
padding: 20px 0;

`

const UnexistentContainer = () => {
    const [ChooseArea, setChooseArea] = useState(false)
   
   const showChooseArea = () => {
      setChooseArea(!ChooseArea)
   }
    return <UnexistentDiv>
               <SelectArea setAvailable={ChooseArea} change={showChooseArea}/>
    <AreaArticle>
    <UnexistentP>
        La categoria que seleccionaste no existe
    </UnexistentP>
    <LinkButton callback={showChooseArea} text="Elige una categoria" width="200px" className="non-transparent-button"/>
    </AreaArticle>
    </UnexistentDiv>
}

const Info = [
    {
        title:"Básico",
        description:"De 6 a 7 años",
        link:"basico"
    },
    {
        title:"Intermedio",
        description:"De 8 a 9 años",
        link:"intermedio"
    },
    {
        title:"Avanzado",
        description:"De 10 a 11 años",
        link:"avanzado"
    }
]

const PrevInfo = [
    {
        title:"Hola",
        SubHeader:"Aprende el cómo se aprende de esto y del otro y del otro"
    }
]

export const ScienceMainContainer = () => {
    const [data, setData] = useState([]);
    const [Loaded, setLoaded] = useState(false)
    useEffect(async () => {

        const Collection = db.collection("ciencia").doc("headers").collection("data")
        const OrderedCollection = Collection.orderBy("title")
        OrderedCollection.get().then((response) => {
            const DB = response.docs.map(element => {
                const id = element.id;
                return {...element.data(), id:id }
            })
            setData(DB)
            setLoaded(true)
        })
        

    }, [])
    
    return (
        <>
           {
              Loaded ?  
              <><StyledBackground/>
              <InitNavBar/>
              
   <>
    <Title>
                  <span>
                      Área: ciencia
                  </span>
              </Title>
             <GridContainer>
            {
                Info && Info.map((info, idx) => {
                    return  <AreaArticle key={idx}>
                    <ArticleTitle>
                        {info.title}
                    </ArticleTitle>
                     <ArticleDescription>
                         {info.description}
                     </ArticleDescription>
                     <LinkButton width="200px" text="Elegir" fontSize="20px" path={"/categoria/ciencia/" + info.link}/>
                     </AreaArticle>
                })
            }
             </GridContainer>
            <Title>
                <span>
                    Para leer y entretenerse:
                </span>
            </Title>
           <GridContainer style={{marginBottom:"3rem"}}>
           {
                PrevInfo && PrevInfo.map((info, idx) => {
                    return  <ArticleLink data={info} key={idx}/>
                })
            }
           </GridContainer>
   </>
              </>
              : <LoadingContainer/> 
           }
        </> 
    )
}
