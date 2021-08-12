import React,{useEffect, useState} from 'react'
import "./Home.css"
import styled from "styled-components";
import Tablas from "./tablas.gif"
import {motion} from "framer-motion"
import { animationOne, animationThree, animationTwo, transitionTwoSecs, transitionOneSec } from '../../animations';
import CombinadasIMG from "../MathSection/Combinadas.png"
import InitNavBar from '../NavBarContainer/NavBarContainer';
import LoadingContainer from '../../Components/LoadingContainer';
import { StyledBackground } from '../../StyledComponents/StyledBackground';
import { Link } from 'react-router-dom';
import Aos from "aos"
import "aos/dist/aos.css"

const Container = styled.div `display: flex;
position: relative;
z-index: 2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px 7vw;
color: white;
margin-top: 1rem;
grid-gap: 10px;
font-family: "Kufam", cursive;
   section{
      display: flex;
      flex-wrap:wrap;
      overflow: hidden;
      width: 100%;
      grid-gap: 20px;
      align-items: center;
      justify-content: center;
         article{
            text-align: center;
            background-color: #274C90;
            border: 3px solid #b6fbfb80;
            border-radius: 5px;
            padding: 20px 5% 40px 5%;
            font-size: clamp(25px, calc(2vw + 2vh - 15px), calc(2vw + 2vh - 15px));
            width: clamp(320px, 49%, 45%);
               img{
                  width: 70%;
                  border-radius: 5px;
               }
               p{
                  margin: 10px 0 30px 0;
               }
               a{
                  padding: 10px 20px;
                  color: white;
                  background-color: #305cae;
                  border-radius: 5px;
               }
         }
   }
`

const SectionData = [
   {
      img: CombinadasIMG,
      texto: "Sumas, restas, multiplicaciones y divisiones",
      link: "/matematica",
   },
   {
      img:Tablas,
      texto: "Tablas de multiplicar",
      link: "/tablas-de-multiplicar"
   },
   {
      img: CombinadasIMG,
      texto: "Operaciones con 3 números",
      link: "/operaciones-con-3-numeros",
   },
]

const HomeContainer = () => {

   const [Loading, setLoading] = useState(true)
   useEffect(() => {
      Aos.init({duration :1000, once:true})
      setTimeout(() => {
         setLoading(false)
      }, 3000);
   }, [])

   return (
            Loading ? <LoadingContainer/> :  <div>
            <InitNavBar/>
            <StyledBackground/>
               <Container>
                  <motion.div initial="out" transition={transitionTwoSecs} animate="in" exit="out" variants={animationOne} className="message">
                     <h3>Diviértete y aprende con juegos de matemática.</h3>
                  </motion.div>
                  <section>
                     {
                        SectionData && SectionData.map((data, idx) => {
                           return <article data-aos="fade-right" key={idx}>
                              <img src={data.img}/>
                              <p>
                              {data.texto}.</p>
                              <Link to={data.link}>Elegir</Link>
                           </article>
                        })
                     }
                  </section>
               </Container>
            </div>
   )
}

export default HomeContainer