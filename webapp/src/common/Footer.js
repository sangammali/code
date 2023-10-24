import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import upar from "../assets/uparrow.png";
import face from "../assets/face.png";
import twit from "../assets/twit.png";
import insta from "../assets/insta.png";
import world from "../assets/world.png";
// `import bline from "../assets/blkline.png";`
import logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
    <Box sx={{ paddingBottom: "20px" }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          item
          xs={10}
          md={5}
          sm={5}
          sx={{ display: "flex", flex: { sm: "none", xs: "none", md: "flex" } }}
        >
          <Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
              <Box
                sx={{ paddingTop: { xs: "10px", sm: "0" }, maxHeight: "100px" }}
                     style={{ cursor: "pointer" }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
              }}>
                <img src={logo1} alt="Logo" 
                  />
                <Box sx={{ maxWidth: "100px", paddingTop: "10px" }}>
                  <p
                    style={{
                      padding: "0",
                      margin: "0",
                      color: "#464749",
                      fontSize: "13px",
                    }}
                  >
                    Inspired by the
                  </p>
                </Box>
                <Box sx={{ maxWidth: "200px" }}>
                  <p
                    style={{
                      padding: "0",
                      margin: "0",
                      color: "#464749",
                      fontSize: "13px",
                    }}
                  >
                    Retail Gold Investment Principles
                  </p>
                </Box>
              </Box>
              {/* <Box sx={{transform:{xs:"revert", sm:"none"}}}>
                <img src={bline} height="100px" alt="Line" />
              </Box> */}

              <Box
                sx={{
                  width: "2px",
                  height: "25px",
                  display: { md: "none", sx: "flex", xs: "flex" },
                }}
              ></Box>

              <Box
                sx={{
                  width: "2px",
                  height: "95px",
                  backgroundColor: "#D0AC54",
                  display: { md: "flex", sx: "none", xs: "none" },
                }}
              ></Box>
              <Box>
                <p
                  style={{
                    fontSize: "14px",
                    margin: "0",
                    padding: "0",
                    paddingBottom: "5px",
                  }}
                >
                  Supported By
                </p>
                <img src={world} width="180px" height="70px" alt="World" />
              </Box>
            </Stack>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Box
            sx={{
              marginTop: { xs: "15px", sm: "0" },
              paddingRight: { sm: "20px" },
            }}
          >
            <p>
              <a href="#!" className="foot-text">
                ABOUT US
              </a>
            </p>
            <p>
              <a href="#!" className="foot-text">
                GOVERNANCE
              </a>
            </p>
            <p>
              <a href="#!" className="foot-text">
                NEWS & UPDATES
              </a>
            </p>
          </Box>
          <Box
            sx={{
              marginTop: { xs: "15px", sm: "0" },
              paddingRight: { sm: "30px" },
            }}
          >
            <p>
              <a href="#!" className="foot-text">
                FAQ’S
              </a>
            </p>
            <p>
              <a href="#!" className="foot-text">
                PRIVACY POLICY
              </a>
            </p>
            <p>
              <a href="#!" className="foot-text">
                DISCLAIMER
              </a>
            </p>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              gap: "20px",
              alignItems: "center",
              paddingRight: { sm: "30px" },
            }}
          >
            <p>
              <img src={face} className="foot-icon" alt="Facebook" />
            </p>
            <p>
              <img src={twit} className="foot-icon" alt="Twitter" />
            </p>
            <p>
              <img src={insta} className="foot-icon" alt="Instagram" />
            </p>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none", md: "flex" },
              alignItems: "center",
              paddingLeft: { sm: "50px" },
            }}
          >
            <img
              src={upar}
              height="40px"
              alt="Upar"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

// import React from 'react';
// import Grid from '@mui/material/Grid';
// import { Box } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import upar from "../assets/uparrow.png";
// import face from "../assets/face.png";
// import twit from "../assets/twit.png";
// import insta from "../assets/insta.png";
// import world from "../assets/world.png";
// import bline from "../assets/blkline.png";
// import logo1 from "../assets/logo1.png";

// const Footer = () => {
//   return (
//     <Box >
//       <Grid container spacing={2}  sx={{display:"flex",justifyContent:"center",}}>
//         <Grid item xs={5} sx={{ display: "flex" }}>
//           <Box >main

//             <Stack direction={"row"} spacing={3}>
//               <Box sx={{paddingTop:"10px"}}>
//                 < img src={logo1} />
//               </Box>
//               <Box>
//                 <img src={bline} height="100px" />
//               </Box>
//               <Box>
//               <p style={{fontSize:"14px", margin:"0", padding:"0", paddingBottom:"5px", }}>Supported By</p>
//               <img src={world} width="180px" height="70px"/>
//               </Box>
//             </Stack>
//             <Box>
//               <p style={{padding:"0",margin:"0", color: "#464749", fontSize:"13px"}}>Inspired by the</p>
//             </Box>
//             <Box>
//             <p style={{padding:"0",margin:"0", color: "#464749", fontSize:"13px"}}>Retail Gold Investment Principles</p>

//             </Box>
//           </Box>
//         </Grid>

//         <Grid item xs={6} sx={{ display: "flex", justifyContent: "space-evenly" }}>
//           <Box sx={{marginTop:"15px", paddingRight:"20px"}} >
//             <p> <a href='#!' className='foot-text'>
//               ABOUT US
//                    </a> </p>
//             <p> <a href='#!' className='foot-text'>
//               GOVERNANCE
//                 </a> </p>

//             <p> <a href='#!' className='foot-text'>
//               NEWS & UPDATES
//                   </a> </p>
//           </Box>
//           <Box sx={{marginTop:"15px", paddingRight:"30px"}}>
//           {/* FAQ’S PRIVACY POLICY DISCLAIMER */}

//           <p> <a href='#!' className='foot-text'>
//           FAQ’S
//                    </a> </p>
//             <p> <a href='#!' className='foot-text'>
//             PRIVACY POLICY
//                 </a> </p>

//             <p> <a href='#!' className='foot-text'>
//             DISCLAIMER                  </a> </p>

//           </Box>
//           <Box sx={{display:"flex",gap:"20px", alignItems:"center",paddingRight:"30px"}}>

//           <p>
//             <img src={face} className='foot-icon' />
//              </p>
//             <p>
//               <img src={twit} className='foot-icon' />
//               </p>

//             <p>
//               <img src={insta} className='foot-icon' />
//               </p>

//           </Box>
//           <Box sx={{display:"flex",alignItems:"center",paddingLeft:"50px"}}>
//             <img  src={upar} height="40px"/>
//           </Box>
//         </Grid>

//       </Grid>
//     </Box>
//   )
// }

// export default Footer;
