import React from "react";
import "./Home.css";
import SpeakersSlider from "../src/components/SpeakersSlider.jsx";
import Countdown  from "../src/components/Countdown.jsx";
import jitin from "../src/photos/doctor.png";
import ExploreButtom from "../src/components/ExploreButton.jsx";
import pharma from "../src/photos/pharma.png";
import overview from "../src/photos/overview.png";

const Home = () => {
  return (
    <div> {/* ✅ Single parent wrapper */}

      {/* HERO SECTION */}
      <section className="home-section">
        <div className="home-container">
                   <ExploreButtom />
          <Countdown />


        </div>
      </section>

      {/* overview section */}
       <section className="overview-section">

      <div className="overview-container">

        {/* LEFT CONTENT */}
        <div className="overview-left">

          <span className="overview-badge">OVERVIEW</span>

          <h1>
            Driving Digital Excellence Across the Pharmaceutical Value Chain
          </h1>

          <p className="overview-text">
            The Digi-Tech Pharma & AI Conference is a leading platform uniting
            pharmaceutical and technology leaders, healthcare innovators,
            regulatory authorities and solution providers to explore the
            evolving digital landscape in pharma. This conference promotes
            collaboration and knowledge exchange.
          </p>

          {/* CARD 1 */}
          <div className="overview-card">
            <div className="icon">🎤</div>

            <div>
              <h3>Enabling the Digital Future of Pharma</h3>
              <p>
                This event explores the integration of science and technology
                within the pharmaceutical industry with focus on AI, machine
                learning, digital health ecosystems and patient-centric drug
                development.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="overview-card">
            <div className="icon circle-icon">⚙️</div>

            <div>
              <h3>Connecting Technology, Compliance, and Care</h3>
              <p>
                Bringing together industry leaders to discuss regulatory
                frameworks, digital transformation and collaborative healthcare
                innovation.
              </p>
            </div>
          </div>

          <button className="download-btn">
            REQUEST  BROCHURE ➜
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="overview-right">

          <div className="image-circle">
            <img
              src={overview}
              alt="AI Pharma"
            />
          </div>

          <div className="request-btn">
            REQUEST <br /> BROCHURE ↗
          </div>

        </div>

      </div>

    </section>


      {/* about section */}


        <section className="themes-section"
        loading="lazy">

        <div className="themes-header">
          <span className="themes-tag">KEY THEMES TO BE DISCUSSED</span>
          <h1>Core Focus Areas Driving Innovation in Pharma</h1>
        </div>

        <div className="themes-container">

          {/* Card 1 */}
          <div className="theme-cardw">
            <h3>Why AI in Pharmacy?</h3>

          <ul>
                  <li> Digital technologies are transforming the pharma and biotech industry.</li>
                  <li>AI and Machine Learning accelerate drug discovery and research.</li>
                  <li>AI enables integration of pharma with digital healthcare systems.</li>
                  <li>Collaboration helps adopt advanced pharmaceutical technologies.</li>
                  <li>AI supports patient-centred drug discovery and personalized medicine.</li>
          </ul>
          </div>

          {/* Card 2 */}
          <div className="theme-card">
          <h3>What problem are we addressing?</h3>

            <ul>
              <li>Slow and costly drug discovery processes.</li>
              <li>Limited efficiency in traditional drug discovery models.</li>
              <li>Challenges in accurate target identification and validation.</li>
              <li>Need for advanced computing technologies in pharmaceutical research.</li>
              <li>Managing large-scale genomic and biological data.</li>
              <li>Inefficiencies in traditional clinical trial methods.</li>
              <li>Gap between research innovation and real-world R&D applications.</li>
            </ul>
          </div>
          

        </div>
        <div className="themes-container">

          {/* Card 1 */}
          <div className="theme-cardw">
            <h3>Reimagining Pharma by Integrating Science and Technology:</h3>

            <ul>
              <li>Digital Technology Trends in the Pharma and Biotech Industry</li>
              <li>Adopting AI and Machine Learning to unlock the full potential of Pharma</li>
              <li>Integrating Pharma into the Digital Health Environment</li>
              <li>Collaborative Innovation: Finding the right partners to leverage new technologies</li>
              <li>Patient-Centred Drug Discovery</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="theme-card">
            <h3>Digital Discovery and Clinical Trials</h3>

            <ul>
              <li>Applying AI to the Design of Lead Compounds</li>
              <li>Algorithms and Models for Drug Discovery</li>
              <li>Target Identification & Validation Using AI/ML</li>
              <li>Quantum Computing for Advanced Drug Discovery</li>
              <li>Genomics and Drug Discovery</li>
              <li>Virtual and Hybrid Clinical Trials</li>
              <li>R&D Use Cases and Case Studies</li>
            </ul>
          </div>
          

        </div>  

      </section>
   
      <section className="digital-section">

      <div className="digital-container">

        {/* Left Image */}
        <div className="digital-image">
          <img src={pharma} alt="Digital Pharma" />
        </div>

        {/* Right Content */}
        <div className="digital-content">

          <span className="digital-tag">
            DISCOVERY REIMAGINED, DIGITALLY POWERED
          </span>

          <h1>
            Digital Disruption in <span>Pharma</span> Pipeline
          </h1>

          <p className="digital-desc">
            Drug discovery is evolving beyond traditional pipelines. With the
            power of AI, data science, and computational models, pharma is
            redefining how compounds are identified, optimized, and brought to
            market. This transformation is enabling faster, smarter, and more
            targeted development — from lab to launch.
          </p>

          {/* CTA Card */}

          <div className="digital-card">

            <div className="card-text">
              <h3>Accelerating Drug Discovery with Digital Intelligence</h3>

              <p>
                Explore how digital tools and data-driven approaches are
                unlocking the next generation of breakthrough therapies.
              </p>
            </div>

            <button className="register-btn">
              Register
            </button>

          </div>

        </div>

      </div>

    </section>


      {/* ABOUT SECTION */}
      <section className="speakersection">
        <div className="speaker-headings">
          <span className="international-tag">SPEAKERS</span>
          <h2>Meet the Minds Shaping the Future</h2>
          <p className="international-description">
            Discover the Industry Leaders and Experts Sharing Insights That Drive Change
          </p>
          <span className="international-header">INTERNATIONAL SPEAKERS</span>
          </div>

            <SpeakersSlider />
                      <span className="international-header">NATIONAL SPEAKERS</span>

                  <SpeakersSlider />

    </section>        

      
    </div>
  );
};

export default Home;