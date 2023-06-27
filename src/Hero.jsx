import React from 'react'
import heroimg from './assets/study+quest.jpg'
import './Hero.css'
function Hero() {
  return (
    <div className="hero">
      <img src={heroimg} alt="" srcset="" className="heroimg" />
      <div className="flex">
        <div className="side-1">
          <h1 className="h1">Level-up your learning</h1>
          <p>
            A science-based study course, time management system, knowledge
            database, and gamified experience, all packaged into an actionable
            Notion template. Join by selecting a mode below:
          </p>
          <button className="choices">Single Player</button>
          <button className="choices">
            Multi-Player
            <br />
            (Coming Soon)
          </button>
        </div>
        <div className="side-2">
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EIh82zUZZ5U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero