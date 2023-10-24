import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Member from "../components/About/MembersList";
import Working from "../components/About/MembersList";
import Banner from '../common/Banner';
import aboutbg from "../assets/aboutbg.png";

const About = () => {
  return (
    <>
    
    <Banner  backgroundImage={aboutbg}  text2={" About SAA"} text_sx2={{textAlign:"center"}}/>
    
    <Member/>
    
    
    </>
  )
}

export default About