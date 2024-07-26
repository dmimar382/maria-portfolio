import React from 'react';
import profileImage from '../styles/images/about/profile_image_1.jpg';
import aboutData from '../styles/download/aboutData.json'; 

const About = () => {
    const descriptionArray = aboutData.about_me?.description || [];
    return (
        <section id="about" className="about">
            <div className="section-heading text-center">
                <h2>about me</h2>
            </div>
            <div className="container">
                <div className="about-content">
                    <div className="row">
                        <div className="col-sm-offset-1 col-sm-5">
                            <div className="single-about-img">
                                <img src={profileImage} alt="profile_image" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-about-txt">
                            {descriptionArray.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
