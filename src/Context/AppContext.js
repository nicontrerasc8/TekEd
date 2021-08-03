import React, { createContext, useContext,useState } from "react"

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({children}) => {
    const [CounterCorrect, setCounterCorrect] = useState(0)
    
    return <AppContext.Provider value={{CounterCorrect, setCounterCorrect}}>
        {children}
    </AppContext.Provider>
}
export default useAppContext