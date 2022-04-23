import { useState } from "react";
import "./sidebar.css"

export default function Sidebar(props) {
  const [id,setId] = useState();
  
  useState(() => {
    const Id = localStorage.getItem("Id");
    setId(Id);
  })
  console.log(props.postData)
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <p className="sidebarTitle">
         About me
        </p>
         
      
      
      <p className="aboutTitle"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex fuga ipsa non assumenda blanditiis ratione?</p>
      </div>
         
     
    </div>
  )
}
