import React from 'react';
import { Grid, TextField, Container, Paper, Checkbox, FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import PageWidth from '../common/Container';
import Typography from '@mui/material/Typography';
import cap from '../assets/cap.png';

const Register = () => {
  return (
    <PageWidth sx={{ paddingTop: "50px" }}>
      <Grid container spacing={2} sx={{ display: {sm:'flex', md:"flex", xs:"flex"},flexDirection:{sm:"column", md:"row", xs:"column"}, alignItems:{sm:"center", xs:"center",} }}>
        <Grid item xs={12} sx={{ paddingBottom: '20px' }}>
          <Typography
            align="center"
            sx={{
              color: '#D0AC54',
              fontWeight: '400',
              fontSize: { xs: '20px', sm: '25px', md: '30px' },
            }}
          >
            — Register Your Interest —
          </Typography>
        </Grid>

        {/* First Grid Item */}
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
          <Box sx={{ marginTop: '20px' }}>
            <input className="inp" placeholder="First Name :" />
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <input className="inp" placeholder="Your Email:" style={{ display: 'flex' }} />
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <input className="inp" placeholder="Business Type :" />
          </Box>
        </Grid>

        {/* Second Grid Item (Mirrored Content) */}
        <Grid item xs={12} sm={6} md={6} sx={{ display: {sm:'flex', md:"flex", xs:"flex"},justifyContent:{sm:"center", xs:"center"}, flexDirection: 'column', padding: '20px' }}>
          <Box sx={{ marginTop: '20px' }}>
            <input className="inp" placeholder="Last Name :" />
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <input className="inp" placeholder="Phone Number :" style={{ display: 'flex' }} />
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <input className="inp" placeholder="Business Name :" />
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              maxWidth: '270px',
              height: '50px',
              bgcolor: '#F7F7F7',
              border: '2px solid #F7F7F7',
              marginBottom: '20px',
              mt: { xs: '20px', sm: '50px' },
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Checkbox />
            <span id="captcha">I’m not a robot</span>
            <img src={cap} alt="not loaded" width="35px" />
          </Box>
          <Box sx={{textAlign:"center", maxWidth: '200px', backgroundColor: '#D0AC54', color: 'white', textAlign: 'center', paddingTop: '5px', height: '30px' }}>
            PARTICIPATE
          </Box>
        </Grid>
      </Grid>
    </PageWidth>
  );
};

export default Register;










// import React from 'react';
// import { Grid, TextField, Container, Paper,
  
//   Checkbox,
//   FormControlLabel, } from '@mui/material';
// import Box from '@mui/material/Box';
// import PageWidth from '../common/Container';
// import Typography from '@mui/material/Typography';
// import cap from "../assets/cap.png";


// const Register = () => {
//   return (
//     <PageWidth>
//       <Grid container spacing={8} sx={{display:"flex",}}>

//       <Grid item xs={12} sx={{ paddingBottom: "20px" }}>
//             <Typography align="center" sx={{ color: "#D0AC54", fontWeight: "400", fontSize:{sm:"25px", md:"30px"} }}>
//               — Register Your Interest —
//             </Typography>
//           </Grid>


//         {/* First Grid Item */}
//         <Grid item xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"column", padding:"50px",alignItems:"flec-end "}}>
//           <Box sx={{marginTop:"20px"}}>
//           <input class="inp" placeholder="First Name :"/>  
//           </Box>
//           <Box sx={{marginTop:"40px",}}>
//           <input class="inp" placeholder="yourmail@gmail.com :" style={{display:"flex"}}/>  
//           </Box>
//           <Box sx={{marginTop:"40px"}}>
//           <input class="inp" placeholder="Business Type :"/>  
//           </Box>





//         </Grid>

//         {/* Second Grid Item (Mirrored Content) */}
//         <Grid item xs={12} sm={6} md={6} sx={{display:"flex", flexDirection:"column", padding:"50px",alignItems:"center"}}>
//           <Box sx={{marginTop:"20px"}}>
//           <input class="inp" placeholder="Last Name :"/>  
//           </Box>

//           <Box sx={{marginTop:"40px",}}>
//           <input class="inp" placeholder="Phone Number :" style={{display:"flex"}}/>  
//           </Box>

//           <Box sx={{marginTop:"40px"}}>
//           <input class="inp" placeholder="Business Name :"/>  
//           </Box>
//         </Grid>


        
//       </Grid>

// <Grid container>
// <Grid  item md={12} sx={{display:"flex", flexDirection:"column"}}>
//       <Box sx={{maxWidth:"270px", height:"50px", bgcolor:"#F7F7F7", border:"2px solid #F7F7F7", marginBottom:"20px", mt:"50px", display:"flex",justifyContent:"space-evenly", alignItems:"center"}} > <Checkbox/> <span id='captcha'> I’m not a robot</span> <img src={cap} alt='not loaded' width="35px" /> </Box>
//  <Box sx={{maxWidth:"200px", backgroundColor:"#D0AC54", color:"white", textAlign:"center",paddingTop:"2px", height:"30px"}} >PARTICIPATE</Box>
      
// </Grid>
// </Grid>


//     </PageWidth>
//   );
// }

// export default Register;
