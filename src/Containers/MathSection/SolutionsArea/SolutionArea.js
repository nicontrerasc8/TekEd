import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-direction: column;
text-align: right;
font-size: clamp(45px, calc(3vw+3vh), calc(3vw+3vh));
article{
    border-bottom: 3px solid;
text-align: right;
}
div{
    padding-right: 8px;
    color: #b6fbfb;
}
span{
    text-align: right;
}
button{
    margin-top: 20px;
    background-color: #b6fbfb83;
    color: white;
    font-family: "Kufam", cursive;
    padding: 10px;
    border-radius: 5px;
    font-size: 25px;
}
`   
const Space = () => {
    return <em style={{marginRight: "5px"}}>&#160;&#160;</em>
}

const SolutionArea = ({x, y, operator, Result, fnOut}) => {

    const [counter, setcounter] = useState(1)
    const [X1, setX1] = useState("")
    const [X2, setX2] = useState("")
    const [X3, setX3] = useState("")
    const [X4, setX4] = useState("")
    const [Y1, setY1] = useState("")
    const [Y2, setY2] = useState("")
    const [Y3, setY3] = useState("")
    const [Y4, setY4] = useState("")
    const [Z1, setZ1] = useState("")
    const [Z2, setZ2] = useState("")
    const [Z3, setZ3] = useState("")
    const [Z4, setZ4] = useState("")
    const [Z5, setZ5] = useState("")
    const [A1, setA1] = useState("")
    const [A2, setA2] = useState("")
    const [A3, setA3] = useState("")
    const [A4, setA4] = useState("")
    const [ShowZ1, setShowZ1] = useState(false)
    const [ShowZ2, setShowZ2] = useState(false)
    const [ShowZ3, setShowZ3] = useState(false)
    const [ShowZ4, setShowZ4] = useState(false)
    const [ShowZ5, setShowZ5] = useState(false)
    const [Max, setMax] = useState(0)

    const siguientePaso = (num) => {
        if (num == 1) setShowZ1(true) 
        if (num == 2) setShowZ2(true)
        if (num == 3) setShowZ3(true) 
        if (num == 4) setShowZ4(true)
        if (num == 5) setShowZ5(true) 
        setcounter(counter+1)
    }

    const Finish = () => {
        fnOut()
        setcounter(1)
        setShowZ1(false)
        setShowZ2(false)
        setShowZ3(false)
        setShowZ4(false)
        setShowZ5(false)
    }

    useEffect(() => {
        if (Result < 10) setMax(2)
        else if(Result >= 10 && Result < 100) setMax(3)
        else if (Result >= 100 && Result < 1000) setMax(4) 
        else if (Result >= 1000 && Result < 10000) setMax(5) 
        else if (Result >= 10000 && Result < 100000) setMax(6) 
        var x1 = x%10
        var y1 = y%10
        var x2 = (x%100 - x1) / 10
        var y2 = (y%100 - y1) / 10
        var x3 = Math.floor((x%1000) / 100)
        var y3 = Math.floor((y%1000) / 100)
        var x4 = Math.floor((x%10000) / 1000)
        var y4 = Math.floor((y%10000) / 1000)
        var z1 = x1 + y1
        var z2 = x2 + y2
        var z3 = x3 + y3
        var z4 = x4 + y4
        var z5 = 0
        var a1 = 0
        var a2 = 0
        var a3 = 0
        var a4 = 0
        if (z1 >= 10 && z1 < 20) {
            z1 -= 10
            z2 += 1
            ++a1
        }
        if (z2 >= 10 && z2 < 20){
            z2 -= 10
            z3 += 1
            ++a2
        }
        if (z3 >= 10 && z3 < 20) {
            z3 -= 10
            z4 += 1
            ++a3
        }
        if (z4 >= 10 && z4 < 20){
            z4 -= 10
            z5 += 1
            ++a4
        }
        setX1(x1)
        setX2(x2)
        setX3(x3)
        setX4(x4)
        setY1(y1)
        setY2(y2)
        setY3(y3)
        setY4(y4)
        setZ1(z1)
        setZ2(z2)
        setZ3(z3)
        setZ4(z4)
        setZ5(z5)
        setA1(a1)
        setA2(a2)
        setA3(a3)
        setA4(a4)
    }, [x, y, operator, Result])

    return <Div>
            <article>
                    <div>
                        {(ShowZ4 && A4 != 0) ? A4 : <Space/>}
                        {(ShowZ3 && A3 != 0) ? A3 : <Space/>}
                        {(ShowZ2 && A2 != 0) ? A2 : <Space/>}
                        {(ShowZ1 && A1 != 0) ? A1 : <Space/>}&#160;&#160;
                    </div>
                <span>
                    {X4 != 0 && X4}
                    {(X3 != 0 || X4 != 0) && X3}
                    {(X2 != 0 || X3 != 0 || X4 != 0) && X2}
                    {X1}
                </span>
                <br/>
                <span>
                    {operator}
                    {Y4 != 0 && Y4}
                    {(Y3 != 0 || Y4 != 0) && Y3}
                    {(Y2 != 0 || Y3 != 0 || Y4 != 0) && Y2}
                    {Y1}
                </span>
            </article>
            {
                ShowZ1 ? <span>
                {
                    ShowZ5 && Z5 != 0 && Z5
                }
                {ShowZ4 && (Z5 != 0 || Z4 != 0) && Z4}
                {ShowZ3 && (Z5 != 0 || Z4 != 0 || Z3 != 0) && Z3}
                {ShowZ2 && (Z5 != 0 || Z4 != 0 || Z3 != 0 || Z2 != 0) && Z2}
                {ShowZ1 && Z1}
            </span> : 
            <span><Space/></span>
            }
            {
                counter < Max ?
                 <button onClick={() => siguientePaso(counter)}>Siguiente</button> 
                 : 
                 <button onClick={Finish}>Salir</button>
            }
        </Div>
}

export default SolutionArea
