
import { useEffect, useState } from "react"
import './App.css'

const UseStateHook = ({ name , CarName , Model, price }) => {
  const [count, setCount] = useState(0)

  const a = () => {
    setCount((pre) => pre + 1)
  }
  useEffect(()=>{
    fetch(`google.com`).then(res=>res.json()).then(data =>console.log(data)).catch();
  })

  return (
    <>
      <button onClick={a}>Click Me</button>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <h1>{CarName}</h1>
      <h1>{Model}</h1>
      <h1>{price}</h1>
     

    </>
  )
}

export default UseStateHook