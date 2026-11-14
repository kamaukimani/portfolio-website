import {Link,NavLink} from "react-router-dom"

function NavBar(){
    return(
        <div className="nav-link">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/skills'>Skills</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/experience'>Experience</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    )
}

export default NavBar;