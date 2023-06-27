import React from 'react'
import './template.css'
import img1 from './assets/img1.gif'
function Template(props) {
  return (
    <div className="template">
      <img src={props.src} alt="" srcset="" className='fit'/>
      <div className="side">
        <h1>{props.title}</h1>
        <p>
         {props.paragraph}
        </p>
      </div>
    </div>
  );
}

export default Template