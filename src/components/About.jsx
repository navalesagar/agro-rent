import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                    <div className="about-text glass">
                        <p>
                            I am a passionate Frontend Developer with a keen eye for design and detail.
                            My goal is to build scalable, efficient, and user-friendly web applications.
                            I constantly learn new technologies to stay ahead in the tech landscape.
                        </p>

                        <div className="education-section">
                            <h3>Education</h3>
                            <div className="edu-card">
                                <h4>Bachelor of Computer Applications (BCA)</h4>
                                <p className="edu-desc">
                                    Focused on software development, web technologies, and database management.
                                    Built a strong foundation in computer science principles.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Optional: Add an image here if requested later */}
                </div>
            </div>
        </section>
    );
};

export default About;
