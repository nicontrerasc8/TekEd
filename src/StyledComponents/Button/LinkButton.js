import styled from "styled-components"
import { Link } from "react-router-dom"
import React from "react"

const Button = styled.button`
background-color: ${props => props.backGround ? props.backGround : "transparent"};
    border: 3px solid ${props => props.color ? props.color : "#b6fbfb83"};
    color: rgb(240,240,240);
    font-size: ${props => props.fontSize ? props.fontSize : "20px"};
    width: ${props => props.width ? props.width : "200px"};
    padding: 10px;
    box-shadow: inset 0 0 0 0 ${props => props.color ? props.color : "#b6fbfb83"};
    cursor: pointer;
    transition: .5s;
    border-radius: 5px;
    font-family: 'Kufam', cursive;
        i{
            position: relative;
            top: 4px;
        }
        &:hover{
            box-shadow: inset ${props => props.width ? props.width : "240px"} 0 0 0 ${props => props.color ? props.color : "#b6fbfb83"};
        }
`

export default function LinkButton({path, callback, text, ButtonColor, width, fontSize, BGround}){
    return(
            path ? <Link to={path}>
           <Button onClick={callback} color={ButtonColor} width={width} fontSize={fontSize} backGround={BGround}>
               {text}
           </Button>
        </Link> : <Button onClick={callback} color={ButtonColor} width={width} fontSize={fontSize} backGround={BGround}>
               {text}
           </Button>
    )
} 