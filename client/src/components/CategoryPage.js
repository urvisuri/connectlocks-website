import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';
import logo from '../assets/connectlockslogo.png';
import Sidebar from './Sidebar';
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryPage = () => {
  const { categoryName, subCategoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [introText, setIntroText] = useState('');
  const [categoryImage, setCategoryImage] = useState(null);
  const [modalImages, setModalImages] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  useEffect(() => {
    // Reset selection on category change
    setSelectedProduct(null);

    // Determine the key for lookup (prefer subCategory, ease fallback to main category)
    const key = subCategoryName || categoryName;

    // Predefined Data
    const productData = {
      concealed: [
        { name: "CO-Viva", img: "/assets/concealed/viva.jpg" },
        { name: "CO-Zaya", img: "/assets/concealed/zaya.jpg" },
        { name: "CO-Quant", img: "/assets/concealed/quant.jpg" },
        { name: "CO-Lily", img: "/assets/concealed/lily.jpg" },
        { name: "CO-Mavi", img: "/assets/concealed/mavi.jpg" },
        { name: "CO-Latin", img: "/assets/concealed/latin.jpg" },
        { name: "CO-Leo", img: "/assets/concealed/leo.jpg" },
        { name: "CO-Zen", img: "/assets/concealed/zen.jpg" }
      ],
      zinc: [
        { name: "ZN-734", img: "/assets/zinc/zn-734.jpg" },
        { name: "ZN-883", img: "/assets/zinc/zn-883.jpg" },
        { name: "ZN-976", img: "/assets/zinc/zn-976.jpg" },
        { name: "ZN-348", img: "/assets/zinc/zn-348.jpg" },
        { name: "ZN-807", img: "/assets/zinc/zn-807.jpg" },
        { name: "ZN-866", img: "/assets/zinc/zn-866.jpg" },
        { name: "ZN-1010", img: "/assets/zinc/zn-1010.jpg" }
      ],
      stainless: [
        { name: "SS-1203", img: "/assets/stainless/ss-1203.jpg" },
        { name: "SS-1204", img: "/assets/stainless/ss-1204.jpg" },
        { name: "SS-1202", img: "/assets/stainless/ss-1202.jpg" },
        { name: "SS-1201", img: "/assets/stainless/ss-1201.jpg" }
      ],
      aluminium: [
        { name: "ACH handle", img: "/assets/aluminium/ach-handle.jpg" },
        { name: "ACH-2003", img: "/assets/aluminium/ach-2003.jpg" },
        { name: "ACH-2004", img: "/assets/aluminium/ach-2004.jpg" },
        { name: "ACH-2013", img: "/assets/aluminium/ach-2013.jpg" }
      ],
      'hinges': [
        {
          name: "Frog Hinges",
          images: ["/assets/hinges/frog1.png", "/assets/hinges/frog2.png"],
          description: `Material: SS 304 Stainless Steel for superior strength and corrosion resistance

Opening Angle: Up to 180°, allowing wide and smooth door movement

Load Capacity: Supports doors weighing up to 80 kg maximum

Adjustment Capability:
Up & Down adjustment: ± 2.5 mm
Left & Right adjustment: ± 1.5 mm
Front & Back (In & Out) adjustment: ± 1.0 mm
3D Adjustment: Enables precise alignment for perfect door positioning

Installation: Easy to install, adjust, and maintain

Door / Frame Length: 140 / 140 mm

Door / Frame Width: 30 / 30 mm

Supported Door Thickness: 40 mm

Opening Angle: ≤ 180°`
        },
        {
          name: "MS-Auto Hinges",
          images: ["/assets/hinges/ms-auto-hinge.png", "/assets/hinges/ms-auto-hinge.png"],
          description: `2D-Auto Hinges
Material: High-quality Mild Steel
Opening Angle: Up to 110° for comfortable access
Adjustment Type: 2D Adjustment (Up–Down and Left–Right)
Adjustment Range:
Up & Down: ± 2.0 mm
Left & Right: ± 2.0 mm
Auto-Closing Mechanism: Ensures smooth and secure door closing
Installation: Easy to install and adjust
Application: Suitable for kitchen cabinets, wardrobes, and furniture shutters
Performance: Stable, durable, and reliable for regular use

3D-Auto Hinges
Material: High-quality Mild Steel
Opening Angle: Up to 110°
Adjustment Type: 3D Adjustment for perfect alignment
Adjustment Range:
Up & Down: ± 2.5 mm
Left & Right: ± 2.0 mm
In & Out (Front & Back): ± 1.5 mm
Clip-On Feature: Enables quick and tool-free door mounting and removal
Auto-Closing Mechanism: Smooth, silent, and controlled closing action
Installation: Fast, easy, and maintenance-friendly
Application: Ideal for premium kitchens, wardrobes, and modular furniture`
        },
        {
          name: "SS-Auto Hinges",
          images: ["/assets/hinges/ss-auto-hinge.jpg", "/assets/hinges/ss-auto-hinge.jpg"],
          description: `2D CLIP-ON SS AUTO HINGE
Material: High-quality Stainless Steel
Opening Angle: Up to 110°
Adjustment Type: 2D Adjustment
Adjustment Range:
Up & Down: ± 2.0 mm
Left & Right: ± 2.0 mm
Auto-Closing Mechanism: Smooth and reliable door closing
Corrosion Resistance: Suitable for moisture-prone areas
Installation: Easy to install and adjust
Application: Kitchen cabinets, wardrobes, and modular furniture

3D CLIP-ON SS AUTO HINGE
Material: High-grade Stainless Steel
Opening Angle: Up to 110°
Adjustment Type: 3D Adjustment for Perfect Alignment
Adjustment Range:
Up & Down: ± 2.5 mm
Left & Right: ± 2.0 mm
In & Out (Front & Back): ± 1.5 mm
Clip-On Feature: Quick mounting and easy door removal
Auto-Closing Mechanism: Smooth, silent, and controlled operation
Corrosion Resistance: Ideal for kitchens and high-humidity environments
Installation: Fast, tool-friendly, and maintenance-free`
        },
        {
          name: "3D-CO adjustable hinges",
          images: ["/assets/hinges/3d-co-1.jpg", "/assets/hinges/3d-co-2.jpg"],
          description: `Type: Concealed Adjustable Hinge (3D-CO)

Material: High-quality metal construction with durable surface finish

Design: Fully concealed hinge for a clean and modern look

Adjustment Type: 3D Adjustment for perfect door alignment

Adjustment Range:

Up & Down adjustment: ± 2.5 mm

Left & Right adjustment: ± 2.0 mm

In & Out (Front & Back) adjustment: ± 1.5 mm

Opening Angle: Up to 180° for wide and smooth door movement

Installation: Easy to install, adjust, and maintain

Application: Suitable for wooden doors, flush doors, and modern interior frames

Performance: Smooth operation, stable load handling, and long service life`
        }
      ],
      'smart-locks': [
        {
          name: "CH-CL",
          images: ["/assets/smart-locks/ch-cl-1.jpg", "/assets/smart-locks/ch-cl-2.jpg"],
          description: "Smart Hotel Lock / Card Lock" // Placeholder
        },
        {
          name: "CH-DL",
          images: ["/assets/smart-locks/ch-dl-1.jpg", "/assets/smart-locks/ch-dl-2.png"],
          description: "Smart Digital Lock" // Placeholder
        },
        {
          name: "CS-DL",
          images: ["/assets/smart-locks/cs-dl.jpg", "/assets/smart-locks/cs-dl.jpg"],
          description: "Smart Lock (CS-DL)" // Placeholder
        },
        {
          name: "CD-RM",
          images: ["/assets/smart-locks/cd-rm.jpg", "/assets/smart-locks/cd-rm.jpg"],
          description: "Smart Lock (CD-RM)" // Placeholder
        },
        {
          name: "CE-DL",
          images: ["/assets/smart-locks/ce-dl.jpg", "/assets/smart-locks/ce-dl.jpg"],
          description: "Smart Lock (CE-DL)" // Placeholder
        }
      ],
      'mortise-lock': [
        { name: "CM-4001 ATQ", img: "/assets/mortise/cm-4001-atq.png" },
        { name: "SS-4003 SS", img: "/assets/mortise/ss-4003-ss.png" },
        { name: "CM-4002 SS", img: "/assets/mortise/cm-4002-ss.png" },
        { name: "CM-4001 SS", img: "/assets/mortise/cm-4001-ss.png" },
        { name: "CM-4004 ATQ", img: "/assets/mortise/cm-4004-atq.png" }
      ],
      'knob': [
        { name: "SS Q32", images: ["/assets/knob/ss-q32.jpg"] },
        { name: "SS R33", images: ["/assets/knob/ss-r33.jpg"] },
        { name: "SS S38", images: ["/assets/knob/ss-s38.jpg"] },
        { name: "SS R40", images: ["/assets/knob/ss-r40.jpg"] },
        { name: "SQ G3", images: ["/assets/knob/sq-g3.jpg"] },
        { name: "SZ Q30", images: ["/assets/knob/sz-q30.jpg"] },
        { name: "CS DC1", images: ["/assets/knob/cs-dc1.jpg"] },
        { name: "DC 85", images: ["/assets/knob/dc-85.jpg"] },
        { name: "DC RZ", images: ["/assets/knob/dc-rz.jpg"] },
        { name: "KB R30", images: ["/assets/knob/kb-r30.jpg"] },
        { name: "DC R38", images: ["/assets/knob/dc-r38.jpg"] }
      ],
      'door-handle': [
        {
          name: "Aluminium Door Handle",
          images: [
            "/assets/door-handle/alu-handle-1.jpg",
            "/assets/door-handle/alu-handle-2.jpg",
            "/assets/door-handle/alu-handle-3.jpg",
            "/assets/door-handle/alu-handle-4.jpg"
          ],
          description: `Material: High-quality Aluminium
Design: Sleek, modern, and ergonomic profile
Finish: Premium surface finish for a refined and elegant look
Durability: Corrosion-resistant and wear-resistant for long-term use
Grip Comfort: Smooth edges and balanced design for easy handling
Installation: Easy to install and compatible with standard door fittings
Application: Suitable for wooden, aluminium, and glass doors
Usage: Ideal for residential, commercial, and office spaces
Performance: Strong, lightweight, and reliable for everyday operation`
        },
        {
          name: "SS-Door Handle",
          images: [
            "/assets/door-handle/ss-handle-1.jpg",
            "/assets/door-handle/ss-handle-2.jpg",
            "/assets/door-handle/ss-handle-3.jpg",
            "/assets/door-handle/ss-handle-4.jpg",
            "/assets/door-handle/ss-handle-5.jpg"
          ],
          description: `Material: High-quality Stainless Steel
Design: Modern, sleek, and ergonomic profile
Finish: Premium surface finish for a clean and elegant look
Durability: High resistance to corrosion, rust, and daily wear
Grip Comfort: Smooth edges and solid feel for comfortable handling
Installation: Easy to install and compatible with standard door fittings
Application: Suitable for wooden, metal, and glass doors
Usage: Ideal for residential, commercial, and office environments
Performance: Strong, stable, and long-lasting operation`
        }
      ],
      'telescopic-channel': [
        {
          name: "SS-Regular telescopic channel",
          images: ["/assets/telescopic/ss-tele-regular.jpg"],
          description: "SS Regular Telescopic Channel"
        },
        {
          name: "MS- Regular telescopic channel",
          images: ["/assets/telescopic/ms-tele-regular-1.png", "/assets/telescopic/ms-tele-regular-2.png"],
          description: "MS Regular Telescopic Channel"
        },
        {
          name: "MS-Soft Close telescopic-channel",
          images: [
            "/assets/telescopic/ms-soft-close-1.jpg",
            "/assets/telescopic/ms-soft-close-2.jpg",
            "/assets/telescopic/ms-soft-close-3.jpg",
            "/assets/telescopic/ms-soft-close-4.jpg"
          ],
          description: "MS Soft Close Telescopic Channel"
        },
        {
          name: "Push-to-Open Telescopic channel",
          images: [
            "/assets/telescopic/push-open-1.jpg",
            "/assets/telescopic/push-open-2.jpg"
          ],
          description: "Push-to-Open Telescopic Channel"
        },
        {
          name: "Tendom Drawer Channel",
          images: [
            "/assets/telescopic/tendom-1.png",
            "/assets/telescopic/tendom-2.jpg",
            "/assets/telescopic/tendom-3.jpg"
          ],
          description: "Tendom Drawer Channel"
        }
      ]
    };

    if (key && productData[key]) {
      const data = productData[key];
      if (Array.isArray(data)) {
        setProducts(data);
        setIntroText('');
        setCategoryImage(null);
      } else {
        setProducts(data.items);
        setIntroText(data.intro);
        setCategoryImage(data.image);
      }
    } else {
      setProducts([]);
      setIntroText('');
      setCategoryImage(null);
    }
  }, [categoryName, subCategoryName]);

  const displayTitle = subCategoryName
    ? subCategoryName.replace(/-/g, ' ')
    : categoryName.replace(/-/g, ' ');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500
  };

  // If a product is selected, show the Product Detail View
  if (selectedProduct) {
    return (
      <div className="category-page">
        <div className="product-detail-view">
          <button className="back-button" onClick={() => setSelectedProduct(null)}>← Back to Products</button>
          <h2 className="product-detail-title">{selectedProduct.name}</h2>
          <div className="product-detail-content">
            <div className="product-detail-slider">
              {selectedProduct.images && selectedProduct.images.length > 0 ? (
                <Slider {...sliderSettings}>
                  {selectedProduct.images.map((img, idx) => (
                    <div key={idx} className="slider-frame">
                      <img src={img} alt={`${selectedProduct.name} ${idx + 1}`} />
                    </div>
                  ))}
                </Slider>
              ) : (
                <img src={selectedProduct.img} alt={selectedProduct.name} />
              )}
            </div>
            <div className="product-detail-text">
              <pre>{selectedProduct.description}</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default Grid View
  return (
    <div className="category-page">
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
      <h2 className="category-heading">{displayTitle}</h2>

      {categoryImage && (
        <div className="category-main-image-container">
          <img src={categoryImage} alt={displayTitle} onClick={() => setModalImages([categoryImage])} />
        </div>
      )}

      {introText && <p className="category-intro">{introText}</p>}

      <div className={introText ? "product-list-text-only" : "product-list"}>
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className={introText ? "product-item-text-only" : "product-item"}
              onClick={() => {
                const currentKey = subCategoryName || categoryName;
                if (['smart-locks', 'telescopic-channel', 'knob', 'mortise-lock', 'hinges'].includes(currentKey)) {
                  setModalImages(product.images || [product.img]);
                } else if (product.images || product.description) {
                  setSelectedProduct(product);
                } else {
                  setModalImages(product.images || [product.img]);
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              {!introText && (
                <div className="product-image-container">
                  <img
                    src={product.images ? product.images[0] : product.img}
                    alt={product.name}
                    className="category-image"
                  />
                </div>
              )}
              <div className="product-details">
                <h3>{product.name}</h3>
                {introText && <p>{product.description}</p>}
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>

      {modalImages && (
        <div className="modal" onClick={() => setModalImages(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', width: '90%' }}>
            <span className="close" onClick={() => setModalImages(null)}>&times;</span>
            {Array.isArray(modalImages) && modalImages.length > 1 ? (
              <Slider {...sliderSettings}>
                {modalImages.map((img, idx) => (
                  <div key={idx} className="slider-frame">
                    <img src={img} alt={`Slide ${idx}`} />
                  </div>
                ))}
              </Slider>
            ) : (
              <img src={Array.isArray(modalImages) ? modalImages[0] : modalImages} alt="Full View" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
