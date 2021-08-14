import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
 
const Div = styled.div`
display: flex;
flex-direction: column;
text-align: right;
font-size: clamp(34px, calc(3vw+3vh), calc(3vw+3vh));
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
   font-family: "Kufam", cursive;
   padding: 10px;
   border-radius: 5px;
   font-size: 25px;
}
`  
 
const MultiplicationSolutionArea = ({x, y, v,Result, fnOut}) => {
 
    const {type} = useParams()
   const [counter, setcounter] = useState(1)
   const [counter2, setcounter2] = useState(1)
   const [X, setX] = useState(0)
   const [PrimeraOperacion, setPrimeraOperacion] = useState(0)
   const [V, setV] = useState(0)
   const [Y1, setY1] = useState(0)
   const [Y2, setY2] = useState(0)
   const [Y3, setY3] = useState(0)
   const [Y4, setY4] = useState(0)
   const [R1, setR1] = useState(0)
   const [R2, setR2] = useState(0)
   const [R3, setR3] = useState(0)
   const [R4, setR4] = useState(0)
   const [Z1, setZ1] = useState(0)
   const [Z2, setZ2] = useState(0)
   const [Z3, setZ3] = useState(0)
   const [Z4, setZ4] = useState(0)
   const [FinishFirstStep, setFinishFirstStep] = useState(false)
   const [ShowZ1, setShowZ1] = useState(false)
   const [ShowZ2, setShowZ2] = useState(false)
   const [ShowZ3, setShowZ3] = useState(false)
   const [ShowZ4, setShowZ4] = useState(false)
   const [ShowZ5, setShowZ5] = useState(false)
   const [ShowZ6, setShowZ6] = useState(false)
   const [ShowZ7, setShowZ7] = useState(false)
   const [ShowZ8, setShowZ8] = useState(false)
   const [Max, setMax] = useState(0)
   const [Max2, setMax2] = useState(0)
 
   const siguientePaso = (num) => {
       if (num == 1) setShowZ1(true)
       if (num == 2){
        setShowZ2(true)
       }
       if (num == 3){
        setShowZ3(true)
       }
       if (num == 4){
        setShowZ4(true)
       }
       setcounter(counter+1)
   }

   const siguientePaso2 = (num) => {
    if (num == 1) setShowZ5(true)
    if (num == 2){
     setShowZ6(true)
    }
    if (num == 3){
     setShowZ7(true)
    }
    if (num == 4){
     setShowZ8(true)
    }
    setcounter2(counter2+1)
}
 
   const FinishFirst = () => {
       setFinishFirstStep(true)
        setcounter(1)
        setShowZ1(false)
        setShowZ2(false)
        setShowZ3(false)
        setShowZ4(false)
   }
   const FinishTotal = () => {
       fnOut()
      setTimeout(() => {
        setcounter2(1)
        setFinishFirstStep(false)
        setShowZ5(false)
        setShowZ6(false)
        setShowZ7(false)
        setShowZ8(false)
      }, 500);
   }
 
   useEffect(() => {
        var y1 = y%10
        var y2 = (y%100 - y1) / 10
        var y3 = Math.floor((y%1000) / 100)
        var y4 = Math.floor((y%10000) / 1000)
       var z1 = x * y1
       var z2 = x * y2 * 10
       var z3 = x * y3 * 100
       var z4 = x * y4 * 1000
       var z5 = 0
       var totalZ = z1+z2+z3+z4
       var r1 = totalZ * v
       console.log(r1)
       var r2 = totalZ * v
       var r3 = totalZ * v
       var r4 = totalZ * v
       if (z1 >= 10 && z1 < 20) {
           z1 -= 10
           z2 += 1
       }
       if (z2 >= 10 && z2 < 20){
           z2 -= 10
           z3 += 1
           }
       if (z3 >= 10 && z3 < 20) {
           z3 -= 10
           z4 += 1
           }
       if (z4 >= 10 && z4 < 20){
           z4 -= 10
           z5 += 1
          }
       setX(x)
       setV(v)
       setY1(y1)
       setY2(y2)
       setY3(y3)
       setY4(y4)
       setZ1(z1)
       setZ2(z2)
       setZ3(z3)
       setZ4(z4)
       setR1(r1)
       setR2(r2)
       setR3(r3)
       setR4(r4)
       setPrimeraOperacion(z1+z2+z3+z4)
       if (y < 10) setMax(1)
       else if (y >= 10 && y < 100) setMax(2)   
       else if (y >= 100 && y < 1000) setMax(3)
       else if (y >= 1000 && y < 10000) setMax(4)
       else setMax(8)
       if (v < 10) setMax2(1)
       else if (v >= 10 && v < 100) setMax2(2)   
       else if (v >= 100 && v < 1000) setMax2(3)
       else if (v >= 1000 && v < 10000) setMax2(4)
       else setMax2(8)
   }, [x, y, v,Result, type])
 
   return <Div>
           <article>
               {
                   FinishFirstStep ? <>
                   <span className="light-colored">
                   {PrimeraOperacion}
               </span>
               <br/>
               <span>
                   x&#160;
                   <span>{V}</span>
               </span>
               </> : 
                <>
                    <span>
                        {X}
                    </span>
                    <br/>
                    <span>
                        x&#160;
                        <acronym className={counter === 5 ? "light-colored" : ""}>
                                {Y4 != 0 && Y4}
                        </acronym>
                        <acronym className={counter === 4 ? "light-colored" : ""}>
                                {(Y3 != 0 || Y4 != 0) && Y3}
                            </acronym>
                            <acronym className={counter === 3 ? "light-colored" : ""}>
                            {(Y2 != 0 || Y3 != 0 || Y4 != 0) && Y2}
                            </acronym>
                            <acronym className={counter === 2 ? "light-colored" : ""}>
                                {Y1}
                            </acronym>
                    </span>
                </>
               }
           </article>
           {
               ShowZ1 && <span>
               {Z1}
           </span> 
           }
           {
               ShowZ5 && <span>
                   {R1}
               </span>
           }
           {
               ShowZ2 && <span>
               {y >= 10 && y < 100 && " +"}{Z2 / 10}<strong>0</strong>
           </span> 
           }
           {
               ((y >= 10 && y < 100) && ShowZ2) && <span style={{borderTop:"3px solid", color:"#b6fbfb"}}>
               {Z2+Z1}
           </span> 
           }

           {
               ShowZ6 && <span>
               {v >= 10 && v < 100 && " +"}{R2 / 10}<strong>0</strong>
           </span> 
           }
           {
               ((v >= 10 && v < 100) && ShowZ6) && <span style={{borderTop:"3px solid", color:"#b6fbfb"}}>
               {Z2+Z1}
           </span> 
           }

           {
                ShowZ3 && <span>
               {y >= 100 && y < 1000 && " +"}{Z3 / 10}<strong>0</strong>
           </span> 
           }
           {
               y >= 100 && y < 1000 && ShowZ3 && <span style={{borderTop:"3px solid", color:"#b6fbfb"}}>
               {Z3+Z2+Z1}
           </span> 
           }

            {
                ShowZ7 && <span>
               {v >= 100 && v < 1000 && " +"}{R3 / 10}<strong>0</strong>
           </span> 
           }
           {
               v >= 100 && v < 1000 && ShowZ7 && <span style={{borderTop:"3px solid", color:"#b6fbfb"}}>
               {R3+R2+R1}
           </span> 
           }
           
           {
               ShowZ4 && <span>
               {y >= 1000 && y < 10000 && " +"}{Z4/10}<strong>0</strong>
           </span> 
           }
           {
               y >= 1000 && y < 10000 && ShowZ4 && <span style={{borderTop:"3px solid", color:"#b6fbfb"}}>
               {Z4+Z3+Z2+Z1}
           </span> 
           }

           { !FinishFirstStep ? (
                counter <= Max ?
                <button onClick={() => siguientePaso(counter)} className={counter === 1 ? "start-finish-btn" : "next-btn"}>Siguiente paso</button>
                 :
                 <button onClick={FinishFirst} className="start-finish-btn">Siguiente paso</button>
           ) : (
              counter2 <= Max2 ? 
              <button onClick={() => siguientePaso2(counter2)} className="start-finish-btn">Siguente paso</button> :
              <button onClick={FinishTotal}  className="start-finish-btn">Volver</button> 
           )
           }
       </Div>
}
 
export default MultiplicationSolutionArea
 

