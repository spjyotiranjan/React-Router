import { Link } from "react-router-dom"
import "./Navbar.css"

const NavBar = () => {
  return (
    <div className="main">
        <Link to={"/"} style={{textDecoration: "none",color: "black"}}>
            <h1 className="Logo" >Kalvium❤️</h1>
        </Link>
        <div className="right">
            <Link to={"/about"} style={{textDecoration: "none",color: "black"}}><h1>About</h1></Link>
            <Link to={"/contact"} style={{textDecoration: "none",color: "black"}}><h1>Contact</h1></Link>
        </div>
    </div>
  )
}

export default NavBar