import React, {useState} from 'react'
import './navbar.css'
import logo from "./assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
function navbar() {
  
  const [show, setShow] = useState(false)
  
  function run() {
    setShow(!show)
  }

  function go() {
    setShow(false)
  }
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="" srcset="" className="cat" />
      </div>
      <div className="list">
        <ul>
          <li>HOME</li>
          <li>STUDY QUEST</li>
          <li>CLASSROOM</li>
          <li>LIBRARY</li>
          <li>SKILLS</li>
          <li>BLOG</li>
          <li>SHOP</li>
        </ul>
      </div>

      {show && (
        <div className="poplist">
          <div className="close">
            <AiOutlineClose size={28} onClick={go}/>
          </div>
          <div className="show">
            <p>HOME</p>
            <p>STUDY QUEST</p>
            <p>CLASSROOM</p>
            <p>LIBRARY</p>
            <p>SKILLS</p>
            <p>BLOG</p>
            <p>SHOP</p>
          </div>
        </div>
      )}

      <div className="hamburger">
        <FiMenu size={28} onClick={run} />
      </div>
    </div>
  );
}

export default navbar