import React, { useEffect } from 'react'
import '../About/About.css'
import About1 from '../Images/about1.jpg'
import About2 from '../Images/about2.jpg'
import About3 from '../Images/testimonial2.jpg'
import About4 from '../Images/testimonial1.jpg'
import About5 from '../Images/testimonial3.jpeg'
import About6 from '../Images/testimonial4.jpeg'

const About = () => {
    
    // Fonction pour gérer le reveal-on-scroll
    useEffect(() => {
        const revealElements = document.querySelectorAll('.card__article, .About .aboutme');

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
        <div className='About' id='aboutme'>
            <div className='aboutme'>
                <h1>Who I am</h1>
                <span className='span'>About Me</span>
            </div>
            <div className="container">
                <div className="card__container">
                    <article className="card__article">
                        <img src={About1} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Vancouver Mountains, Canada</span>
                            <h2 className="card__title">The Great Path</h2>
                            <a href="#" className="card__button">Read More</a>
                        </div>
                    </article>

                    <article className="card__article">
                        <img src={About2} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Poon Hill, Nepal</span>
                            <h2 className="card__title">Starry Night</h2>
                            <a href="#" className="card__button">Read More</a>
                        </div>
                    </article>

                    <article className="card__article">
                        <img src={About3} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Bojcin Forest, Serbia</span>
                            <h2 className="card__title">Path Of Peace</h2>
                            <a href="#" className="card__button">Read More</a>
                        </div>
                    </article>

                    <article className="card__article">
                        <img src={About4} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Vancouver Mountains, Canada</span>
                            <h2 className="card__title">The Great Path</h2>
                            <a href="#" className="card__button">Read More</a>
                        </div>
                    </article>

                    <article className="card__article">
                        <img src={About5} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Poon Hill, Nepal</span>
                            <h2 className="card__title">Starry Night</h2>
                            <a href="#" className="card__button">Read More</a>
                        </div>
                    </article>

                    <article className="card__article">
                        <img src={About6} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Bojcin Forest, Serbia</span>
                            <h2 className="card__title">Path Of Peace</h2>
                            <a href="#" className="card__button">Read More</a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default About;
