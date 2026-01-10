import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    Hi, I'm <span className="highlight">Pruthviraj Bansode</span>
                </h1>
                <h2 className="hero-role">Frontend Developer</h2>
                <p className="hero-bio">
                    I build pixel-perfect, engaging, and accessible digital experiences.
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Contact Me</a>
                    <a href="#about" className="btn btn-secondary">About Me</a>
                </div>
            </div>
            <div className="hero-visuals">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
        </section>
    );
};

export default Hero;
