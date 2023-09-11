import React, { useState } from 'react';
import CartWidget from './CartWidget';
import './navbar.css';

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
                    <li><a href="" onClick={handleNavLinkClick}>INICIO</a></li>
                    <li><a href="" onClick={handleNavLinkClick}>REMERAS</a></li>
                    <li><a href="" onClick={handleNavLinkClick}>CAMPERAS</a></li>
                    <li><a href="" onClick={handleNavLinkClick}>BUZOS</a></li>
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

