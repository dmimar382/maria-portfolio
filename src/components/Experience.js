import React, { useEffect, useState } from 'react';
import experienceData from '../styles/download/resumeData.json';
import Skills from './Skills';  // Import the Skills component

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
  
    useEffect(() => {
      // Assuming experienceData is loaded correctly
      if (experienceData && experienceData.work_experience) {
        setExperiences(experienceData.work_experience);
      }
    }, []);
  
    return (
      <section id="experience" className="experience">
        <div className="experience-details">
            <Skills 
            topSkills={experienceData.technical_skills.slice(0, 4)} 
            otherSkills={experienceData.technical_skills.slice(4)} 
            />
          <div className="section-heading text-center">
            <h2>Experience</h2>
          </div>
          <div className="container">
            
            <div className="experience-content">
              <div className="row">
                <div className="col-sm-12">
                  <div className="main-timeline">
                    <ul>
                      {experiences.length > 0 ? (
                        experiences.map((experience, index) => (
                          <li key={index}>
                            <div className="single-timeline-box fix">
                              <div className="row">
                                <div className="col-md-5">
                                  <div className="experience-time text-right">
                                    <h2>{experience.dates}</h2>
                                    <h3>{experience.title}</h3>
                                  </div>
                                </div>
                                <div className="col-md-offset-1 col-md-5">
                                  <div className="timeline">
                                    <div className="timeline-content">
                                      <h4 className="title">
                                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                        {experience.company}
                                      </h4>
                                      <h5>{experience.location}</h5>
                                      <ul className="description">
                                        {experience.responsibilities.map((responsibility, i) => (
                                            <li key={i}>{responsibility}</li>
                                        ))}
                                        </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))
                      ) : (
                        <p>Loading experience data...</p>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;



