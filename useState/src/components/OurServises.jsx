import { Outlet , Link} from "react-router-dom"

const OurServises = ()=>{
    return (<>
    <h1>We are At OurServisess</h1>
    <Link to="dummay" > Dummy </Link>
    <Outlet/>
    </>)
}
export default OurServises