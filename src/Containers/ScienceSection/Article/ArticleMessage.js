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
max-height: 700px;
`

const Message = ({information}) => {

    if(!information){
        console.log("No hay")
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
     </Div>
    }
}

export default Message