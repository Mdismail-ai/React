import { useEffect, useState } from "react"
import './App.css'
const FetchInReact = () =>{
    const [users , setUser] = useState([])
   useEffect(()=>{ fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>setUser(data))
    .catch(console.error)},[])
    return(
        <div className="container">
                {users.map((user)=>(
 <div id="Names">
    <h1>id : {user.id}</h1>
    <h2>name : {user.name}</h2>
    <h3>email : {user.email}</h3>
    <h4>username : {user.username}</h4>
    <h5>address :{user.address.city}</h5>
 </div>
    )
)} </div>
    )

}
export default FetchInReact