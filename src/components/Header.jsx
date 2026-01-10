import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header glass">
            <div className="container header-content">
                <a href="#home" className="logo-link">
                    <img src="/logo.jpg" alt="PB Logo" className="logo-img" />
                    <span className="logo-text">Pruthvi</span>
                </a>
                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </nav>
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
