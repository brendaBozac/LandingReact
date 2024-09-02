import React from "react"
import '../Navbar/Navbar.css'
import logoNavbar from "../../img/juniorRowWhite.png"
import CartWidget from "../CartWidget/CartWidget.jsx"
import { NavLink, Link } from "react-router-dom"

function Navbar() {

    return (

        <nav className="navbar-contenedor">
            <div className="logo-links-navbar-contenedor">
                
                <Link to='/'>
                    <img 
                        className="logo-navbar"
                        src={logoNavbar}
                        alt="logo del ecommerce" />
                </Link>

                <div className="Categories">
                    <NavLink to={`/categoria/mochilas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'PosibleOption'}>Backpacks</NavLink>
                    <NavLink to={`/categoria/tecnologia`} className={({ isActive }) => isActive ? 'ActiveOption' : 'PosibleOption'}>Technology</NavLink>
                    <NavLink to={`/categoria/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'PosibleOption'}>Accessories</NavLink>
                </div>
                
            </div>
            <Link to="/Cart/Cart" className="anchoCart" >
                <CartWidget />
            </Link>
            
            
        </nav>

    )
}

export default Navbar;