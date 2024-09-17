import React, { useState, useEffect } from 'react';
import Image from "../Images/image-rbg.png";
import "./Header.css";
import { Link } from 'react-scroll';

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
                            <Link to="home" smooth={true} duration={200}>
                                Home
                            </Link>
                        </div>
                        <div className='button1'>
                            <Link to="aboutme" smooth={true} duration={200}>
                                About Me
                            </Link>
                        </div>
                        <div className='button1'>
                            <Link to="qualifications" smooth={true} duration={200}>
                                Qualifications
                            </Link>
                        </div>
                        <div className='button1'>
                            <Link to="testimonial" smooth={true} duration={200}>
                                Testimonial
                            </Link>
                        </div>
                        <div className='button1'>
                            <Link to="contact" smooth={true} duration={200}>
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className={`left ${menuOpen ? 'clicked' : ''} ${isScrolled ? 'scrolled' : ''}`} onClick={toggleMenu}>
                        <i className={menuOpen ? 'fa fa-times' : 'fa fa-bars'}></i>
                    </div>
                    {/* Menu */}
                    <div className={`menu ${menuOpen ? 'show' : 'notshow'} ${isScrolled ? 'scrolled' : ''}`}>
                        <ul>
                            <li><Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
                            <li><Link to="aboutme" smooth={true} duration={500} onClick={toggleMenu}>About Me</Link></li>
                            <li><Link to="portfolio" smooth={true} duration={500} onClick={toggleMenu}>My Portfolio</Link></li>
                            <li><Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>My Skills</Link></li>
                            <li><Link to="login" smooth={true} duration={500} onClick={toggleMenu}>Log In</Link></li>
                            <li><Link to="signin" smooth={true} duration={500} onClick={toggleMenu}>Sign In</Link></li>
                            <li><Link to="extras" smooth={true} duration={500} onClick={toggleMenu}>Extras</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
