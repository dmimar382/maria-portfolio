import React from 'react';
import resumeData from '../styles/download/resumeData.json';

const Education = () => {
    const { institution, degree, gpa } = resumeData.education;
    const certifications = resumeData.certifications || [];
    const relevantCoursework = resumeData.relevant_coursework || [];

    return (
        <section id="education" className="education">
            <div className="section-heading text-center">
                <h2>Education</h2>
            </div>
            <div className="container">
                <div className="certifications">
                    {certifications.map((cert, index) => (
                        <div key={index} className="cert-item">
                            <h4>{cert.name}</h4>
                            <p>{cert.issuer}</p>
                            <p className="date">{cert.date}</p>
                            <div className="cert-skills">
                                {cert.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="education-content">
                    <div className="education-info">
                        <h3>{degree}</h3>
                        <p>{institution}</p>
                        <p className="date">GPA: {gpa}</p>
                    </div>
                    <div className="relevant-coursework">
                        <div className="course-tags">
                            {relevantCoursework[0].courses.map((course, i) => (
                                <span key={i} className="course-tag">{course}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
