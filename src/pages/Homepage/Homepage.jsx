import "./homepage.css"
import Header from "../../header/Header"
import {Post} from "../../posts/Post"
import Sidebar from "../../sidebar/Sidebar"
import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios"
export default function Homepage() {
  const [data,setData] = useState([]);
  
  useEffect(() => {
    axios.get(("https://blog-server-side-app1.herokuapp.com/register")).then((res) => {
      console.log(res.data)
      setData([...res.data])
    })
    
  },[])
   

  const Token = localStorage.getItem("Token");
  if(!Token){
    return(<Navigate to={"/login"}></Navigate>)
  }


 
  return (
      <>
     
     <Header>
      
    </Header>
    <div className="home">
    
              
              <div className="showPost">
                {
                  
                  data.map((e) =>
                    <Post key={e._id} title={e.title} content={e.content} image={e.image} ></Post>
                  )

                  
                }
                </div>
               
                 <Sidebar className="side" postData = {data} >
                 
                 </Sidebar>
      
    
      

      </div>
      </>
  )
}
