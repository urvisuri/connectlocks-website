import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Home.css';
import Sidebar from './Sidebar';

import logo from '../assets/connectlockslogo.png';
import careerGrid1 from '../assets/career_grid_1.png';
import careerGrid2 from '../assets/career_grid_2.png';
import careerGrid3 from '../assets/career_grid_3.png';
import ImageSlider from './ImageSlider';
import concealedCloser from '../assets/concealed_door_closer_blue.png';
import aboutUsImg from '../assets/about_us_circle_new.png';

import secureSlide1New from '../assets/secure_slide_1_new.jpg';
import secureSlide2New from '../assets/secure_slide_2_new.jpg';
import serviceHardware from '../assets/service_hardware_new.png';
import serviceKey from '../assets/service_key_new.jpg';
import serviceAssembly from '../assets/service_assembly_new.jpg';
import architectureHardware1 from '../assets/architecture_hardware_1.png';
import architectureHardware2 from '../assets/architecture_hardware_2.png';
import kitchenWardrobe1 from '../assets/kitchen_wardrobe_1.jpg';
import kitchenWardrobe2 from '../assets/kitchen_wardrobe_2.png';

const stateCityMap = {
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'other'],
  Karnataka: ['Bangalore', 'Mysore', 'other'],
  TamilNadu: ['Chennai', 'Coimbatore', 'other'],
  Delhi: ['New Delhi'],
  Gujarat: ['Ahmedabad', 'Surat', 'other'],
  Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Chaibasa', 'Daltonganj', 'Phusro', 'Gumla', 'Lohardaga', 'Sahibganj', 'Simdega', 'Latehar', 'Pakur', 'Godda', 'Jhumri Tilaiya', 'other'],
  Bihar: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga', 'Purnia', 'Ara', 'Begusarai', 'Katihar', 'Munger', 'Chhapra', 'Bihar Sharif', 'Hajipur', 'Siwan', 'Motihari', 'Sasaram', 'other']
};

