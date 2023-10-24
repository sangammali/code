import React from 'react';
import { Grid, Paper, Typography, Box } from "@mui/material";
import PageWidth from '../common/Container';
import reg1 from "../assets/reg1.png";
import reg2 from "../assets/reg2.png";
import reg3 from "../assets/reg3.png";
import reg4 from "../assets/reg4.png";
import reg5 from "../assets/reg5.png";
import reg6 from "../assets/reg6.png";


const Conduct = () => {
  return (
    <PageWidth sx={{ paddingTop: "50px" }}>
      <Box sx={{ paddingBottom: "50px", }}>
        <Typography align="center" sx={{ color: "#D0AC54", fontWeight: "400", fontSize: { sm: "25px", md: "30px" } }}>
          — Code of Conduct —
        </Typography>
      </Box>


      <Grid container spacing={1}>

        <Grid container sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>

          <Grid item md={12} sx={{ paddingBottom: "30px" }}>

            <Typography sx={{ color: "#231F20" ,     padding: {xs:"0px 10px 0px 20px",sm:"0px 10px 0px 20px", md:"0"}
}}>
              While Indians have a strong affinity for investment in gold, individuals seeking to invest in gold face several challenges in doing so, particularly around price transparency and quality assurance. As the market is fragmented and there is no overarching supervisory body, an industry - defined Code of Conduct is deemed to be an effective mechanism for protecting the interest of retail investors. Read about the various code of conduct below:
            </Typography>
          </Grid>
        </Grid>



        {/* Box 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // padding: "16px",
            }}
          >
            <Paper
              sx={{
                textAlign: "center",
                padding: "16px",
                height: "100%",
              }}
              elevation={0}
            >
              <img
                src={reg1}
                alt="Image 1"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Box sx={{ paddingTop: "20px" }}>
                <Typography variant="h6">RETAIL</Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // padding: "16px",
            }}
          >
            <Paper
              sx={{
                textAlign: "center",
                padding: "16px",
                height: "100%",
              }}
              elevation={0}
            >
              <img
                src={reg2}
                alt="Image 2"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Box sx={{ paddingTop: "20px" }}>
                <Typography variant="h6">MANUFACTURING</Typography>
              </Box>    
             </Paper>
          </Box>
        </Grid>



        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // padding: "16px",
            }}
          >
            <Paper
              sx={{
                textAlign: "center",
                padding: "16px",
                height: "100%",
              }}
              elevation={0}
            >
              <img
                src={reg3}
                alt="Image 2"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />

            <Box sx={{paddingTop:"20px"}}>
            <Typography variant="h6">DIGITAL GOLD</Typography>
            </Box>
             </Paper>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // padding: "16px",
            }}
          >
            <Paper
              sx={{
                textAlign: "center",
                padding: "16px",
                height: "100%",
              }}
              elevation={0}
            >
              <img
                src={reg4}
                alt="Image 2"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            <Box sx={{paddingTop:"20px"}}>
            <Typography variant="h6">BULLION TRADING</Typography>
            </Box>
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // padding: "16px",
            }}
          >
            <Paper
              sx={{
                textAlign: "center",
                padding: "16px",
                height: "100%",
              }}
              elevation={0}
            >
              <img
                src={reg5}
                alt="Image 2"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            <Box sx={{paddingTop:"20px"}}>
            <Typography variant="h6">ASSAYING</Typography>
            </Box>
            </Paper>
          </Box>
        </Grid>


        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px",
            }}
          >
            <Paper
              sx={{
                textAlign: "center",
                // padding: "16px",
                height: "100%",
              }}
              elevation={0}
            >
              <img
                src={reg6}
                alt="Image 2"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            <Box sx={{paddingTop:"20px"}}>
            <Typography variant="h6">REFINING</Typography>
            </Box>
            </Paper>
          </Box>
        </Grid>


        <Grid item xs={12} sx={{ paddingBottom: "50px", paddingTop:"50px" }}>
            <Typography align="center" sx={{ color: "#D0AC54", fontWeight: "500", fontSize:{sm:"25px", md:"20px"} }}>
              READ MORE +
            </Typography>
          </Grid>

      </Grid>

    </PageWidth>

  )
}

export default Conduct;



