import styled from "styled-components"
import {useState, useEffect} from 'react'
import { StyledBackground } from '../../StyledComponents/StyledBackground'
import InitNavBar from '../NavBarContainer/NavBarContainer'
import { ArticleList } from "./ArticleList"
import { useParams } from "react-router-dom"
import {motion} from "framer-motion"
import { EcologiaData, ZoologiaData } from "./Data"
import { animationOne, animationThree, transitionOneSec, transitionTwoSecs } from "../../animations"
import { db } from "../../firebase"
import LoadingContainer from "../../Components/LoadingContainer"

const Head = styled.h2`
margin-top: 100px;
position:relative;
padding: 20px 10vw 0 10vw;
z-index:1;
text-align: center;
color: white;
font-size: 30px;
font-family: "Kufam", cursive;
span{
    background-color: rgb(20,20,20);
    padding:5px;
}
`

export default function ScienceCategoryContainer() {
    const [TitleVariation, setTitleVariation] = useState("")
    const [data, setData] = useState([])
    const [Loading, setLoading] = useState(true)
    const {category} = useParams()
    useEffect(async () => {
        const Collection = db.collection("ciencia").doc("articles").collection("data")
        const SelectedCollection = Collection.where("category", "==", category) ;
        SelectedCollection.get().then((response) => {
            const BusDB = response.docs.map(element => {
                const id = element.id;
                return {...element.data(), id:id }
            })
            setData(BusDB)
            setLoading(false)
        })

        if(category == "basico"){
            setTitleVariation("Básico")
        }
        if(category == "intermedio"){
            setTitleVariation("Intermedio")
        }
        if(category == "avanzado"){
            setTitleVariation("Avanzado")
        }
    }, [category])
    
    return (
        <>
        {
            Loading ? <LoadingContainer/> : <>
            <StyledBackground/>
             <InitNavBar/> 
             <Head>
                    <span>
                       Ciencias nivel: {TitleVariation}
                    </span>
                </Head>
                <motion.div transition={transitionTwoSecs} variants={animationOne} animate="in" exit="out" initial="out">
                   <motion.div initial="out" animate="end" exit="out" variants={animationThree} transition={transitionOneSec}>
                      <ArticleList articles={data}/>
                   </motion.div>
                </motion.div>
            </>
        }
        </>
    )
}
