import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import Banner from '../common/Banner';
import cocog from "../assets/cocg.png";
import CocMain from '../components/CocMain';




const codec = () => {
  return (
    <>
    
    <Banner  backgroundImage={cocog}  text2={" Code of Conduct"} bannersx={{   
    backgroundSize:{xs:"cover",md:"cover",sm:"cover"},
    height:{xs:"40vh", sm:"50vh",md:"120vh"},
    display:"flex", alignItems:{sm:"center", xs:"end", md:"center"}, justifyContent:{sm:"center ", xs:"center", md:"end"},
    backgroundRepeat:"no-repeat",}}/>
    
    <CocMain />
    
    
    </>
  )
}

export default codec