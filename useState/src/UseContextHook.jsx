import { createContext } from "react"
import ChildOne from "./ChildOne";
import ChildSecond from "./ChildSecond";


export   const a = createContext(); /// create out side the componenets 
const UseContextHook =()=>{
 const name = "Ismail Mohammed "
 const age = 90
    return(
        <>
      <a.Provider value={{name, age}}>    // provider 
          <ChildSecond/>
      </a.Provider>
       
        </>
    )
}

export default UseContextHook