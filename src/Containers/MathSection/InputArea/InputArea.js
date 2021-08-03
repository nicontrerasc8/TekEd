import React, { useEffect, useRef, useState } from 'react'

const Input = ({x, y, Refe, isOut}) => {
    return <input className={isOut ? "display-none": null} maxLength="1" ref={Refe} autoComplete="off" placeholder="0" value={x} onChange={(e) => y(e.target.value)}/>
}

const InputArea = ({val, 
    x1, x2,x3,x4,x5,x6,x7,x8, 
    y1,y2,y3,y4,y5,y6,y7,y8}) => {
        const Ref1 = useRef(null)
        const Ref2 = useRef(null)
        const Ref3 = useRef(null)
        const Ref4 = useRef(null)
        const Ref5 = useRef(null)
        const Ref6 = useRef(null)
        const Ref7 = useRef(null)
        const Ref8 = useRef(null)
        useEffect(() => {
            if (x1 === "") Ref1.current.focus()
            else{
                if(x2 === "") Ref2.current.focus()
                else{
                    if (x3 === "") Ref3.current.focus()
                    else{
                        if (x4 === "") Ref4.current.focus()
                        else{
                            if(x5 === "") Ref5.current.focus()
                            else{
                                if(x6 === "") Ref6.current.focus()
                                else{
                                    if(x7 === "") Ref7.current.focus()
                                    else{
                                        if (x8 === "") Ref8.current.focus()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, [x1, x2,x3,x4,x5,x6,x7,x8])
    return (
        <section>
            <Input x={x8} y={y8} Refe={Ref8} isOut={val < 10000000}/>
            <Input x={x7} y={y7} Refe={Ref7} isOut={val < 1000000}/>
            <Input x={x6} y={y6} Refe={Ref6} isOut={val < 100000}/>
            <Input x={x5} y={y5} Refe={Ref5} isOut={val < 10000}/>
            <Input x={x4} y={y4} Refe={Ref4} isOut={val < 1000}/>
            <Input x={x3} y={y3} Refe={Ref3} isOut={val < 100}/>
            <Input x={x2} y={y2} Refe={Ref2} isOut={val < 10}/>
            <Input x={x1} y={y1} Refe={Ref1} isOut={false}/>
        </section>
    )
}

export default InputArea
