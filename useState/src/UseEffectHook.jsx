import { useEffect, useState } from "react"
import './App.css'
const UseEffectHook = () =>{
    const [count ,setCount]  = useState(0)
    useEffect(()=>{
       console.log("changes " , count)
    },[count])
    return(
        <>
<button id="q" onClick={()=>{setCount(count+1)}}>Evvvv</button>
        </>
    )
}
export default UseEffectHook