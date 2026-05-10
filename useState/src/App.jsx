import { useState } from 'react'
import './App.css'
import UseStateHook from './UseStateHook'
import UseEffectHook from './UseEffectHook'
import UseRefHook from './UseRefHook'
import UseMemoHook from './useMemoHook'
import UseCallBackHook from './UseCallBackHook'
import UseContextHook from './UseContextHook'
import UseContextHooksss from './UseContextHooksss'
import UseReduserHook from './UseReduserHook'
import CoutomHooks from './CoutomHooks'
import ChildFoure from './ChildFoure'
import ChildFive from './ChildFive'
import FetchInReact from './FetchInReact'

function App() {
  const [count, setCount] = useState(0)
  const name = "Ismail"
    const [car , setCar] = useState({
    CarName : "BMW" ,
    model :  "Cs5",
    price : "900"
});
    const k = () => {
     setCar((pre)=>({
      ...pre,
         CarName : "Marides"
     }))
  }
  const a = () => {
    setCount((pre) => pre + 1)
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <h1>{count}</h1>

      <button onClick={() => setCount(count - 1)}>Click me</button>
      <button onClick={a}>Click me</button>
      <button onClick={k}>Click me </button>
      <UseStateHook name={name} CarName = {car.CarName} model = {car.model} price = {car.price}/>
      <div id="divF">
        <form>
        <label > Name </label>
        <input id='' placeholder='plese Enter Yore Name' type='text'></input>
        <br/>
        <label > password </label>
        <input id='' placeholder='plese Enter Yore password' type='password'></input>
        <br/>
        <label > Email </label>
        <input id='' placeholder='plese Enter Yore email' type='email'></input>
        <br/>
        <button type='submmit'>Submmit</button>
      </form>
      </div>
      <UseEffectHook/>
      <UseRefHook/>
      <UseMemoHook/>
      <UseCallBackHook/>
      <UseContextHook/>
      <UseContextHooksss/>
      <UseReduserHook/>
     
      <ChildFoure/>
      <ChildFive/>
      <FetchInReact/>
    </>
  )
}

export default App
