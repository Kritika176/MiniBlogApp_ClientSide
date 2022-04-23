
import {Routes,Route} from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import WritePage from "../pages/writepage/WritePage";
 import Register from "../pages/register/Register";
 import Login from "../pages/Login/Login";
export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Homepage></Homepage>}/>
         <Route path="/post" element={<WritePage></WritePage>}></Route>
         <Route path="/register" element={<Register></Register>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  )
}
