import styled from "styled-components"
import { Link } from "react-router-dom"

const Button = styled.button`
background-color: transparent;
    border: 2px solid ${props => props.color ? props.color : "rgb(11,125,179)"};
    color: rgb(240,240,240);
    font-size: ${props => props.fontSize ? props.fontSize : "16px"};
    width: ${props => props.width ? props.width : "150px"};
    padding: 10px;
    box-shadow: inset 0 0 0 0 ${props => props.color ? props.color : "rgb(11,125,179)"};
    cursor: pointer;
    transition: .5s;
    border-radius: 5px;
    font-family: 'Kufam', cursive;

    &:hover{
        box-shadow: inset ${props => props.width ? props.width : "150px"} 0 0 0 ${props => props.color ? props.color : "rgb(11,125,179)"};
    }
`

export default function LinkButton({path, callback, text, ButtonColor, width, fontSize}){
    return(
        <Link to={path}>
           <Button onClick={callback} color={ButtonColor} width={width} fontSize={fontSize}>
               {text}
           </Button>
        </Link>
    )
} 