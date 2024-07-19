import React from 'react'
import './Testimonial.css'
import { Data } from './data'
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

const Testimonial = () => {
  return (
    <section className="testimonial">
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
                spaceBetween: 50,
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
          <img src={slide_image_1} alt="slide_image" />
          <h3>Richel Kembou</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
          <h3>Laetitia Chigen</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
          <h3>Arold Kemche</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
          <h3>Dilane Lefakong</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
          <h3>Valere Nkouanang</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
          <h3>Suzy Audrey</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
          <h3>Frank Kenfack</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
          <h3>Herman Edu</h3>
          <p><i class="fa fa-quote-left" aria-hidden="true"></i>This Guy is efficient! He's one of the best of his generation.<i class="fa fa-quote-right" aria-hidden="true"></i></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
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
