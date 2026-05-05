import React, { useContext } from "react"
const ChildOne = ({handleClick} ) =>{
    console.log("component-rerenderd")
   
    return (<>

        <button onClick={handleClick}>Click me From Child </button>
    </>)
}
 export default React.memo(ChildOne)
//export default ChildOne