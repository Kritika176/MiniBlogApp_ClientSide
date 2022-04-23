import "./post.css"

export  function Post({title,content,image}) {
  
  console.log(title,content,image)
  return (
    <div className="post">
      <div className="alignImage">
      <img src= {image} alt="" width={"300px"} height="300px" className="postImg"></img>
     
      </div>
      <div className="alignTitle">
      <h3>{title} </h3>
      <div className="deletePost"><i class="fa-solid fa-trash"></i></div>
      </div>
      <div className="alignContent">
      <p>{content}</p>
   
      
      </div>
     

    </div>
  )
}
