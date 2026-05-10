// first 
import { Routes , Route , Link } from "react-router-dom"
const Home = () =>{
    return (<>
    <Link  to="user/1">user 1</Link>
    <br/> 
    <Link  to="user/2">user 2</Link>
    </>)
}
export default Home