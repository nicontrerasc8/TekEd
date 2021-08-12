import React,{useEffect, useState} from 'react'
import "./nav.css"
import {Link} from "react-router-dom"
import styled from "styled-components";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LinkButton from '../../StyledComponents/Button/LinkButton';

// Styled component named StyledButton
const Nav = styled.nav`
background-color: ${props => props.solid ? "#274C90" : "#305cae"};
div{
   display: flex;
   grid-gap: 20px;
}
`
const MathLi = styled.li `
color: ${props => props.color ? props.color : "#305cae"};
border: 2px solid ${props => props.color ? props.color : "#305cae"};
text-align: center;
transition: 1s;
box-shadow: inset 0 0 0 0 ${props => props.color ? props.color : "#305cae"};
background-color:rgba(250,250,250, .05);
&:hover{
   box-shadow: inset 0 0 2px 5px ${props => props.color ? props.color : "#305cae"}
};a{
   text-align: center;
}
`


const InitNavBar = ({isHome, isHow, Path, isGoBack}) => {
   const matches = useMediaQuery('(max-width:950px)');
   const [navStatus, setNavStatus] = useState(false)
   const [navSolidColor, setNavSolidColor] = useState(false)

   const ChangeNavUseState = () => {
      setNavStatus(!navStatus)
   }
   useEffect(()=>{
      const HandleScroll = () => {
          setNavSolidColor(window.scrollY > 10)
      }
      window.addEventListener("scroll", HandleScroll)

      return () => {
          window.removeEventListener("scroll", HandleScroll)
      }


  }, [])

   return /* ( <div> */<Nav solid={navSolidColor}>
         <Link to="/">
         <h1 className="logo">Tek<span>Ed</span></h1>
         </Link>
         <div>
         {
             isGoBack && <LinkButton text={<i className="fas fa-arrow-left"></i>} path={Path} fontSize="clamp(25px, calc(2vh + 1vw), calc(2vh + 2vw + 10px))" width="75px"/>
          }
         {
             isHome && <LinkButton path="/" text="🏠" fontSize="clamp(25px, calc(2vh + 1vw), calc(2vh + 2vw + 10px))" width="80px"/>
          }
          {
             isHow && <LinkButton text="?" fontSize="clamp(30px, calc(2vh + 1vw), calc(2vh + 2vw + 10px))" width="clamp(70px, calc(2vh + 2vw + 20px) ,calc(2vh + 2vw + 20px))"/>
          }
         </div>
         
      </Nav>
{/*       <aside className={navStatus ? "active": null}>
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
      </div> */}
}

export default InitNavBar
