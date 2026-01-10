import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'React.js', level: '90%' },
        { name: 'JavaScript (ES6+)', level: '85%' },
        { name: 'HTML5 & CSS3', level: '95%' },
        { name: 'Git & GitHub', level: '80%' },
        { name: 'Responsive Design', level: '90%' },
        { name: 'UI/UX Principles', level: '75%' }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card glass">
                            <div className="skill-info">
                                <h3>{skill.name}</h3>
                                <span>{skill.level}</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: skill.level }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
