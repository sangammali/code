
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

// import Header from './common/Header';
import Home from './Container/Home'; // Create this component
import Layout from './Layout/layout';
import About from "./Container/About";
import Code from "./Container/codec";
import Faq from "./Container/Faq";
import Policy from "./Container/Privacy";
import Terms from "./Container/Terms";


// import About from './Pages/About';

function App() {
  return (
  <>
      {/* <Header />
    <Routes>
      <Route path="/" exact component={<Home} />
      <Route path="/menu" exact component={MenuPage} />
      
    </Routes>
   */}

{/* <Home />  */}
{/* <About/> */}

<Routes>
      <Route exact path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />}/>
          <Route path="/home" element={<Home />} />
         
      <Route path="/about" element={<About />} />
      <Route path="/conduct" element={<Code />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/terms" element={<Terms />} />
      </Route>



    </Routes>


 </>
  );
}

export default App;
