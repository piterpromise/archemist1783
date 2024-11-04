import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import Video from '../Images/Innovation3.mp4'
import '../Home/Home.css'

const Render = () => {

    // Fonction pour gérer le reveal-on-scroll
    useEffect(() => {
        const revealElements = document.querySelectorAll('.text-1, .text-2, .text-3, .text-4, .icons, .Home .Right video, .Home .Left a');

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
        <div className='Home' id='home'>
            <div className="global">
                <div className='Right'>
                    <video src={Video} autoPlay={true} loop={true} muted={true} />
                </div>
                <div className='Left'>
                    <div className="text-1">Hello, my name is</div>
                    <div className="text-2">PETER PROMISE</div>
                    <div className="text-3">And I'm a<span><Typewriter options={{ strings: [" Web Designer.", " Android Developer.", " Mobile Developer.", " Web Master.", " UI/UX Designer."], autoStart: true, loop: true, delay: 100, }} /></span></div>
                    <div className="text-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Non illum neque velit doloribus enim sed! Itaque, unde adipisci quos 
                            suscipit omnis mollitia ipsa at tempora facere vitae? Numquam, natus aut?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Non illum neque velit doloribus enim sed! Itaque, unde adipisci quos 
                            suscipit omnis mollitia ipsa at tempora facere vitae? Numquam, natus aut?
                        </p>
                    </div>
                    <a href='/signin'>
                        Hire me! <i className='fa fa-arrow-right i1'></i>
                    </a>
                    <div className='icons'>
                        <a href='https://x.com/SighomP'><i className='fa fa-twitter'></i></a>
                        <a href='https://studio.youtube.com/channel/UCMJCo0nakdHK_f_tMPJWVzA/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D'><i className='fa fa-youtube'></i></a>
                        <a href='https://github.com/Archemist1783/Archemist1783.github.io'><i className='fa fa-github'></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Render
