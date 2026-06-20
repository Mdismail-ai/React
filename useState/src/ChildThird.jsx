import React, { useContext } from "react"
import {a} from "./UseContextHooksss"


const ChildThird = () =>{
    const {name , age } = useContext(a)
    return (
        <>
<h1 className="">{name}</h1>
<h1 className="">{age}</h1>

        </>
    )
}
export default ChildThird
