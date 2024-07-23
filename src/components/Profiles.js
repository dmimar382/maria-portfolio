// src/components/Profiles.js

import React from 'react';

const Profiles = () => {
    return (
        <section id="profiles" className="profiles">
            <div className="profiles-details">
                <div className="section-heading text-center">
                    <h2>profiles</h2>
                </div>
                <div className="container">
                    <div className="profiles-content">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="single-profile profile-no-border">
                                    <div className="profile-txt">
                                        <a href="https://github.com/dmimar382" target="_blank" rel="noopener noreferrer">
                                            <i className="flaticon-github-logo"></i>
                                        </a>
                                        <div className="profile-icon-name">github</div>
                                    </div>
                                    <div className="single-profile-overlay">
                                        <div className="profile-txt">
                                            <a href="https://github.com/dmimar382" target="_blank" rel="noopener noreferrer">
                                                <i className="flaticon-github-logo"></i>
                                            </a>
                                            <div className="profile-icon-name">github</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="single-profile profile-no-border">
                                    <div className="profile-txt">
                                        <a href="https://www.linkedin.com/in/maria-dmit/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin" style={{ fontSize: "36px" }}></i>
                                        </a>
                                        <div className="profile-icon-name">LinkedIn</div>
                                    </div>
                                    <div className="single-profile-overlay">
                                        <div className="profile-txt">
                                            <a href="https://www.linkedin.com/in/maria-dmit/" target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-linkedin" style={{ fontSize: "36px" }}></i>
                                            </a>
                                            <div className="profile-icon-name">LinkedIn</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profiles;
