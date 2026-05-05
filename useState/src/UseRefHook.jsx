import React from "react"
import {useRef} from 'react'
const UseRefHook =()=>{
    

    const inf =  useRef(0)
    const aa = () =>{
        inf.current += 1;
        inf.current.focus()
        console.log(inf.current)
    }
    const aaa = ()=>{
        inf.current.focus()
    }
    return (
        <>
        <button id="a" onClick={aa}>click me </button>
        <h1>{inf.current}</h1>
        <input ref={inf} />
        <button id="a" onClick={aaa}>click me  </button>
        </>
    )
}
export default UseRefHook