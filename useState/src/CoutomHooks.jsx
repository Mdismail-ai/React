import { useState } from "react"
const CoutomHooks = () =>{
const [Count , setCount ] = useState(0)
const handleIncement = () =>{
   setCount(Count+1)
}
const handledecrement = () =>{
   setCount(Count-1)
}
   return {Count ,handleIncement,handledecrement}
}
export default CoutomHooks
