import styled from "styled-components"
import {useState} from "react"
import LinkButton from "../../../StyledComponents/Button/LinkButton"
import "../Home.css"


const Section = styled.section`
position:fixed;
z-index:10;
transition:1s;
top:${props => props.isIn ? 0 : "-100vh"};
width:100vw;
height: 100vh;
background-color:rgb(10,10,10,.5);
display:flex;
color:white;
justify-content:center;
align-items:center;
`
const Choose = styled.article`
padding: 0 5% 30px 5%;
text-align:center;
border:2px solid rgb(11,125,179);
border-radius:5px;
background-color:rgb(10,10,10);

div{
    padding:10px;
}
h3{
    margin-bottom:10px;
    font-size: clamp(20px, 2rem, 4vw);
    padding:5px;
    border: 2px solid rgb(100,125,179);
    border-radius: 5px;
}
p{
    color:rgb(230,230,230);
    margin: 0 0 10px 0;
}
`

const ChooseSideBar = styled.article`
display:flex;
align-items:right;
width:100%;
text-align:right;
padding:7px;
margin: 0 auto;
justify-content:right;
`

const SelectArea = ({setAvailable, change}) => {

   return (
      <Section isIn={setAvailable}>
           <Choose>
          <ChooseSideBar>
              <div style={{flex:"1"}}/>
          <LinkButton text="X" width="40px" className="closeButton" ButtonColor="rgb(30,30,30)" callback={change}/>
          </ChooseSideBar>
          <div className="choose-section">
          <div>
    <h3>Matemáticas</h3>
    <p>
        Aprende a utilizar los números <br/> para descubrir la realidad.
    </p>
    <LinkButton text="Ir allá" path="/categoria/matematica" ButtonColor="rgb(20, 180, 100);" width="110px"/>
</div>
<div>
    <h3>
        Ciencias
    </h3>
    <p>
        Conoce más del mundo en el que <br/> vivimos.
    </p>
    <LinkButton text="Ir allá" path="/categoria/ciencia" ButtonColor="rgb(100, 8, 180);" width="110px"/>
</div>
          </div>
          </Choose>
      </Section>
   )
}

export default SelectArea