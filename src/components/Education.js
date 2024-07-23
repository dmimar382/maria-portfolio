import React from 'react';
import educationImage from '../styles/images/education/portfolio-education.jpg';

const Education = () => {
    return (
        <section id="education" class="education">
			
            <div class="section-heading text-center">
            <h2>Education</h2>
            </div>
        
            <div class="container">
                <div class = "row">
                    <div class="col-sm-offset-1 col-sm-5">
                        <div class="single-education-img">
                            <img src={educationImage} alt="Education Image"></img>
                        </div>
                    </div>

                    <div class = "col-sm-6">
                        <h2>Texas A&M University</h2>
                        <h2>B.S. Computer Engineering</h2>
                        <p>
                            At Texas A&M, I thrived academically with a 3.96 GPA and actively participated in enriching extracurricular experiences. One standout moment was my participation in the <a href = "https://engineering.tamu.edu/news/2019/04/spacecraft-offers-up-virtual-reality-challenge-at-south-by-southwest-2019.html" target="_blank">SpaceCRAFT Exploration Challenge</a> during South by Southwest (SXSW) 2019. In this competition, I collaborated with a diverse group of students to program a VR robot using AI to rescue an astronaut stranded on a distant planet.
                            Our team, Team ECENtric, achieved a remarkable third-place finish. This hands-on engineering experience not only honed my technical skills but also emphasized the importance of teamwork and perseverance.
                            This competition was a turning point for me, making me realize the significance and power of programming. It was here that I decided to pursue further studies in this direction. 
                        </p>
                    </div>
                </div>
            </div>  
      </section>
    );
};

export default Education;
