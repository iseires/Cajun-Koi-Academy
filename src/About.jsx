import React from 'react'
import './About.css'
import mike from './assets/1mike.png'
import matty from "./assets/1matty.png";
import notion from './assets/notion.png'
function About() {
  return (
    <div className="about">
      <div className="makers">
        <h1>MEET THE MAKERS</h1>
      </div>
      <div className="pic">
        <input type="image" src={mike} alt="" className="pics" />
        <input type="image" src={matty} alt="" className="pics" />
      </div>
      <p>
        We were addicted to video games…
        <br />
        <br />
        …to the point where we were playing 4+ hours a day! If even one of those
        hours had been spent studying, life would have been less stressful.
        <br />
        <br />
        But studying was always a drag, and we never had to force ourselves to
        play games. So we continued to procrastinate…
        <br />
        <br />
        Then we discovered the neuroscience behind studying: how to learn more
        in less time, and how to stay focused and consistent. These study skills
        got us into medical school, where we continued to battle-test our
        methods. Who would have thought that two video game addicts would one
        day become doctors??
        <br />
        <br />
        Study Skills helped us rediscover our love for learning, and we want to
        spread that message. Yet so most students go through school never being
        taught how to learn. This is why we’ve made it our mission to make this
        information free to the public so that every student in the world can
        reach their full potential.
        <br />
        <br /> But simply having the knowledge is not enough. The hard part is
        figuring out how to apply it and change your life.
        <br />
        <br /> This is why Study Quest was created.
        <br /> By combining learning science with gamification theory and
        digital tools (like Notion and Discord), we built a study system that’s
        both effective and fun. Today, we help thousands of students around the
        world do the same with Study Quest 🚀.
      </p>
      <div className="notion">
        <img src={notion} alt="" srcset="" className="noteimg" />
        <p>
          Study Quest was created by a Notion Certified team and is officially
          backed by Notion Essentials.
        </p>
      </div>
      <h1 className="title">Watch the Study Quest info session</h1>
      <div className="iframe-container">
        <iframe
          width="700"
          height="394"
          src="https://www.youtube.com/embed/NuJgiA6t5Cs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default About