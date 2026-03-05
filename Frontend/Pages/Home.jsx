import React from "react";
import "./Home.css";
import SpeakersSlider from "../src/components/SpeakersSlider.jsx";
import Countdown  from "../src/components/Countdown.jsx";

const Home = () => {
  return (
    <div> {/* ✅ Single parent wrapper */}

      {/* HERO SECTION */}
      <section className="home-section">
        <div className="home-container">

          <Countdown />

        </div>
      </section>

      <section>
        {/* About Section... */}
          <div className="about-div">
            
            <div className="about-section">
              <p>About Us</p>
              <h1>Empowering Pharmaceutical Innovation Through AI Conference 2026</h1>
            </div>

            <div className="about-container">
             <div className="about-content">
                <h2>Why AI in Pharmacy?</h2>
                <h4>International conference 2026</h4>
                <p>AI is reshaping the future of pharmacy by bridging innovation with patient-centered care. <br /> From intelligent drug development to precision medicine, it empowers the industry <br /> to deliver smarter, safer, and more efficient healthcare solutions.</p>
                  <img src="https://i.pinimg.com/736x/d5/a9/95/d5a9952a7e39dff6c17feb306017e506.jpg" alt="AI in Pharmacy" className="about-image" />  
              </div>
            </div>

            <div className="about-container">
              <div className="about-content">
                <h2>What problem are we addressing?</h2>
                <h4>International conference 2026</h4>
               <p>Healthcare systems today generate massive amounts of data but lack the tools to fully <br /> harness its potential. This gap leads to delays, inefficiencies, and avoidable risks<br /> -challenges that intelligent AI-driven solutions are designed to overcome.</p>
              </div>
            </div>
          
            <div className="about-container">
              <div className="about-content">
                <h2>Conference objectives</h2>
                <h4>International conference 2026</h4>
                <p>To foster innovation, collaboration, and knowledge exchange at the <br /> intersection of Artificial Intelligence and Pharmaceutical Sciences.</p>
              </div>
            </div>
          
            <div className="about-container">
              <div className="about-content">
                <h2>Who should attend?</h2>
                <h4>International conference 2026</h4>
               <p>This conference is ideal for researchers, academicians, industry professionals, <br /> healthcare practitioners, and students passionate about the future of AI in pharmacy. <br /> It welcomes innovators seeking to drive meaningful transformation in healthcare.</p>
              </div>
            </div>
          
              <div className="about-container">
                <div className="about-content">
                <h2>Expected outcomes</h2>
                <h4>International conference 2026</h4>
                <p>The conference aims to foster meaningful collaborations, inspire <br /> innovative research, and accelerate the adoption of AI-driven solutions in <br /> pharmaceutical sciences. Participants will gain valuable insights <br /> and strategic direction for future advancements.</p>
                </div>
              </div>
          </div>


      </section>

      {/* ABOUT SECTION */}
     
      <SpeakersSlider />
    </div>
  );
};

export default Home;