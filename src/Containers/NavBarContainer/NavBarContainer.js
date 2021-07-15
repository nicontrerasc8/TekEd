import {useEffect, useState} from 'react'
import "./nav.css"
import {Link} from "react-router-dom"
import { Links, MathLinks, ScienceLinks } from './Data/Data'
import styled from "styled-components";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { rgbToHex } from '@material-ui/core';

// Styled component named StyledButton
const Nav = styled.nav`
background-color: ${props => props.solid ? "rgb(36,36,36)" : "rgba(36, 36, 36, .8)"};

`
const MathLi = styled.li `
color: ${props => props.color ? props.color : "rgb(11,125,179)"};
border: 2px solid ${props => props.color ? props.color : "rgb(11,125,179)"};
text-align: center;
transition: 1s;
box-shadow: inset 0 0 0 0 ${props => props.color ? props.color : "rgb(11,125,179)"};
background-color:rgba(250,250,250, .05);
&:hover{
   box-shadow: inset 0 0 2px 5px ${props => props.color ? props.color : "rgb(11,125,179)"}
};a{
   text-align: center;
}
`


const InitNavBar = () => {
   const matches = useMediaQuery('(max-width:950px)');
   const [navStatus, setNavStatus] = useState(false)
   const [navSolidColor, setNavSolidColor] = useState(false)

   const ChangeNavUseState = () => {
      setNavStatus(!navStatus)
   }
   const [LinkData, setLinkData] = useState(Links)
   useEffect(()=>{
      const HandleScroll = () => {
          setNavSolidColor(window.scrollY > 10)
      }
      window.addEventListener("scroll", HandleScroll)

      return () => {
          window.removeEventListener("scroll", HandleScroll)
      }


  }, [])

   return ( <div>
      <Nav solid={navSolidColor}>
         <Link to="/">
         <h1 className="logo">Tek<span>Ed</span></h1>
         </Link>
         <button onClick={ChangeNavUseState} className="nav-btn">
            Elige un área
         </button>
      </Nav>
      <aside className={navStatus ? "active": null}>
      <button onClick={ChangeNavUseState} className="nav-btn">
       Volver <i className="fas fa-arrow-right"></i>
         </button>
      <div className="link-section">
         <article>
            <li>
               <h6>Escoge el área que gustes</h6>
            </li>
          {
            <ul>
                {LinkData.map((data, idx) => {
               return(
                  <MathLi key={idx} className="no-image-link" color={data.color} onClick={ChangeNavUseState}>
                     <Link to={data.link}>
                       {data.text}
                     </Link>
                  </MathLi>
               )
            }) }
             </ul>
          }
         </article>
      </div>
      </aside>
      </div>
   )
}

export default InitNavBar
