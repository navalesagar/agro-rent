import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                alert('Message sent successfully!');
            } else {
                setStatus('error');
                alert(data.message || 'Something went wrong');
            }
        } catch (error) {
            setStatus('error');
            alert('Could not connect to the server. Please check if backend is running.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-container glass">
                    <div className="contact-form-wrapper">
                        <h3>Send Message</h3>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    <div className="contact-info">
                        <h3>Contact Info</h3>
                        <p>I am currently available for freelance work or full-time opportunities.</p>

                        <div className="info-item">
                            <span>Email:</span>
                            <a href="mailto:pruthviraj.bansode30@gmail.com">pruthviraj.bansode30@gmail.com</a>
                        </div>

                        <div className="info-item">
                            <span>Phone:</span>
                            <a href="tel:9970167977">9970167977</a>
                        </div>

                        <div className="info-item">
                            <span>Experience:</span>
                            <span>1 Year</span>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-btn">LinkedIn</a>
                            <a href="#" className="social-btn">GitHub</a>
                            <a href="#" className="social-btn">Twitter</a>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-logo-wrapper">
                            <img src="/logo.jpg" alt="Logo" className="footer-logo" />
                            <span className="footer-name">Pruthvi Bansode</span>
                        </div>
                        <p>© 2026 All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
