//second 
import { Routes , Route , Link } from "react-router-dom"
import Home from './componentsOne/Home'
import User from './componentsOne/User'
const DynamicRouting = () => {
    return (<>
       <Routes>
        <Route path="user/:id" element={<User/>}></Route>
        <Route path="/" element={<Home/>}></Route>
       </Routes>
    </>)
}
export default DynamicRouting