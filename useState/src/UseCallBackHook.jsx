import { useState } from "react"
import ChildOne from "./ChildOne";

const UseCallBackHook = () =>{
const [add , setAdd] = useState(0);

const handleClick = () => {
    console.log("button Clicked ")
}

    return (
        <>

         <button  onClick={()=>{setAdd(add+1)}}> {add} </button>
        <ChildOne handleClick ={handleClick} />
        </>
    )
}
export default UseCallBackHook