import "./login.css"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
    const [user,setUser] = useState({
           email:"",
    
        password:""
    })
    const navigate = useNavigate();
    const {dispatch,userId} = useContext(Context)
   const createUser = (e) =>{
       const name=e.target.name;
       const value=e.target.value;
       setUser({...user,[name]:value})
   }
   
   const handleSubmit = (e) => {
       e.preventDefault();
       dispatch({type:"loginStart"})
       axios.post(("https://blog-server-side-app1.herokuapp.com/login"),user).then((res) => {
        const response = res.data;
        console.log(response)
        if(response.token){
           console.log(response.token)
            dispatch({type:"loginSuccessfull",payload:res.data.id})
            localStorage.setItem("Token",response.token)
            localStorage.setItem("Id",response.id)
            navigate("/")
        }
       }).catch((err) => {
           dispatch({type:"loginFailure"})
       })
   }
 
  return (
    <div className="container">
    <div className="main">
      <div className="login">
				<form onSubmit = {handleSubmit}>
					<label  aria-hidden="true">Login</label>
					
					<input type="email" name="email" placeholder="Email" onChange={createUser}/>
					<input type="password" name="password" placeholder="Password" onChange={createUser}/>
					<button type="submit">Login</button>
					
				</form>
              
			</div>
    </div>
    </div>
  )
}
