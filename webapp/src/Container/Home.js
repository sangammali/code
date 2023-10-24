import React from 'react';
import About from "../components/aboutSwarna";
import Retailg from "../components/Retailg";
import Codeoc from "../components/Conduct";
import Voice from "../components/Voice";
import Register from "../components/Register";

// common comp header and footer and container and banner
// import Header from "../common/Header";
import Banner from "../common/Banner";
// import Footer from "../common/Footer";
import bdImg1 from "../assets/homebg.png"
// import ExpandableParagraph from '../common/ReadMore';
const Home = () => {


  const paragraphText = `The Indian Gold industry has always worked towards improving its quality of business operations and upholding ethical standards. From the standardization of weights and measures to the introduction of hallmarking, it has not only climbed upwards in its developmental trajectory but also ensured the process is more transparent and efficient. Presenting you an initiative by the Indian Gold industry - Swarna Adarsh Abhiyaan. It is a one-of-its- kind industry initiative that offers best practices and suitable solutions that will hand-hold you through your business journey in a principled manner. This will retain the trust of the existing stakeholders and generate interest and stimulate new stakeholders to follow these principles.
  Swarna Adarsh Abhiyaan is the ideal way for our industry to operate in order to thrive and induce trust amongst gold consumers. The principles have been developed for the whole gold industry to strive towards excellence. Combined, the Swarna Adarsh Abhiyaan aims to guide all its stakeholders towards a righteous yet profitable way of doing business. By pledging to follow these guiding principles together, we take a step forward in uplifting our businesses and restoring the golden glory of the industry as a whole.
  `;
  

 

  return (
    <>
    

    <Banner  backgroundImage={bdImg1} text={"Working together, on principles."} text2={" Isi Mey Faida Hai."}  text_sx2={{paddingLeft:{xs:"35px",sm:"30px",md:"0px"}}} text_sx={{paddingRight:{xs:"30px", sm:"25px", md:"0px"}}} />
    <About/>
    
    
   
    <Retailg />
    <Codeoc/>
    <Voice/>
    
    <Register/>

  
    


    </>
  )
}

export default Home