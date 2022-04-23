import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./register.css"

export default function Register() {
   const [user,setUser] = useState({
       username:"",
       email:"",
       password:""

   })
   const navigate = useNavigate();
    const createUser = (e) =>{
        const name = e.target.name;
        const value = e.target.value
       setUser({...user,[name]:value})
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
       axios.post(("https://blog-server-side-app1.herokuapp.com/register"),
           user
       ).then((res) =>{
        console.log(res)
    })
    }
  return (
      <div className="container">
    <div className="main">
      <div className="signup">
				<form onSubmit={handleSubmit}>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="User name" onChange={createUser} />
					<input type="email" name="email" placeholder="Email" onChange={createUser}/>
					<input type="password" name="password" placeholder="Password" onChange={createUser}/>
					<button type="submit" onClick={(e) => {navigate("/login")}}>Sign up</button>
          <p>Password must contain atleast 1 lowercase[a-z],1[uppercase[A-Z], symbol and a numeric value. </p>
				</form>
			</div>
    </div>
    </div>
  )
}
