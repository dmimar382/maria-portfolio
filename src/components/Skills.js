import React from 'react';
import resumeData from '../styles/data/resumeData.json';


const Skills = ({ topSkills, otherSkills }) => {
    return (
        <section id="skills" className="skills">
            <div className="skills-content">
                <div className="section-heading text-center">
                    <h2>Skills</h2>
                </div>
                <div className="skills-container">
                    <div className="skills-category">
                        <h3>Top Skills</h3>
                        <div className="skills-list">
                            {topSkills.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skills-category">
                        <h3>Other Skills</h3>
                        <div className="skills-list">
                            {otherSkills.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const defaultSkills = {
    topSkills: resumeData.technical_skills.slice(0, 4),
    otherSkills: resumeData.technical_skills.slice(4),
};

Skills.defaultProps = defaultSkills;

export default Skills;