import React from 'react';
import Header from './Header';
import './Home.css'; // Import shared styles
import catalogImage from '../assets/download_qr_code.png';

const Downloads = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#ffffff' }}>
            <Header />
            <div style={{ padding: '40px', textAlign: 'center', flex: 1 }}>
                <h1>Downloads</h1>
                <p style={{ marginTop: '20px', fontSize: '18px', color: '#555' }}>
                    Download our latest catalogs and product specifications here.
                </p>

                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* Catalog Item */}
                    <div style={{
                        border: '1px solid #ddd',
                        padding: '20px',
                        borderRadius: '10px',
                        width: '300px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px', marginBottom: '15px' }}>
                            <img
                                src={catalogImage}
                                alt="Product Catalog"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <h3>Product Catalog 2025</h3>
                        <p style={{ margin: '10px 0', fontSize: '14px', color: '#777' }}>
                            Complete range of our smart locks and hardware.
                        </p>
                        <a
                            href={process.env.PUBLIC_URL + "/assets/catalog.pdf"}
                            target="_blank"
                            rel="noopener noreferrer"
                            download="ConnectLocks_Catalog_2025.pdf"
                            style={{
                                display: 'inline-block',
                                textDecoration: 'none',
                                padding: '10px 20px',
                                backgroundColor: '#000',
                                color: '#fff',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginTop: '10px',
                                fontWeight: '500'
                            }}
                        >
                            Download PDF
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Section (from Home.js) */}
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

export default Downloads;
