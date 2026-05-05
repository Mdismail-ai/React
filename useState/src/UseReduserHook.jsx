import { useReducer } from "react"

const UseReduserHook = () =>  {
    const intialValu = 0
    const fun =(state,action) =>{
          switch(action){
        case "Increment":
           return state+1
        case "Decrement":
            return state-1
        default :
        return state

    }
    }
  
    const [state, dispatch ] = useReducer(fun , intialValu);
    return (
        <>
          <button onClick={()=>{dispatch("Increment")}}>Increment</button>
          <h1 className="">{state}</h1>
          <button onClick={()=>{dispatch("Decrement")}}>Decrement</button>
       
        </>
    )
}
export default UseReduserHook