const Home = () => {
  const [selectedState, setSelectedState] = useState(localStorage.getItem('state') || '');
  const [selectedCity, setSelectedCity] = useState(localStorage.getItem('city') || '');
  const [showMore, setShowMore] = useState(false);

  // Secure Space Slideshow Logic
  const [currentSecureIndex, setCurrentSecureIndex] = useState(0);
  const secureSlides = [
    {
      title: "Smart Accessories & Integrations",
      description: "Smart lock accessories and integrations enhance the overall security ecosystem. This includes gateways, sensors, and software integrations that allow remote connectivity, automation, and compatibility with smart home systems for a complete intelligent security solution.",
      image: secureSlide1New
    },
    {
      title: "Smart Glass Door Lock",
      description: "Our Smart Glass Door Locks are designed to combine style, comfort, and durability. Crafted using high-quality materials, they provide a smooth grip and long-lasting performance for everyday use. Available in modern, classic, and minimalist designs, these handles enhance the overall appearance of any door.",
      image: secureSlide2New
    }
  ];



  // Architecture Hardware Slideshow Logic
  const [currentHardwareIndex, setCurrentHardwareIndex] = useState(0);

  useEffect(() => {
    const hardwareImages = [concealedCloser, architectureHardware1, architectureHardware2];
    const hardwareTimer = setInterval(() => {
      setCurrentHardwareIndex(prev => (prev + 1) % hardwareImages.length);
    }, 1500);
    return () => clearInterval(hardwareTimer);
  }, []);

  // Kitchen & Wardrobe Slideshow Logic
  const [currentKitchenIndex, setCurrentKitchenIndex] = useState(0);

  useEffect(() => {
    const kitchenImages = [kitchenWardrobe1, kitchenWardrobe2];
    const kitchenTimer = setInterval(() => {
      setCurrentKitchenIndex(prev => (prev + 1) % kitchenImages.length);
    }, 1500);
    return () => clearInterval(kitchenTimer);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('state') && !localStorage.getItem('city')) {
      fetch('https://ipapi.co/json/')
        .then((res) => res.json())
        .then((data) => {
          const detectedState = data.region;
          const detectedCity = data.city;
          if (stateCityMap[detectedState]) {
            const cityList = stateCityMap[detectedState];
            const cityToSet = cityList.includes(detectedCity) ? detectedCity : cityList[0];
            setSelectedState(detectedState);
            setSelectedCity(cityToSet);
            localStorage.setItem('state', detectedState);
            localStorage.setItem('city', cityToSet);
          }
        })
        .catch((err) => console.error('IP location fetch failed:', err));
    }
  }, []);

  // Secure Space Slideshow Interval
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSecureIndex(prev => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(slideTimer);
  }, []);

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

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="home-container">
      <div className="info-bar">
        <div className="info-bar-left">
          <div className="info-item">
            <FaEnvelope /> <span>connectservice.helpdesk@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhoneAlt /> <span>+91 8528826552</span>
          </div>
        </div>
        <div className="info-bar-right">
          <a href="https://www.instagram.com/connectlocks_india?igsh=OGgzemc1aXEzbHB4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/connect-locks-ba4418300?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaaGMfGrRTFOXraSOfXIMSw%3D%3D" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
      <div className="top-bar">
        {/* Left Side: Navigation (Moved from Right) */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Sidebar />
        </div>

        {/* Center: Logo */}
        <div className="center-logo">
          <img src={logo} alt="Connect Locks Logo" className="top-logo-large" />
        </div>

        {/* Right Side: Location */}
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

      <ImageSlider />

      <div className="company-intro">
        <div className="about-content-wrapper">
          <div className="about-image-container">
            <img src={aboutUsImg} alt="About Connect Locks" className="about-image" />
          </div>
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              ConnectLocks is a premier destination for modern, stylish, and high-security locking solutions,
              offering a curated selection of both smart and mechanical locks tailored to residential, commercial,
              and industrial spaces. Our product range includes smart locks, mortise locks, door handles, knobs,
              telescopic channels, auto hinges, and cabinet handles—all crafted to blend cutting-edge functionality with
              sophisticated design. Whether it’s a high-tech smart lock for your front door or a finely finished mortise handle
              for your office, every product we offer reflects design precision, durability, and uncompromising quality.
              We serve clients across residential, commercial, and institutional segments—bringing secure innovations
              right to your doorstep and delivering not just products, but peace of mind.
            </p>
            {showMore && (
              <p className="read-more-content">
                At ConnectLocks, we don’t just sell locks—we deliver security, sophistication, and seamless access.
                With a mission to redefine how the world experiences locking systems, we combine modern technology
                with architectural aesthetics to enhance every environment we serve. Each product undergoes stringent
                quality checks to ensure performance that lasts, while our designs complement modern spaces with both
                elegance and strength. Our Pan-India presence ensures that whether you're in a metro city or a remote town,
                you get timely service and support. With a customer-first approach, we’re committed to transparency, trust,
                and long-term relationships—making ConnectLocks a brand you can truly rely on.
              </p>
            )}
            <button className="read-more-btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Read Less ▲' : 'Read More ▼'}
            </button>
          </div>
        </div>
      </div>

      {/* Video Section - Add your video here */}
      <div className="video-section">
        <div className="video-screen-container">
          <div className="video-screen">
            {/* 
                INSTRUCTIONS: 
                Uncomment the video tag below and add your video source path.
                Example: import myVideo from '../assets/my-video.mp4';
                src={myVideo}
             */}

            {/* <video controls width="100%" height="100%" autoPlay muted loop>
                <source src="/assets/your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
             </video> */}

            <video controls width="100%" height="100%" autoPlay muted loop playsInline>
              <source src="/assets/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="secure-space-section">
        <h2 className="secure-heading">Secure Your Space</h2>
        <div className="secure-content">
          <div className="secure-text">
            <h3>{secureSlides[currentSecureIndex].title}</h3>
            <p>{secureSlides[currentSecureIndex].description}</p>
          </div>
          <div className="secure-phone-container">
            <div className="iphone-frame">
              <div className="iphone-notch"></div>
              <img
                key={currentSecureIndex}
                src={secureSlides[currentSecureIndex].image}
                alt={secureSlides[currentSecureIndex].title}
                className="secure-slide-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="service-section">
        <h2 className="service-heading">Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-img-container">
              <img src={serviceHardware} alt="Custom Hardware Fittings" className="service-img" />
            </div>
            <h3>Custom Hardware Fittings</h3>
            <p>Offering tailored hardware fitting solutions to meet the unique requirements of your projects.</p>
          </div>
          <div className="service-card">
            <div className="service-img-container">
              <img src={serviceKey} alt="Key Duplication" className="service-img" />
            </div>
            <h3>Key Duplication</h3>
            <p>Our key duplication service provides accurately crafted duplicate keys for all types of locks.</p>
          </div>
          <div className="service-card">
            <div className="service-img-container">
              <img src={serviceAssembly} alt="Door Handle and Knob Assembly" className="service-img" />
            </div>
            <h3>Door Handle and Knob Assembly</h3>
            <p>High-quality assembly service for standard and custom door handles and knobs.</p>
          </div>
        </div>
      </div>

      <div className="photo-section">
        <div className="photo-content">
          <div className="photo-text">
            <h2>Connect Locks Architecture Hardware</h2>
            <p>
              At Connect, we bring together sophisticated architectural hardware and smart locking solutions designed to complement contemporary spaces. Every fitting is developed with careful attention to detail, balancing elegant design with robust engineering. Our range showcases innovative craftsmanship and dependable performance, ensuring that each product enhances the overall aesthetic while delivering reliable, long-term functionality. By seamlessly merging form, function, and technology, Connect offers architectural hardware solutions that elevate design standards and provide confidence, convenience, and durability in everyday use.
            </p>
          </div>
          <img
            key={currentHardwareIndex}
            src={[concealedCloser, architectureHardware1, architectureHardware2][currentHardwareIndex]}
            alt="Architecture Hardware"
            className="photo-image"
          />
        </div>
      </div>

      {/* Kitchen & Wardrobe Section */}
      <div className="photo-section" style={{ backgroundColor: '#fff' }}>
        <div className="photo-content">
          <img
            key={currentKitchenIndex}
            src={[kitchenWardrobe1, kitchenWardrobe2][currentKitchenIndex]}
            alt="Kitchen & Wardrobe Fittings"
            className="photo-image"
            style={{ marginRight: '0', marginLeft: '0' }} // Reset margins if needed
          />
          <div className="photo-text">
            <h2>We also have Kitchen & Wardrobe Fittings</h2>
            <p>
              Experience the perfect harmony of design and functionality with Connect. Our premium range of kitchen and wardrobe fittings is carefully crafted to maximise space, enhance organisation, and simplify everyday use. Designed with innovation, precision, and practicality at the core, Connect fittings deliver smooth performance, long-lasting durability, and refined aesthetics. From smart storage solutions to elegant furniture hardware, every product from Connect is created to transform kitchens and wardrobes into well-structured, stylish spaces that reflect modern living while offering superior comfort and efficiency.
            </p>
          </div>
        </div>
      </div>

      <div id="career" className="career-section">
        <h2 className="career-title">Career</h2>
        <div className="career-grid-layout">
          <div className="career-item image-item">
            <img src={careerGrid1} alt="Financial" />
          </div>
          <div className="career-item text-item">
            <h3>FINANCIAL</h3>
            <p>Dedicated to empowering clients with expert financial insights and tools to achieve their fiscal goals and enhance economic well-being.</p>
            <button className="career-more-btn">...</button>
          </div>
          <div className="career-item image-item">
            <img src={careerGrid2} alt="Consulting" />
          </div>

          <div className="career-item text-item">
            <h3>CONSULTING</h3>
            <p>Expert consulting tailored to your needs, fostering growth and efficiency across your operations.</p>
          </div>
          <div className="career-item image-item">
            <img src={careerGrid3} alt="Marketing" />
          </div>
          <div className="career-item text-item">
            <h3>MARKETING</h3>
            <p>Marketing reimagined—our service integrates modern tools with traditional strategies to create high-impact campaigns. Trust us to deliver professional results.</p>
            <button className="career-more-btn">...</button>
          </div>
        </div>
      </div>

      <div id="contact" className="contact-info-section">
        <h2 className="contact-heading">Contact Us</h2>
        <div className="contact-wrapper">
          {/* Left Side: Content & Details */}
          <div className="contact-left">
            <div className="contact-details-list">
              <div className="contact-item">
                <strong>Head Office</strong>
                <p>Rawat Capstone A-902, Pune, Maharashtra 411060</p>
              </div>
              <div className="contact-item">
                <strong>Contact</strong>
                <p>WhatsApp: +91-8528826552</p>
                <p>Email: indiaconnectlocks@gmail.com</p>
              </div>
              <div className="contact-item">
                <strong>Working Hours</strong>
                <p>Mon-Fri: 08:00 - 19:00</p>
              </div>
            </div>
            <p className="contact-description-text">
              We are one of the prominent manufacturers and suppliers of an extensive range of Hardware Fittings around the world. Customers from the furniture industry, dealers, joiners and cabinet makers, as well as architects, planners and builders all rely on Connect expertise and performance.
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const phone = formData.get('phone');
              const email = formData.get('email');
              const address = formData.get('address');
              const message = formData.get('message');

              const mailBody = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AAddress: ${address}%0D%0A%0D%0AMessage:%0D%0A${message}`;
              window.location.href = `mailto:indiaconnectlocks@gmail.com?subject=New Website Inquiry&body=${mailBody}`;
            }}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="text" name="address" placeholder="Your Address" />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="map-section">
        <div className="map-container">
          <iframe
            title="Google Map Rawat Capstone"
            width="100%"
            height="450"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&height=450&hl=en&q=Rawat%20Capstone%20Undri%20Pune&t=&z=15&ie=UTF8&iwloc=B&output=embed"
          ></iframe>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rawat+Capstone+Undri+Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="map-details-card"
          >
            <div className="map-card-content">
              <h3>Rawat Capstone</h3>
              <p className="hindi-text">रावत कॅपस्टोन</p>
              <div className="rating-row">
                <span className="rating-score">4.2</span>
                <span className="stars">★★★★☆</span>
                <span className="review-count">(120)</span>
              </div>
              <p className="business-type">Home builder</p>
              <div className="map-action">View larger map</div>
            </div>
          </a>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Head Office :</h3>
            <p>A/902 Rawat Capstone, Undri,</p>
            <p>Pune, Maharashtra 411060</p>
          </div>

          <div className="footer-column">
            <h3>Zonal Office:</h3>
            <p>Natraj ,Govind Nagar, Uttar</p>
            <p>Pradesh 208006</p>
          </div>

          <div className="footer-column">
            <h3>Regional Office:</h3>
            <p>Gujarat, India 36005</p>
            <p>Connect Locks</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Connect Locks</p>
          <p>Copyright © 2025 All rights reserved</p>
          <p>Powered By SITE123 - Make a website</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
