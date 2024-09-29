import React, { useEffect, useState } from "react";
import "./Navbar.css"
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu-icon.png'
import { Link } from "react-scroll";

function Navbar() {
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? setSticky(true) : setSticky(false);
        })
    }, [])
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = ()=>{
        showMenu? setShowMenu(false) : setShowMenu(true)
    }
    return (
        <nav className={`container ${sticky ? 'dark_nav' : ''}`}>
            <img src={logo} alt="" className="logo" />
            <ul className={showMenu?'':"hideMenu"}>
                <li>
                    <Link to="hero" smooth={true} offset={0} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="programs" smooth={true} offset={-260} duration={500}>
                        Pragram
                    </Link>
                </li>
                <li>
                    <Link to="About" smooth={true} offset={-150} duration={500}>
                        About us
                    </Link>
                </li>
                <li>
                    <Link to="campus" smooth={true} offset={-260} duration={500}>
                        Campus
                    </Link>
                </li>
                <li>
                    <Link to="testimonials" smooth={true} offset={-260} duration={500}>
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link to="Contact" smooth={true} offset={-260} duration={500} className="btn">Contancts</Link>
                </li>
            </ul>
            <img src={menuIcon} className="menuIcon" onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar;
