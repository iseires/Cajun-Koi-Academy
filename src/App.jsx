import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Reviews from './Reviews'
import About from './About'
import Template from './Template'
import img1 from './assets/img1.gif'
import img2 from './assets/img2.gif'
import img3 from './assets/img3.gif'
import Inside from './Inside'
import img4 from './assets/img4.gif'
import Footer from './Footer'
function App() {
 
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Reviews />
      <About />
      <Reviews />
      <Inside />
      <Template src={img1} title='SAVE TIME AND STRESS' paragraph='Study Quest connects with your syllabus and helps you seamlessly apply these lessons to your school work. ' />
      <Template src={img2} title='TRAIN THE BEST SKILLS' paragraph='Build an evidence-based study skillset that will consistently score top marks. Our guided walkthroughs ensure that you’re practicing correctly. *Based on the skills acquisition frameworks of Josh Kaufman’s 20 Hours principle and Tim Ferriss’ best-selling 4-Hour series. '/>
      <Template src={img3} title='ORGANIZE YOUR KNOWLEDGE' paragraph='Retain what you learn beyond school and throughout your career. *Based on Tiago Forte’s award-winning Building a Second Brain philosophy.'/>
      <Template src={img4} title='ORGANIZE YOUR LIFE' paragraph='A simple yet powerful method for staying focused while balancing school, work, and life. *Based on David Allen’s GTD framework.'/>
      <Footer />
    </div>
  )
}

export default App
