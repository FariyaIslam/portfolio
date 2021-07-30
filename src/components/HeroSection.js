import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <section className="hero">
            <h1 className="hero__heading">Work <span className="red">hard </span> and <br />you will get what you <span className="green">want</span></h1>
            <p className="hero__subheading">No one born becoming a Pro, Only efforts make them that!</p>
        </section>
    )
}

export default HeroSection
