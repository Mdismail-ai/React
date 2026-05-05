import { useContext } from "react"
import {a} from './UseContextHook'

const ChildSecond =()=>{
    const {name ,age } = useContext(a)  // use 
    return (
        <>
<h1>{name}</h1>
      <h2>{age}</h2>
        </>
    )
}

export default ChildSecond