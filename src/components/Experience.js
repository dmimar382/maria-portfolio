import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="section-heading text-center">
                <h2>experience</h2>
            </div>
            <div className="container">
                <div className="experience-content">
                    <div className="main-timeline">
                        <ul>
                            {/* Add your experience items here */}
                            <li>
                                <div className="single-timeline-box fix">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="experience-time text-right">
                                                <h2>01/2022 - 06/2023</h2>
                                                <h3>Instrument Engineer</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-offset-1 col-md-5">
                                            <div className="timeline">
                                                <div className="timeline-content">
                                                    <h4 className="title">
                                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                                        ExxonMobil
                                                    </h4>
                                                    <h5>Houston, TX</h5>
                                                    <p className="description">
                                                        • Lead development of onshore command center for 4 Guyana FPSOs that will reduce
                                                        operating costs and support remote operations and reliability.<br />
                                                        • Implemented R&D & robotics applications for plant optimization and automation to
                                                        decrease safety related incidents and increase capital gain from plant operation.<br />
                                                        • Supported plants through evaluating new instrumentation technology to increase plant
                                                        diagnostic and maintenance scheduling capability.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* Add more experience items as needed */}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
