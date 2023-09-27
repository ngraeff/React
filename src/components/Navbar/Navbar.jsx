import React, { useState } from 'react';
import CartWidget from './CartWidget';
import './navbar.css';
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    const handleNavLinkClick = () => {
        setIsActive(false);
    };

    return (
        <div className='headerNav'>
            <nav>
                <ul className={`navbar ${isActive ? 'active' : ''}`}>
                    <li><Link to="/" onClick={handleNavLinkClick}>INICIO</Link></li>
                    <li><Link to="/hombre" onClick={handleNavLinkClick}>HOMBRE</Link></li>
                    <li><Link to="/mujer" onClick={handleNavLinkClick}>MUJER</Link></li>
                    <li><Link to="/joyeria" onClick={handleNavLinkClick}>JOYERIA</Link></li>
                    <li><Link to="/electronica" onClick={handleNavLinkClick}>ELECTRONICA</Link></li>
                </ul>
                <div className={`toggle ${isActive ? 'active' : ''}`} onClick={toggleNavbar}>
                    <div className="toggle__line toggle__line--up"></div>
                    <div className="toggle__line toggle__line--mid"></div>
                    <div className="toggle__line toggle__line--down"></div>
                </div>
                <div className="carrito">
                    <CartWidget className="carritoSVG"/> <span>0</span>
                </div>
                
            </nav>
        </div>
    );
}

export default Navbar;

