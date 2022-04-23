import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
          <span className="headerTitleSmall">Music,Lifestyle & Technoloy </span>
          <span className="headerTitleLarge">BLOG</span>
        
      </div>
      <img className = "headerImage" src="https://images.unsplash.com/photo-1462524500090-89443873e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""></img>
    </div>
  )
}
