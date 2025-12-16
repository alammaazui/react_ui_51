import { useState, createContext } from "react"

export let my_context = createContext()

export default function SvContext({children}) {
    
    const [sv, setSv] = useState("shared value");
    const [cart, setCart] = useState([]);

  return (
    <>
       <my_context.Provider value={{sv,setSv,cart,setCart}}>
        {children} 
       </my_context.Provider> 
    
    </>
  )
}


