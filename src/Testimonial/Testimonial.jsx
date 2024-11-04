import React, { useEffect, useState } from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import slide_image_1 from '../Images/testimonial1.jpg'
import slide_image_2 from '../Images/testimonial2.jpg'
import slide_image_3 from '../Images/testimonial3.jpeg'
import slide_image_4 from '../Images/testimonial4.jpeg'
import slide_image_5 from '../Images/testimonial5.jpg'
import slide_image_6 from '../Images/testimonial6.jpg'
import slide_image_7 from '../Images/testimonial7.jpg'
import slide_image_8 from '../Images/testimonial8.jpeg'
import slide_image_9 from '../Images/testimonial9.jpg'
// Ajoute les autres images ici

const Testimonial = () => {

  useEffect(() => {
    const revealElements = document.querySelectorAll('.testimonial .title, .swiper-slide h3, .swiper-slide p, .swiper-slide i, .swiper-slide img, .slider-controler');

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

  // Fonction pour capturer la position du curseur et retourner les transformations
  const handleMouseMove = (e, index) => {
    const image = e.target;
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left; // Position x du curseur relative à l'image
    const y = e.clientY - rect.top;  // Position y du curseur relative à l'image

    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;

    const rotateX = ((y - halfHeight) / halfHeight) * 15; // Incline jusqu'à 15 degrés sur l'axe X
    const rotateY = ((x - halfWidth) / halfWidth) * -15;  // Incline jusqu'à 15 degrés sur l'axe Y

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  const handleMouseLeave = (e) => {
    const image = e.target;
    image.style.transform = 'rotateX(0deg) rotateY(0deg)'; // Réinitialise l'inclinaison quand la souris quitte l'image
  }

  return (
    <section className="testimonial" id='testimonial'>
      <div className='title'>
        <h1>Testimonial</h1>
        <span>My Clients says</span>
      </div>

      <Swiper
        className='slider_container'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        breakpoints={{
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1080: {
                slidesPerView: 3,
                spaceBetween: 80,
            },
        }}
        pagination={{ el: '.swiper-pagination', clickable: false }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        >
        <SwiperSlide>
          <img 
            src={slide_image_1} 
            alt="slide_image" 
            onMouseMove={(e) => handleMouseMove(e, 1)} 
            onMouseLeave={handleMouseLeave}
          />
          <h3>Richel Kembou</h3>
          <p><i className="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i className="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={slide_image_2} 
            alt="slide_image" 
            onMouseMove={(e) => handleMouseMove(e, 2)} 
            onMouseLeave={handleMouseLeave}
          />
          <h3>Laetitia Chigen</h3>
          <p><i className="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i className="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} 
            alt="slide_image" 
            onMouseMove={(e) => handleMouseMove(e, 3)} 
            onMouseLeave={handleMouseLeave}
          />
          <h3>Arold Kemche</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} 
            alt="slide_image" 
            onMouseMove={(e) => handleMouseMove(e, 4)} 
            onMouseLeave={handleMouseLeave}
          />
          <h3>Dilane Lefakong</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} 
            alt="slide_image" 
            onMouseMove={(e) => handleMouseMove(e, 5)} 
            onMouseLeave={handleMouseLeave}
          />
          <h3>Valere Nkouanang</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} 
            alt="slide_image" 
            onMouseMove={(e) => handleMouseMove(e, 6)} 
            onMouseLeave={handleMouseLeave}
          />
          <h3>Suzy Audrey</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} 
            alt="slide_image" 
            onMouseMove={(e) => handleMouseMove(e, 7)} 
            onMouseLeave={handleMouseLeave}
          />
          <h3>Frank Kenfack</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} 
            alt="slide_image" 
            onMouseMove={(e) => handleMouseMove(e, 8)} 
            onMouseLeave={handleMouseLeave}
          />
          <h3>Herman Edu</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} 
            alt="slide_image" 
            onMouseMove={(e) => handleMouseMove(e, 9)} 
            onMouseLeave={handleMouseLeave}
          />
          <h3>Jorex Hosny</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>

        <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  )
}

export default Testimonial
