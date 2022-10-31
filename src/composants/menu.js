import { Link } from "react-router-dom"
const Menu = () => {
    return (
        <div>
        <ul>    
          <Link to="/"> <li>Home</li></Link>
          <Link to="/Service"><li>Service</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
        </ul>  
        </div>
    )
}

export default Menu