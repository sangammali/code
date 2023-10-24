import { Box, Typography } from '@mui/material';
import React from 'react';

const Banner = (props) => {
  const { backgroundImage, text = "", text2 = "asdas", text_sx, text_sx2, banner_sx } = props;

  const bannerStyles = {
    backgroundImage: `url(${backgroundImage})`,

   backgroundPosition:{md:"right", sm:"center", xs:"center"},
    backgroundSize:{xs:"cover",md:"cover",sm:"cover"},
    height:{xs:"40vh", sm:"50vh",md:"120vh"},
    display:"flex", alignItems:{sm:"center", xs:"end", md:"center"}, justifyContent:{sm:"center ", xs:"center", md:"end"},
    backgroundRepeat:"no-repeat",
    // marginTop: "90px",



    ...banner_sx,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // objectFit:"scale-down",
    // height: '120vh',
    // marginTop: "90px",
    // display: "flex",
    // alignItems: "flex-end",
    // justifyContent: "center",
    // flexDirection: "column",
  };

  const textStyles = {
    color: "white",
    fontSize: {
      xs: "20px", // Adjust font size for extra-small screens
      sm: "20px",
      md: "25px", // Customize for other breakpoints
      // lg: "48px",
    },
    letterSpacing: "2px",
    textAlign: {
      xs: "center", // Center text for extra-small screens
      sm: "left", // Align text to the left for other breakpoints
    },
    ...text_sx,
  };

  const text2Styles = {
    color: "#D0AC54",
    fontSize: {
      xs: "35px", // Adjust font size for extra-small screens
      sm: "38px",
      md: "43px", // Customize for other breakpoints
      // lg: "72px",
    },
    letterSpacing: "3px",
    fontWeight: "600",
    paddingBottom:"10px",

    width:"415px",
    ...text_sx2,
  };

  return (
    <Box sx={bannerStyles}>
      <Box sx={{display:"flex", flexDirection:"column", position:"absolute",alignItems: "flex-end",
    justifyContent: "center", paddingRight:{md:"150px", sm:"0",xs:"0"} }}>
        <Typography sx={textStyles}>{text}</Typography>
        <Typography sx={text2Styles}>{text2}</Typography>
      <Box sx={{width:"420px",height:"3px", backgroundColor:"#D0AC54"}}>

      </Box>
      </Box>
    </Box>
  );
};

export default Banner;
























// import { Box, Typography } from '@mui/material';
// import React from 'react'

// const Banner = (props) => {
//   const { backgroundImage, text = "vbojolk", text2 = "asdas", text_sx, text_sx2, banner_sx } = props

//   const bannerStyles = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     height: '100vh', marginTop: "90px", display: "flex", alignItems: "flex-end", justifyContent: "center", flexDirection: "column",
//     ...banner_sx
//   };








//   return (
//     <Box sx={bannerStyles}  >
//       <Box>
//         <Typography sx={{ color: "white", fontSize: "30px", letterSpacing: "2px", ...text_sx, }}>
//           {text}
//         </Typography>
//         <Typography sx={{ color: "red", fontSize: "48px", letterSpacing: "3px", fontWeight: "600", ...text_sx2, paddingRight: "20px" }}>
//           {text2}
//         </Typography>

//       </Box>
//     </Box>
//   )
// }

// export default Banner;




