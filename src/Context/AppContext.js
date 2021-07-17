import React, { createContext, useContext,useState } from "react"

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({children}) => {
    const [SumLevel, setSumLevel] = useState(null)
    const [SubstractLevel, setSubstractLevel] = useState(null)
    const [MulLevel, setMulLevel] = useState(null)
    const [DivLevel, setDivLevel] = useState(null)
    
    return <AppContext.Provider value={{SumLevel, setSumLevel, 
    SubstractLevel, setSubstractLevel, 
    MulLevel, setMulLevel, 
    DivLevel, setDivLevel}}>
        {children}
    </AppContext.Provider>
}
export default useAppContext