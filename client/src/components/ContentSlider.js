import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ContentSlider.css";

const ContentSlider = () => {
    const slides = [
        {
            title: "rfid card door locks",
            description: "rfid card door locks use contactless cards or tags for smooth and secure access. commonly used in hotels, hospitals, and corporate offices, these locks offer efficient access management and can be integrated with existing security systems for seamless operation."
        },
        {
            title: "pin & password locks",
            description: "pin and password-based door locks provide secure access through customizable numeric codes. users can create, modify, or delete passwords easily, making them suitable for shared spaces such as rental homes, hostels, and offices. temporary passwords can also be issued for guests or service staff."
        },
        {
            title: "hotel & hospitality locks",
            description: "hotel door locks are specially designed to meet the requirements of the hospitality industry. they support rfid cards, master keys, and centralized management systems, ensuring smooth check-in and check-out processes while maintaining high security and operational efficiency."
        },
        {
            title: "office & commercial locks",
            description: "office and commercial door locks provide controlled access to workspaces, cabins, and restricted areas. these locks support multiple users, access logs, and advanced authentication methods, helping organizations improve security and monitor employee access effectively."
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
    };

    return (
        <div className="content-slider-wrapper">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="content-slide">
                        <h2>{slide.title}</h2>
                        <p>{slide.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ContentSlider;
