import React from 'react';
import './Home.css';

const Career = () => {
    return (
        <div id="career" className="career-section" style={{ backgroundColor: '#fff', padding: '60px 0' }}>
            <div className="career-services-content" style={{ padding: '20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '60px', color: '#111' }}>Our Expertise</h1>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                        {/* Financial Card */}
                        <div style={{ padding: '40px', backgroundColor: '#f9f9f9', borderRadius: '15px', transition: 'transform 0.3s' }}>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#111', textTransform: 'uppercase', letterSpacing: '1px' }}>Financial</h2>
                            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
                                Dedicated to empowering clients with expert financial insights and tools to achieve their fiscal goals and enhance economic well-being.
                            </p>
                        </div>

                        {/* Consulting Card */}
                        <div style={{ padding: '40px', backgroundColor: '#f9f9f9', borderRadius: '15px', transition: 'transform 0.3s' }}>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#111', textTransform: 'uppercase', letterSpacing: '1px' }}>Consulting</h2>
                            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
                                Expert consulting tailored to your needs, fostering growth and efficiency across your operations.
                            </p>
                        </div>

                        {/* Marketing Card */}
                        <div style={{ padding: '40px', backgroundColor: '#f9f9f9', borderRadius: '15px', transition: 'transform 0.3s' }}>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#111', textTransform: 'uppercase', letterSpacing: '1px' }}>Marketing</h2>
                            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
                                Marketing reimagined—our service integrates modern tools with traditional strategies to create high-impact campaigns. Trust us to deliver professional results.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
