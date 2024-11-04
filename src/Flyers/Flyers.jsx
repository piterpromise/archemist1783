import React from 'react'
import Image1 from '../Images/yep.png'
import Image2 from '../Images/yup.png'
import './Flyers.css'

const Flyers = () => {
    return (
        <section className="flyers">
            <div className='header'>
                <img src={ Image1 } alt='' />
            </div>

            <div className="center">
                <div className="right_text">
                    <p>ACHETER VOS VETEMENTS POUR ENFANTS SUR SAVABUY !</p>
                </div>

                <div className="right__img">
                    <img src={ Image2 } alt='' />
                </div>
            </div>

            <div className="foot">
                <div className="left">
                    <div className="div1">
                        <ion-icon name="call"></ion-icon>
                        <h1>+237 6 78 11 00 14</h1>
                    </div>
                    <div className="div1">
                        <ion-icon name="location"></ion-icon>
                        <h1>Douala - cameroun</h1>
                    </div>
                    <div className="div1">
                        <ion-icon name="logo-tiktok"></ion-icon>
                        <h1>@Angoslouise</h1>
                    </div>
                </div>

                <div className="right">
                    <div className="box1">
                        <div className="logo">
                            <ion-icon name="logo-google-playstore"></ion-icon>
                        </div>
                        <div className="content">
                            <h1>Disponible sur</h1>
                            <h2>Google Play</h2>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="logo">
                            <ion-icon name="logo-apple"></ion-icon>
                        </div>
                        <div className="content">
                            <h1>Disponible sur</h1>
                            <h2>App Store</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Flyers