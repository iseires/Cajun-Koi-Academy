import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaCopyright } from "react-icons/fa";
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-list">
        <FaYoutube size={20} />
        <FaTiktok size={20} />
        <FaInstagram size={20} />
        <FaSpotify size={20} />
        <FaTwitter size={20} />
        <FaTwitch size={20} />
        <HiOutlineMail size={20} />
      </div>
      <div className="caju">
        <FaCopyright size={14} /> Cajun Koi Academy
      </div>
    </div>
  );
}
// FaCopyright

export default Footer