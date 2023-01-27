import { useRef } from "react";
import { FaBars,FaTimes} from "react-icons/fa";
import "../files/style.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Navbar(){
  const navRef =useRef();
  const showNavbar =()=>{
    navRef.current.classList.toggle("responsive_nav");
  }
  const { loginWithRedirect ,isAuthenticated,logout,user} = useAuth0();
return(
  <header>
    <h3>ResumeBuilder</h3>
    <nav ref={navRef}>
      <Link to="/Home">Home</Link>
      <Link to="/About">Create Resume</Link>
      <Link to="/Abts">About us</Link>
      <Link to="/Contact">Contact Us</Link>
    
 
      
      <button className="nav-btn nav-close-btn"onClick={showNavbar}>
     <FaTimes/>

      </button>
     </nav>
    <button onClick={showNavbar}>
      <FaBars/>
      </button>
   
   

    {isAuthenticated && <p>{user.name}</p>}
   { isAuthenticated ?(<li>
  <button  onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
   </li>)
   : (
  
    <button  onClick={() => loginWithRedirect()}>Log In</button>
   )}

    
  </header>
);


}
export default Navbar;