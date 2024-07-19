import React, { useState, useEffect } from 'react';
import Image from "../Images/image-rbg.png";
import "./Header.css";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='All'>
            <div className={`Header ${isScrolled ? 'scrolled' : ''}`}>
                <div className='Header_navbar'>
                    <div className={`title ${isScrolled ? 'scrolled' : ''}`}>
                        <img src={Image} alt='Logo' />
                    </div>
                    <div className={`buttons ${isScrolled ? 'scrolled' : ''}`}>
                        <div className='button1'>
                            <a href='#'>Home</a>
                        </div>
                        <div className='button1'>
                            <a href='#'>About Me</a>
                        </div>
                        <div className='button1'>
                            <a href='#'>My Portfolio</a>
                        </div>
                        <div className='button1'>
                            <a href='#'>My Skills</a>
                        </div>
                    </div>
                    <div className={`left ${menuOpen ? 'clicked' : ''} ${isScrolled ? 'scrolled' : ''}`} onClick={toggleMenu}>
                        <i className={menuOpen ? 'fa fa-times' : 'fa fa-bars'}></i>
                    </div>
                    {/* Menu */}
                    {menuOpen && (
                        <div className={`menu ${isScrolled ? 'scrolled' : ''}`}>
                            <ul>
                                <li><a href="#">Log In</a></li>
                                <li><a href="Signin.js">Sign In</a></li>
                                <li><a href="#">Extras</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
