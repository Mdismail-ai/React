import { useMemo, useState } from "react"

 const UseMemoHook = () =>{
    const [count , setCount ] = useState(0)
    const sqare = useMemo(()=>{
    return count * count
    },[count])

    return (<>
        <button onClick={()=>{setCount(count+1)}}>click me </button>
        <h1 >{count}</h1>
        <h1 >{sqare}</h1>
    </>)
 }
 export default UseMemoHook
 // save the result only 