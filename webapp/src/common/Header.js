import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  styled,
  IconButton, // Import IconButton
} from "@mui/material";
// import { useEffect } from "react";
import React, { useState } from "react";
import makeStyles from '@mui/styles/makeStyles';


import { NavLink } from "react-router-dom";
import menui from "../assets/menui.png";
import logo1 from "../assets/logo1.png";
import PageWidth from "./Container";
import CloseIcon from "@mui/icons-material/Close"; // Import the Close icon

const Header = () => {
  const classes = useStyles();

  const [menu, setMenu] = useState(false);

  const handleMenuClose = () => {
    setMenu(false);
  };

  return (
    <>
      <Box
        className={menu ? classes.header : null}
        sx={{
          zIndex: 999,
          // position: "fixed",
          top: "0",
          width: "100%",
          padding: "8px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            background: "#fff",
            transition: "visibility 0.3s ease-in-out",
          }}
        >
          <Grid item xs={6} sm={6} md={6} xl={6}>
            <Stack ml="20px">
              {/* <img src={logo1} alt="not loaded" width="200px" /> */}
             <a href="http://localhost:3000/home"> <img
                src={logo1}
                alt="not loaded"
                width="200px"
                
                style={{ cursor: "pointer" }}
                onClick={() => {
                // Close the menu if it's open
                  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
                }}
              /></a>
            </Stack>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Box sx={{ display: "flex", marginTop: "15px" }}>
              <Box
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  paddingRight: "20px",
                  color: "#D0AC54",
                  cursor: "pointer",
                  display: { sm: "none", xs: "none", md: "block" },
                }}
                onClick={() => setMenu(true)}
              >
                Menu
              </Box>
              <Box sx={{ paddingRight: "60px" }}>
                <img
                  src={menui}
                  alt="menu"
                  style={{ cursor: "pointer" }}
                  onClick={() => setMenu(true)}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Close icon when menu is open */}
      {menu && (
        <IconButton
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
          }}
          onClick={handleMenuClose}

        >
          <CloseIcon />
        </IconButton>
      )}

      <Box className={menu ? classes.navItem : classes.navlist}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: { md: "100vh", sm: "60vh", xs: "50vh" },
            paddingTop: { md: "20px", sm: "30px", xs: "30px" },
          }}
        >
          <NavLink to="about">
            <Button
              sx={{ color: "white", fontSize: "20px" }}
              onClick={() => setMenu(false)}
            >
              ABOUT
            </Button>
          </NavLink>

          <NavLink to="about">
            <Button
              sx={{ color: "white", fontSize: "20px" }}
              onClick={() => setMenu(false)}
            >
              GOVERNENCE
            </Button>
          </NavLink>

          <NavLink to="conduct">
            <Button
              sx={{ color: "white", fontSize: "20px" }}
              onClick={() => setMenu(false)}
            >
              CODE OF CONDUCT
            </Button>
          </NavLink>

          <NavLink to="conduct">
            <Button
              sx={{ color: "white", fontSize: "20px" }}
              onClick={() => setMenu(false)}
            >
              NEWS AND UPDATE
            </Button>
          </NavLink>

          <NavLink to="faq">
            <Button
              sx={{ color: "white", fontSize: "20px" }}
              onClick={() => setMenu(false)}
            >
              FAQS
            </Button>
          </NavLink>

          <NavLink to="faq">
            <Button
              sx={{ color: "white", fontSize: "20px" }}
              onClick={() => setMenu(false)}
            >
              DOWNLOADABLE
            </Button>
          </NavLink>

          <NavLink to="policy">
            <Button
              sx={{ color: "white", fontSize: "20px" }}
              onClick={() => setMenu(false)}
            >
              PRIVACY POLICY
            </Button>
          </NavLink>

          <NavLink to="home">
            <Button
              sx={{ color: "white", fontSize: "20px" }}
              onClick={() => setMenu(false)}
            >
              DISCLAIMER
            </Button>
          </NavLink>
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles({
  navlist: {
    // height:{md:"100vh"},
    display: "none",
  },
  navItem: {
    // display:"flex",
    backgroundColor: "#CAA64E",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: { md: "start" },
    textAlign: "Left",
    margin: "0px",
    paddingTop: { xs: "100px", sm: "100px", md: "50px" },
  },
  header: {
    display: "none",
  },
});

export default Header;

// import { Box, Button, Grid, Stack, Typography, styled } from '@mui/material'
// import { makeStyles } from '@mui/styles'
// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';
// import menui from "../assets/menui.png";
// import logo1 from "../assets/logo1.png";
// import PageWidth from './Container';

// const Header = () => {
//   const classes = useStyle();

//   const [menu , setMenu] = useState()

//   return (

// <>
//   <Box   className={menu ? classes.header : null} padding="8px" >

//     <Grid  container spacing={2}  >

//       <Grid item xs={6} sm={6} md={6} xl={6} >
//         <Stack ml="20px">
//           <img src={logo1} alt='not loaded' width="200px" />
//         </Stack>
//       </Grid>

//       <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <Box sx={{ display: 'flex', marginTop: '15px' }}>
//               <Box
//                 sx={{
//                   fontSize: '18px',
//                   fontWeight: '500',
//                   paddingRight: '20px',
//                   color: '#D0AC54',
//                   cursor: 'pointer',
//                   display: { sm: 'none', xs: 'none', md: 'block' },
//                 }}

