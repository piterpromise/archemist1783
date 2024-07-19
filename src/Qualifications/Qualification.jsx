import React, { useState } from 'react'
import './Qualification.css'

const Resume = () => {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
    return(
        <section className="qualification section">
            <div className="title">
                <h1>Qualifications</h1>
                <span className="substitle">My Personal Journey</span>
            </div>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__buttons qualification__active button--flex" : "qualification__buttons button--flex"} onClick={() => toggleTab(1)}>
                        <i className='fa fa-graduation-cap qualification__active qualification__icon'></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__buttons qualification__active button--flex" : "qualification__buttons button--flex"} onClick={() => toggleTab(2)}>
                        <i className='fa fa-briefcase qualification__icon'></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>2nd Year University</h3>
                                <span className="qualification__substitle">Bafoussam - Cameroon</span>
                                <div className="qualification__calendar">
                                    <i className="fa fa-calendar"></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>Fresher - University</h3>
                                <span className="qualification__substitle">Yaounde - Cameroon</span>
                                <div className="qualification__calendar">
                                    <i className="fa fa-calendar"></i> 2021 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>GBHS - T<sub>TI</sub></h3>
                                <span className="qualification__substitle">Bafoussam - Cameroon</span>
                                <div className="qualification__calendar">
                                    <i className="fa fa-calendar"></i> 2019 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>GBHS - P<sub>TI</sub></h3>
                                <span className="qualification__substitle">Bafoussam - Cameroon</span>
                                <div className="qualification__calendar">
                                    <i className="fa fa-calendar"></i> 2018 - 2019
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>Product Designer</h3>
                                <span className="qualification__substitle">Yaounde - Cameroon</span>
                                <div className="qualification__calendar">
                                    <i className="fa fa-calendar"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>UX Designer</h3>
                                <span className="qualification__substitle">Yaounde - Cameroon</span>
                                <div className="qualification__calendar">
                                    <i className="fa fa-calendar"></i> 2020 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>Web Designer</h3>
                                <span className="qualification__substitle">Freelance - Cameroon</span>
                                <div className="qualification__calendar">
                                    <i className="fa fa-calendar"></i> 2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;