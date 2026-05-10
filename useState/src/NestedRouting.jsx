import {Routes  , Route , Link } from 'react-router-dom'
import Dummay from './components/Dummay'
import OurServises from './components/OurServises'
const NestedRouting = () =>{

    return(<>
<Routes>
    <Route path="/OurServises" element={<OurServises/>}>
        <Route path="dummay" element={<Dummay/>}/>  
    </Route>
</Routes>
<Link to="/OurServises" >OurServises</Link>

    </>)

}
export default NestedRouting