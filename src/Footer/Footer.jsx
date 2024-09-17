import React, { useEffect } from 'react'
import Image from '../Images/Image.png'
import './Footer.css'

const Footer = () => {

    useEffect(() => {
        const revealElements = document.querySelectorAll('.footer .bottom .input, .input .a a, .Left .logo, .Left .little__text p, .middle .middle1 h1, .middle .middle1 p, .down .right .infos .location ion-icon, .down .right .infos .phone ion-icon, .down .right .infos .mail ion-icon, .down .right .infos .location h1, .down .right .infos .phone h1, .down .right .infos .mail h1, .conclusion h1');
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active'); // Retire la classe si l'élément sort du viewport
                }
            });
        });
    
        revealElements.forEach(el => {
            observer.observe(el);
        });
    
        return () => {
            revealElements.forEach(el => {
                observer.unobserve(el);
            });
        };
      }, []);

  return (
    <section className='footer'>
        <div className="bottom">
            <div className="input">
                <ion-icon name='mail'></ion-icon>
                <input type='email' placeholder='Your Email' />
                <div className="a">
                    <a href='#'>SUBSCRIBE</a>
                </div>
            </div>
        </div>

        <div className="down">
            <div className='Left'>
                <div className="logo">
                    <img src={Image} alt='' />
                </div>
                <div className="little__text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur sunt maxime culpa excepturi porro earum unde repellendus quis hic?</p>
                </div>
                <div className="icons">
                    <ion-icon name="logo-youtube"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-github"></ion-icon>
                    <ion-icon name="logo-google"></ion-icon>
                </div>
            </div>

            <div className="middle">
                <div className="middle1">
                    <h1>Projects</h1>
                    <p>Web Design</p>
                    <p>Application</p>
                    <p>Mobile App</p>
                    <p>Content Creator</p>
                </div>
                <div className="middle1">
                    <h1>Company</h1>
                    <p>How we work?</p>
                    <p>Capital</p>
                    <p>Security</p>
                    <p>Selling</p>
                </div>
                <div className="middle1">
                    <h1>Movement</h1>
                    <p>Movement</p>
                    <p>Support us</p>
                    <p>Pricing</p>
                    <p>Renting</p>
                </div>
                <div className="middle1">
                    <h1>Help</h1>
                    <p>Privacy</p>
                    <p>Condition</p>
                    <p>Blog</p>
                    <p>FAQs</p>
                </div>
            </div>

            <div className="right">
                <div className='infos'>
                    <div className="location">
                        <ion-icon name="location"></ion-icon>
                        <h1>Yaounde - Cameroon</h1>
                    </div>
                    <div className="phone">
                        <ion-icon name="call"></ion-icon>
                        <h1>+237 6 78 11 00 14</h1>
                    </div>
                    <div className="mail">
                        <ion-icon name="mail-unread"></ion-icon>
                        <h1>sighompierre1@gmail.com</h1>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="conclusion">
            <h1>Copyright @ 2024. All Rights Reserved.</h1>
        </div>
    </section>
  )
}

export default Footer