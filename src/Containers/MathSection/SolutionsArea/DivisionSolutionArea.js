import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-direction: column;
text-align: left;
font-size: clamp(45px, calc(3vw+3vh), calc(3vw+3vh));
article{
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-content: center;
grid-gap: 1rem;
span{
    padding:0px 10px;
}
p{
    span{
        color: #b6fbfb;
        
    }
}
}
div{
    padding-right: 8px;
    color: #b6fbfb;
}
button{
    margin-top: 20px;
    font-family: "Kufam", cursive;
    padding: 10px;
    border-radius: 5px;
    font-size: 25px;
}
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    padding: 10px;
    border: 3px solid #b6fbfb;
    border-radius: 5px;
    font-size: clamp(25px, calc(2vw+2vh), calc(2vw+2vh));
}
`
const Space = () => {
    return <em style={{ marginRight: "5px" }}>&#160;&#160;</em>
}

const DivisionSolutionArea = ({ x, y, Result, fnOut }) => {

    const [X, setX] = useState("")
    const [Y, setY] = useState("")
    const [Z, setZ] = useState("")
    const [ShowZ, setShowZ] = useState(false)


    const MostrarRespuesta = () => {
        setShowZ(true)
    }

    const Finish = () => {
        fnOut()
        setTimeout(() => {
            setShowZ(false)
        }, 500);
    }

    useEffect(() => {
        var z = x / y;
        setX(x)
        setY(y)
        setZ(z)

    }, [x, y, Result])

    return <Div>
        {
            ShowZ && 
            <p style={{ fontSize: "clamp(25px, calc(2vw+2vh), calc(2vw+2vh))", textAlign: "center", marginBottom:"20px" }}>
                Respuesta: 
                <span style={{color:"#b6fbfb"}}>
                    {Z}
                </span>
            </p>
        }
        <article>
            <span style={{ textAlign: "center" }}>
                {X}
            </span>
            <span className="divisor">
                {Y}
            </span>
            {
                ShowZ && <>
                    <br /><span style={{ textAlign: "left" }}>{Z}</span>
                </>
            }
        </article>
        {
            ShowZ && <section>
                <acronym>Esto porque:</acronym>
                <acronym>{Y} x {Z} = {X}</acronym>
            </section>
        }
        {
            !ShowZ ?
                <button onClick={MostrarRespuesta} className="start-finish-btn">Ver solución</button>
                :
                <button onClick={Finish} className="start-finish-btn">Volver</button>
        }
    </Div>
}

export default DivisionSolutionArea
