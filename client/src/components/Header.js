import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Sidebar from './Sidebar';
import logo from '../assets/connectlockslogo.png';
/* Ensure Home.css is imported somewhere or here for styles */
import './Home.css';

const Header = () => {
    const [selectedState, setSelectedState] = useState(localStorage.getItem('state') || '');
    const [selectedCity, setSelectedCity] = useState(localStorage.getItem('city') || '');

    const stateCityMap = {
        Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'other'],
        Karnataka: ['Bangalore', 'Mysore', 'other'],
        TamilNadu: ['Chennai', 'Coimbatore', 'other'],
        Delhi: ['New Delhi'],
        Gujarat: ['Ahmedabad', 'Surat', 'other'],
        Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Chaibasa', 'Daltonganj', 'Phusro', 'Gumla', 'Lohardaga', 'Sahibganj', 'Simdega', 'Latehar', 'Pakur', 'Godda', 'Jhumri Tilaiya', 'other'],
        Bihar: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga', 'Purnia', 'Ara', 'Begusarai', 'Katihar', 'Munger', 'Chhapra', 'Bihar Sharif', 'Hajipur', 'Siwan', 'Motihari', 'Sasaram', 'other']
    };

    const handleStateChange = (state) => {
        setSelectedState(state);
        setSelectedCity('');
        localStorage.setItem('state', state);
        localStorage.removeItem('city');
    };

    const handleCityChange = (city) => {
        setSelectedCity(city);
        localStorage.setItem('city', city);
    };

    return (
        <React.Fragment>
            <div className="info-bar">
                <div className="info-bar-left">
                    <div className="info-item"><FaEnvelope /> <span>connectservice.helpdesk@gmail.com</span></div>
                    <div className="info-item"><FaPhoneAlt /> <span>+91 8528826552</span></div>
                </div>
                <div className="info-bar-right">
                    <a href="https://www.instagram.com/connectlocks_india?igsh=OGgzemc1aXEzbHB4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/connect-locks-ba4418300?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaaGMfGrRTFOXraSOfXIMSw%3D%3D" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
            </div>
            <div className="top-bar">
                <div style={{ display: 'flex', alignItems: 'center' }}><Sidebar /></div>
                <div className="center-logo"><img src={logo} alt="Connect Locks Logo" className="top-logo-large" /></div>
                <div className="top-right" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="location-select">
                        <select value={selectedState} onChange={(e) => handleStateChange(e.target.value)}>
                            <option value="">Select State</option>
                            {Object.keys(stateCityMap).map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                        {selectedState && (
                            <select value={selectedCity} onChange={(e) => handleCityChange(e.target.value)}>
                                <option value="">Select City</option>
                                {stateCityMap[selectedState].map((city) => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
