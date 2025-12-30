import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ onInquiryClick }) => {
  const [showCategories, setShowCategories] = useState(false);
  const [showContactEmail, setShowContactEmail] = useState(false);

  return (
    <nav className="horizontal-navbar">
      <div className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </div>

      <div
        className="nav-item"
        onMouseEnter={() => setShowCategories(true)}
        onMouseLeave={() => setShowCategories(false)}
      >
        <span className="nav-link">Products</span>
        {showCategories && (
          <ul className="dropdown-menu">
            <li><Link to="/category/mortise-lock">Mortise lock</Link></li>
            <li><Link to="/category/door-handle">Door handle</Link></li>
            <li><Link to="/category/knob">Knob</Link></li>
            <li><Link to="/category/telescopic-channel">Telescopic channel</Link></li>
            <li><Link to="/category/hinges">Hinges</Link></li>
            <li><Link to="/category/smart-locks">Smart Locks</Link></li>
            <li>
              <Link to="/category/cabinet-handle" style={{ display: 'flex', justifyContent: 'space-between' }}>
                Cabinet handle <span>▸</span>
              </Link>
              <ul className="submenu">
                <li><Link to="/category/cabinet-handle/concealed">Concealed Handle</Link></li>
                <li><Link to="/category/cabinet-handle/aluminium">Aluminium Series</Link></li>
                <li><Link to="/category/cabinet-handle/zinc">Zinc Series</Link></li>
                <li><Link to="/category/cabinet-handle/stainless">Stainless Steel Handles</Link></li>
              </ul>
            </li>
          </ul>
        )}
      </div>

      <div className="nav-item">
        <Link to="/downloads" className="nav-link">Downloads</Link>
      </div>

      <div className="nav-item">
        <Link to="/#career" className="nav-link">Career</Link>
      </div>

      <div
        className="nav-item"
        onMouseEnter={() => setShowContactEmail(true)}
        onMouseLeave={() => setShowContactEmail(false)}
      >
        <Link to="/#contact" className="nav-link">Contact</Link>
        {showContactEmail && (
          <div className="dropdown-menu contact-info">
            connectservice.helpdesk@gmail.com
          </div>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
