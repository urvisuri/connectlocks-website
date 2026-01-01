
import React, { useState } from 'react';
import { Fireworks } from '@fireworks-js/react';
import './NewYearOverlay.css';
import newYearHeader from '../assets/new_year_header.png';

const NewYearOverlay = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="new-year-overlay" onClick={handleClose}>
            <Fireworks
                options={{
                    rocketsPoint: {
                        min: 0,
                        max: 100
                    },
                    hue: {
                        min: 0,
                        max: 360
                    },
                    delay: {
                        min: 15,
                        max: 30
                    },
                    speed: 2,
                    acceleration: 1.05,
                    friction: 0.98,
                    gravity: 1.5,
                    particles: 50,
                    trace: 3,
                    explosion: 5,
                    autoresize: true,
                    brightness: {
                        min: 50,
                        max: 80,
                    },
                    decay: {
                        min: 0.015,
                        max: 0.03
                    },
                    mouse: {
                        click: false,
                        move: false,
                        max: 1
                    }
                }}
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    background: 'transparent',
                    zIndex: 1
                }}
            />
            <div className="overlay-content">
                <img src={newYearHeader} alt="Happy New Year 2025" className="overlay-image" />
                <p className="click-to-close">Click anywhere to close</p>
            </div>
        </div>
    );
};

export default NewYearOverlay;
