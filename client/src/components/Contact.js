import React, { useState } from 'react';
import './Home.css';

const Contact = () => {
    // Basic form state (optional logic)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We will get back to you shortly.");
        // Implement actual submission logic here
    };

    return (
        <div id="contact" className="contact-section" style={{ backgroundColor: '#f5f5f5', padding: '60px 0' }}>
            <div className="contact-page-content" style={{ padding: '0 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center' }}>

                    {/* Contact Info Section */}
                    <div className="contact-info" style={{ flex: '1 1 500px', backgroundColor: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333' }}>Contact Us</h2>

                        <div style={{ marginBottom: '25px' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#555', marginBottom: '10px' }}>Head Office</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>Rawat Capstone A-902, Pune, Maharashtra 411060</p>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#555', marginBottom: '10px' }}>Contact</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}><strong>WhatsApp:</strong> +91-8528826552</p>
                            <p style={{ color: '#666', lineHeight: '1.6' }}><strong>Email:</strong> indiaconnectlocks@gmail.com</p>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#555', marginBottom: '10px' }}>Working Hours</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>Mon-Fri: 08:00 - 19:00</p>
                        </div>

                        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', fontSize: '0.95rem', color: '#777', lineHeight: '1.6' }}>
                            <p>We are one of the prominent manufacturers and suppliers of an extensive range of Hardware Fittings around the world. Customers from the furniture industry, dealers, joiners and cabinet makers, as well as architects, planners and builders all rely on Connect expertise and performance.</p>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="contact-form" style={{ flex: '1 1 400px', backgroundColor: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333' }}>Get In Touch</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: '500' }}>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name} onChange={handleChange} required
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: '500' }}>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone} onChange={handleChange} required
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: '500' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email} onChange={handleChange} required
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: '500' }}>Your Address</label>
                                <textarea
                                    name="address"
                                    rows="4"
                                    value={formData.address} onChange={handleChange}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', resize: 'vertical' }}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                style={{
                                    marginTop: '10px',
                                    padding: '15px',
                                    backgroundColor: 'black',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
                                onMouseOut={(e) => e.target.style.backgroundColor = 'black'}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
