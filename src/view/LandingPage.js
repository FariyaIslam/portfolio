import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import AboutUs from '../components/AboutUs/AboutUs'
import Testimonial from '../components/Testimonial'
import TeamMembers from '../components/TeamMembers'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Reactmap from '../components/Reactmap'
import Fruits from '../components/Fruits'
import Flowers from '../components/Flowers'

const LandingPage = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* HeroSection */}
            <HeroSection />

            {/* Features */}
            <Features />

            {/* Testimonial */}
            <Testimonial />

            {/* About Us */}
            < AboutUs />



            {/* Contact Us */}
            <ContactUs />

            {/* Footer */}
            <Footer />

            <Reactmap />
            <Fruits />
            <Flowers />


        </div>
    )
}

export default LandingPage
