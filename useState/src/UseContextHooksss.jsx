import { createContext } from "react"
import ChildThird from "./ChildThird"

export const b  = createContext()
    const name  = "Abubakkar "
    const age = 40
  


const UseContextHooksss = () =>{
    return (<>

        <b.Provider value = {{name , age }}>
        <ChildThird/>
        </b.Provider>
       

    </>)
}
export default UseContextHooksss