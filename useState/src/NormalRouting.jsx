import { BrowserRouter , Link, Route, Routes  } from "react-router-dom";
import Home from './components/Home'
import EmailService from './components/EmailService'
import About from './components/About'
import Contact from './components/Contact'
const NormalRouting =  () =>{
    return (<>
    <Routes>
        <Route path = "/Home" element={<Home/>}></Route>
        <Route path = "/About" element={<About/>}></Route>
        <Route path = "/Contact" element={<Contact/>}></Route>
        <Route path = "/EmailService" element={<EmailService/>}></Route>
    </Routes>
    <Link to="/Home">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="/EmailService">EmailService</Link>
    </>)

}
export default NormalRouting