import React from 'react'
import bgImg from "../../assets/images/about-hero.png"
import { Link } from "react-router-dom"

export default function About(){
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image"></img>
            <div className="about-page-content">
                <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is tp enliven your road trip withthe perfect travel van rental.
                    Our vans are recertified before each trip to ensure your travel plans can
                    go offwithout a hitch.(Hitch cost extra 😉)</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br /> van is ready.</h2>
                <Link className="link-bottom" to="/vans">Explore our vans.</Link>
            </div>
        </div>
    )
}