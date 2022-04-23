import axios from "axios";
import { useState } from "react";
import "./writepage.css";
import { Navigate ,useNavigate} from "react-router-dom"
// import { axios } from "axios";

// import { useState } from "react";



export default function WritePage() {
 const navigate = useNavigate()
  
  const [image,setImage] = useState()
  const [post,setPost] = useState({
    "title":"",
    "content":"",
    "category":""
    
   
  
  })
  const Token = localStorage.getItem("Token");
      if(!Token){
        return(<Navigate to={"/login"}></Navigate>)
     }
   const createPost = (e) => {
const name = e.target.name;
const value = e.target.value
setPost({...post,[name]:value})
   }
   
     const handleSubmit = (e) => {
       e.preventDefault();
       
       post.image = image;
       const id = localStorage.getItem("Id")
       post.userId = id;
       setPost({...post,userId:id})
      
axios.post(("https://blog-server-side-app1.herokuapp.com/post"),post).then((res) => {if(res.data.title){
  console.log(res)
 navigate("/")
}})
.catch((err) =>{console.log(err)})
     }
      return (
        <div div className="align">
    <div className="write">
      {
        (image) ?
        
      <img className="writeImage" src={image} alt=""></img>
      :
      <img className="writeImage" src='https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=' alt=""></img>
    }
    <br></br>
    <form onSubmit={handleSubmit} id="writeform">
      <div className="writeFormGroup">
      
    <textarea type="text" placeholder="Enter image URL" className="writeInput imageTextArea"  onChange={(e) =>
                setImage(e.target.value)
              }/>
              <br></br>
      <input type={"text"} placeholder={"Title"} name="title" onChange={createPost} className="writeInput" style={{border:"none"}} autoFocus={true}></input>
      <input type={"text"} placeholder={"Category"} name="category" onChange={createPost} className="writeInput" style={{border:"none"}} autoFocus={true}></input>
      </div>
      <textarea type={"text"} placeholder={"Tell your story......"} name="content" onChange={createPost} className="writeInput writeText"></textarea>
     
      <button type="submit" className="writeSubmit">Publish</button>
    </form>

    </div>
    </div>
  )
}
