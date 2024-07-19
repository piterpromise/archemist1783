import React from 'react'
import '../About/About.css'
import About1 from '../Images/about1.jpg'
import About2 from '../Images/about2.jpg'
import About3 from '../Images/testimonial2.jpg'
import About4 from '../Images/testimonial1.jpg'
import About5 from '../Images/testimonial3.jpeg'
import About6 from '../Images/testimonial4.jpeg'

const About = () => {

return (
    <div className='About'>
        <div className='aboutme'>
            <h1>Who I am</h1>
            <span className='span'>About I</span>
         </div>
         <div class="container">
            <div class="card__container">
               <article class="card__article">
                  <img src={About1} alt="image" class="card__img" />

                  <div class="card__data">
                     <span class="card__description">Vancouver Mountains, Canada</span>
                     <h2 class="card__title">The Great Path</h2>
                     <a href="#" class="card__button">Read More</a>
                  </div>
               </article>

               <article class="card__article">
                  <img src={About2} alt="image" class="card__img" />

                  <div class="card__data">
                     <span class="card__description">Poon Hill, Nepal</span>
                     <h2 class="card__title">Starry Night</h2>
                     <a href="#" class="card__button">Read More</a>
                  </div>
               </article>

               <article class="card__article">
                  <img src={About3} alt="image" class="card__img" />

                  <div class="card__data">
                     <span class="card__description">Bojcin Forest, Serbia</span>
                     <h2 class="card__title">Path Of Peace</h2>
                     <a href="#" class="card__button">Read More</a>
                  </div>
               </article>
            </div>
         </div>

         <div class="container2">
            <div class="card__container">
               <article class="card__article">
                  <img src={About4} alt="image" class="card__img" />

                  <div class="card__data">
                     <span class="card__description">Vancouver Mountains, Canada</span>
                     <h2 class="card__title">The Great Path</h2>
                     <a href="#" class="card__button">Read More</a>
                  </div>
               </article>

               <article class="card__article">
                  <img src={About5} alt="image" class="card__img" />

                  <div class="card__data">
                     <span class="card__description">Poon Hill, Nepal</span>
                     <h2 class="card__title">Starry Night</h2>
                     <a href="#" class="card__button">Read More</a>
                  </div>
               </article>

               <article class="card__article">
                  <img src={About6} alt="image" class="card__img" />

                  <div class="card__data">
                     <span class="card__description">Bojcin Forest, Serbia</span>
                     <h2 class="card__title">Path Of Peace</h2>
                     <a href="#" class="card__button">Read More</a>
                  </div>
               </article>
            </div>
         </div>
    </div>
  )
}

export default About
