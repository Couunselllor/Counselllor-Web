import React from 'react';
import './About.css'; // Import your CSS file for this component
import Footer from '../Footer/Footer';
import aboutImg from '../../assets/about.png';
import profile from '../../assets/profile.jpeg';
import './About.css'; // Import your CSS file for this component
import { useNavigate } from "react-router-dom";

function AboutUs() {
    const navigate = useNavigate();
    const redirect=()=>{
        navigate("/contact")
    }
  return (
    <div className="about-us">
      <section className="sub-header">
        <h1>About Us</h1>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to helping students make informed decisions about their undergraduate studies and future careers. Our mission is to provide a platform that empowers students to choose the right educational path based on their interests, aspirations, and needs.
          </p>

          <h2>Why Choose Us?</h2>
          <p>
            - We offer real insights from current college students to help you make informed choices.<br />
            - Our platform is designed to make the college selection process easy and convenient.<br />
            - We are committed to helping you make the most of your undergraduate education for a successful career.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="About Us" style={{ height: "40vh" }} />
        </div>
      </section>

      <div >
  <button className="cta-button" onClick={redirect}>Get Started</button>
</div>

      <div className="testimonials">
        <div className="testimonial">
          <img src={profile} alt="User 1" />
          <p className='aboutp'>"This platform changed my life. I found the perfect college for me!"</p>
        </div>
        <div className="testimonial">
          <img src={profile} alt="User 2" />
          <p className='aboutp'>"I wish I had this when I was applying to colleges. It makes the process so much easier."</p>
        </div>
      </div>
        <div style={{marginTop:"10vh"}}>
      <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
