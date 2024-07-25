import React from 'react';
import profileImage from '../styles/images/about/profile_image_1.jpg';

const About = () => {
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
                                <img src={profileImage}  alt="profile_image" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-about-txt">
                                <h3>
                                    I'm a software developer who finds joy in combining creativity with practicality. With a Bachelor's in Computer Engineering from Texas A&M University and a backend software development certification from Codecademy, I've honed my skills in software development.
                                </h3>
                                <p>
                                    My approach to development is rooted in problem understanding and a keen sense of organization. Although I'm relatively new to the field, my background as an electrical engineer equips me with a detail-oriented mindset.
                                    <br /><br />
                                    While my portfolio is in its early stages, I'm excited to embark on this journey, aiming to create efficient and user-friendly software solutions. Thank you for visiting, and I look forward to sharing my growth and future projects with you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
