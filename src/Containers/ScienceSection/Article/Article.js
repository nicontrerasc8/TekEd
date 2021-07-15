import {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from "styled-components"
import LoadingContainer from '../../../Components/LoadingContainer'
import { db } from '../../../firebase'
import { StyledBackground } from '../../../StyledComponents/StyledBackground'
import InitNavBar from '../../NavBarContainer/NavBarContainer'
import Message from './ArticleMessage'

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
const Container = styled.div`
padding: 0rem 5vw;
`



const ScienceArticle = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [messages, setMessages] = useState([])

    const {identification} = useParams()

    useEffect(() => {
        async function fetchData(){
            const IncomingData = db.collection("ciencia").doc("articles").collection("data")
            IncomingData.get().then((response) => {
                if(response.size){
                    let Database = response.docs.map(element => {
                        const id = element.id
                        return {...element.data(), id:id}
                    })
                    setMessages(Database)
                    Database.forEach((message) => {
                        if(message.identification === identification){
                        setData(message)
                        setLoading(false)
                    }
                    })
                }
            })
        }
        fetchData()
    }, [identification])

    return <div>
           {
               loading ? 
               <LoadingContainer/> :
              <Container>
              <InitNavBar/>
              <Message information={data}/>
              </Container>
           } 
        </div>
}

export default ScienceArticle
