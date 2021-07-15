import styled from "styled-components"
import img from "../../Containers/HomeContainer/landing-back.jpg"
import React from "react"

const StyledDiv = styled.article`
height: 100vh;
top:0;
z-index:0;
position:fixed;
width:100vw;
background-image: url(${img});
`

export const StyledBackground = () => {
    return <StyledDiv/>
}
