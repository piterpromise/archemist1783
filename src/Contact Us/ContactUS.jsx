import React from 'react'
import'./ContactUs.css'

const ContactUS = () => {
  return (
    <section className='Contact section__section'>
        <div className="title">
            <h1>Contact</h1>
            <span className="substitle">Write us below</span>
        </div>
        <div className='container__container'>
            <div className='left'>
                <div className="title__left">
                    <h3>Contact Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Officia non id vero magni error autem voluptates eum exercitationem cumque tenetur eveniet eaque nesciunt 
                        reprehenderit ad a facere quisquam, atque impedit vel tempore doloribus! Illo facilis rem aliquid maxime optio incidunt hic, 
                        dolorum inventore! Voluptatum voluptate pariatur debitis quo sapiente illo. Praesentium nemo possimus, 
                        repellat voluptatem amet tempora molestias esse recusandae pariatur sunt sint, unde excepturi, accusamus ullam eligendi 
                        voluptate modi inventore deleniti dolorem nisi facilis error alias eveniet hic! Optio natus mollitia debitis architecto, 
                        itaque adipisci cupiditate corrupti cumque nihil sunt et corporis, iusto nostrum laudantium, veritatis quaerat eos totam voluptatem illo 
                        tempore ipsum numquam libero. Esse magnam maxime ullam eum repellendus labore autem tenetur quisquam, dignissimos exercitationem aspernatur 
                        repudiandae facere et, voluptatum reiciendis, doloremque officia. Vitae, beatae hic temporibus recusandae obcaecati nihil accusantium distinctio, 
                        facilis dolor aspernatur voluptatum ipsa fuga ea eos culpa, adipisci rerum impedit excepturi modi maxime? Minus sint minima reprehenderit hic quisquam. 
                        Numquam sit, eius doloribus sapiente atque quas et voluptatibus at culpa, quisquam voluptatem? Quasi harum quae atque molestias doloremque. Eos recusandae 
                        suscipit cupiditate nihil, vero eum perspiciatis nisi iure. Aspernatur eligendi commodi fugiat, 
                        non inventore possimus magnam reiciendis expedita, facere consequatur minima maiores blanditiis.
                    </p>
                </div>
                <div className="networks">
                    <h1>Our network</h1>
                    <div className="icons">
                        <ion-icon name="logo-snapchat"></ion-icon>
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-yahoo"></ion-icon>
                        <ion-icon name="logo-google"></ion-icon>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className='body'>
                    <div className="title__right">
                        <h1>Your Message</h1>
                    </div>
                    <div className='zones'>
                        <div className='name'>
                            <ion-icon name="people"></ion-icon><input type='text' name='name' placeholder='Your Name' />
                        </div>
                        <div className='name'>
                            <ion-icon name="mail"></ion-icon><input type='email' name='name' placeholder='Enter your Email' />
                        </div>
                        <div className='name2'>
                            <textarea type='textarea' name='name' placeholder='Your Message' />
                        </div>
                    </div>
                    <div className='button'>
                        <a href='#'>Send Message!<ion-icon name="arrow-forward-outline"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUS