import React from 'react'
import './Navbar.css'

const Navbar = () => {

    let navItems = [
        { url: "about-us", text: "About Us" },
        { url: "portfolio", text: "Portfolio" },
        { url: "testimonial", text: "Testimonial" },
        { url: "contact-us", text: "Contact Us" },
    ]

    return (
        <div className="navbar">
            <div className="navbar__parent">
                <div className="navbar__logo">
                    <span>FariyaIslam</span>
                </div>

                <div className="navbar__link">
                    {
                        navItems.map(link =>
                            <a href={link.url}>{link.text}</a>
                        )
                    }


                </div>
            </div>
        </div>
    )
}

export default Navbar
