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
const Space = () => {
   return <em style={{marginRight: "5px"}}>&#160;&#160;</em>
}
 
const MultiplicationSolutionArea = ({x, y, Result, fnOut}) => {
 
    const {type} = useParams()
   const [counter, setcounter] = useState(1)
   const [X, setX] = useState(0)
   const [Y1, setY1] = useState(0)
   const [Y2, setY2] = useState(0)
   const [Y3, setY3] = useState(0)
   const [Y4, setY4] = useState(0)
   const [Z1, setZ1] = useState(0)
   const [Z2, setZ2] = useState(0)
   const [Z3, setZ3] = useState(0)
   const [Z4, setZ4] = useState(0)
   const [Z5, setZ5] = useState(0)
   const [ShowZ1, setShowZ1] = useState(false)
   const [ShowZ2, setShowZ2] = useState(false)
   const [ShowZ3, setShowZ3] = useState(false)
   const [ShowZ4, setShowZ4] = useState(false)
   const [ShowZ5, setShowZ5] = useState(false)
   const [ShowZ6, setShowZ6] = useState(false)
   const [ShowZ7, setShowZ7] = useState(false)
   const [ShowZ8, setShowZ8] = useState(false)
   const [Max, setMax] = useState(0)
 
   const siguientePaso = (num) => {
       if (num == 1) {
        setShowZ1(true)
        console.log(Z1)
       }
       if (num == 2){
        setShowZ2(true)
       }
       if (num == 3){
        setShowZ3(true)
       }
       if (num == 4){
        setShowZ4(true)
       }
       if (num == 5){
        setShowZ5(true)
       }
       setcounter(counter+1)
   }
 
   const Finish = () => {
       fnOut()
       setTimeout(() => {
           setcounter(1)
           setShowZ1(false)
       setShowZ2(false)
       setShowZ3(false)
       setShowZ4(false)
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
       setX(x)
       setY1(y1)
       setY2(y2)
       setY3(y3)
       setY4(y4)
       setZ1(z1)
       setZ2(z2)
       setZ3(z3)
       setZ4(z4)
       setZ5(z5)
       if (y < 10) setMax(1)
       else if (y >= 10 && y < 100) setMax(2)   
       else if (y >= 100 && y < 1000) setMax(3)
       else if (y >= 1000 && y < 10000) setMax(4)
       else setMax(5)
   }, [x, y, Result, type])
 
   return <Div>
           <article>
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
           </article>
           {
               ShowZ1 && <span>
               {Z1}
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
               ShowZ4 && <span>
               {y >= 1000 && y < 10000 && " +"}{Z4/10}<strong>0</strong>
           </span> 
           }
           {
               y >= 1000 && y < 10000 && ShowZ4 && <span style={{borderTop:"3px solid", color:"#b6fbfb"}}>
               { Z4+Z3+Z2+Z1}
           </span> 
           }

           {
               counter <= Max ?
               <button onClick={() => siguientePaso(counter)} className={counter === 1 ? "start-finish-btn" : "next-btn"}>{counter === Max ? "Ver respuesta" : counter === 1 ? "Ver solución" : "Siguiente paso"}</button>
                :
                <button onClick={Finish} className="start-finish-btn">Volver</button>
           }
       </Div>
}
 
export default MultiplicationSolutionArea
 