//                 onClick={()=>setMenu(true)}>
//                 Menu
//               </Box>
//               <Box sx={{ paddingRight: '60px' }}>
//                 <img src={menui} alt="menu"  style={{cursor:"pointer"}}
//             onClick={()=>setMenu(true)} />
//               </Box>
//             </Box>
//           </Grid>

//     </Grid>

//     </Box>

//     <Box className = {menu ? classes.navItem : classes.navlist} >

// <Box  sx={{
//   display:"flex", flexDirection:'column',
//   height:{md:"100vh", sm:"60vh", xs:"50vh"},
//   paddingTop:{md:"20px", sm:"30px", xs:"30px"}
// }}>

// <NavLink to='about' >
//   <Button sx={{color:"white" ,fontSize:"20px"}} onClick={()=>setMenu(false)}>ABOUT</Button>
// </NavLink>

// <NavLink to="governence" >
//   <Button sx={{color:"white" ,fontSize:"20px"}} onClick={()=>setMenu(false)}>GOVERNENCE</Button>
// </NavLink>

// <NavLink to='conduct' >
//   <Button sx={{color:"white" ,fontSize:"20px"}} onClick={()=>setMenu(false)}>CODE OF CONDUCT</Button>
// </NavLink>

// <NavLink to="news" >
//   <Button  sx={{color:"white" ,fontSize:"20px"}} onClick={()=>setMenu(false)}>NEWS AND UPDATE</Button>
// </NavLink>

// <NavLink to="faqs" >
//   <Button  sx={{color:"white" ,fontSize:"20px"}} onClick={()=>setMenu(false)}>FAQS</Button>
// </NavLink>

// <NavLink to="faq" >
//   <Button  sx={{color:"white" ,fontSize:"20px"}} onClick={()=>setMenu(false)}>DOWNLOADABLE</Button>
// </NavLink>

// <NavLink to='policy'>
//   <Button  sx={{color:"white" ,fontSize:"20px"}} onClick={()=>setMenu(false)}>PRIVACY POLICY</Button>
// </NavLink>

// <NavLink to='disclaimer'>
//   <Button   sx={{color:"white" ,fontSize:"20px"}} onClick={()=>setMenu(false)}>DISCLAIMER</Button>
// </NavLink>
// </Box>

//     </Box>

//     </>

//   )
// }

// const useStyle = makeStyles({

//   navlist:{
//     // height:{md:"100vh"},
//     display:"none"

//   },
//   navItem:{
//     // display:"flex",

//     backgroundColor:"#CAA64E",
//     display:"flex",flexDirection:"column", justifyContent:"center", alignItems:{md:"start", },
//     textAlign:"Left",
//     margin:"0px",
//     padding:{xs:"100px", sm:"100px", md:"50px"},
//   },

//   header:{
//     display:"none"
//   }
//  ,

// })

// export default Header

// import React, { useState } from 'react';
// import Grid from '@mui/material/Grid';
// import logo from "../assets/logo1.png";
// import menu from "../assets/menui.png";
// import { Box } from '@mui/material';
// import MenuPage from '../common/MenuPage';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   }

//   return (
//     <Box sx={{ zIndex: 999 }}>
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 0,
//           width: '100%',
//           background: '#fff',
//           zIndex: 999,
//           visibility: isMenuOpen ? 'hidden' : 'visible', // Hide the header when the menu is open
//           transition: 'visibility 0.3s ease-in-out',
//         }}
//       >
//         <Grid container spacing={2} sx={{ padding: '10px 20px 10px 20px' }}>
//           <Grid item xs={6}>
//             <Box sx={{ paddingLeft: { md: '40px' } }}>
//               <img src={logo} alt='logo' style={{ maxWidth: '180px', maxHeight: '180px' }} />
//             </Box>
//           </Grid>
//           <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <Box sx={{ display: 'flex', marginTop: '15px' }}>
//               <Box
//                 sx={{
//                   fontSize: '18px',
//                   fontWeight: '500',
//                   paddingRight: '20px',
//                   color: '#D0AC54',
//                   cursor: 'pointer',
//                   display: { sm: 'none', xs: 'none', md: 'block' },
//                 }}
//                 onClick={handleMenuClick}
//               >
//                 Menu
//               </Box>
//               <Box sx={{ paddingRight: '60px' }}>
//                 <img src={menu} alt="menu" onClick={handleMenuClick} />
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//       {isMenuOpen && (
//         <MenuPage onClose={() => setIsMenuOpen(false)} />
//       )}
//     </Box>
//   );
// }

// export default Header;

// import React from 'react';
// import Grid from '@mui/material/Grid';
// import SideWidth from './Sidecommon';

// import logo from "../assets/logo1.png";
// import menu from "../assets/menui.png";
// import { Box } from '@mui/material';

// const Header = () => {

//   return (
//     <Box >

//       <Grid container spacing={2} sx={{padding:"10px 20px 10px 20px",}}>

//         <Grid item xs={6} >

//         <Box sx={{ paddingLeft: { md: "40px",  }, }}>

//         <img src={logo} alt='logo' style={{ maxWidth: "200px", maxHeight: "200px", }} />
//           </Box>
//         </Grid>

//         <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end", }}>
//           <Box sx={{ display: "flex", marginTop: "15px" }}>

//             <Box sx={{ fontSize: "18px", fontWeight: "500", paddingRight: "20px" }}>
//               Menu
//             </Box>

//             <Box sx={{ paddingRight: "60px", }}
//              >
//             <img src={menu}   />
//             </Box>

//           </Box>

//         </Grid>

//       </Grid>
//     </Box>

// )
// }

// export default Header
