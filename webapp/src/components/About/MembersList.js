import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import PageWidth from '../../common/Container';
import { makeStyles } from '@mui/styles';

const MembersList = () => {
  const classes = useStyle();
  return (
    <Box
      sx={{
        backgroundImage: `url(${"/assets/abbg.png"})`,
      }}
    >
      <Grid container spacing={0} gap={3} justifyContent="center" alignItems="center" sx={{ paddingTop: { xs: "20px", md: "40px" }, paddingBottom: { xs: "20px", md: "40px" } }}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ borderBottom: "2px solid #322666", textAlign: "center" }}>
            <Stack sx={{ color: "#322666" }}>
              <Typography variant="h4">Steering Committee</Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ borderBottom: "2px solid gray", textAlign: "center" }}>
            <Stack sx={{ color: "#D0AC54" }}>
              <Typography variant="h4">Working Groups</Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          maxWidth: "1000px",
          margin: "auto",
          paddingBottom: { xs: "20px", md: "50px" },
        }}
      >
        <Box mb="30px">
          <Typography sx={{ textAlign: "center", fontSize: { xs: "12px", md: "14px" }, lineHeight: { xs: "13px", md: "15px" } }}>
            The first Steering Committee of RGIP India formed in October 2020 includes Government authorities, several stakeholders from various national level jewelers, trade associations, and policymakers. It aims to bring together retail investors, product providers, and several industry experts on a single platform to help forge a valuable relationship and guide investors and product providers.
          </Typography>
        </Box>

        <Box mb="30px">
          <Typography sx={{ color: "#322666", fontSize: { xs: "18px", md: "20px" }, textAlign: "center" }}>Members</Typography>
        </Box>





        <Box sx={{backgroundColor:"#322666",paddingBottom:"10px", }} >
            <Grid container spacing={1} sx={{}} >
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.text} >STAKEHOLDER CATEGORY</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3} >
                    <Stack>
                        <Box className={classes.text}>ORGANIZATION</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.text}>NAME</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.text}>DESIGNATION</Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>


        <Box sx={{paddingBottom:"10px", }} >
            <Grid container spacing={2} sx={{margin:"10px auto"}} >
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}>Global authority</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3} sx={{paddingLeft:{sm:"0"}}}>
                    <Stack>
                        <Box className={classes.data}>World Gold Council</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}>David Tait <br/> Mike Oswin <br/> Somasundaram PR</Box>
                    </Stack>
                </Grid>
                <Grid item xs={2} sm={3} md={3} sx={{paddingLeft:{sm:"0"}}}>
                    <Stack>
                        <Box className={classes.data}>Chief Executive Officer <br/> Director <br/> Managing Director, India</Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />

        <Box sx={{paddingBottom:"10px", }} >
            <Grid container spacing={2} sx={{margin:"10px auto"}} >
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}>Government sponsored Trade <br/> Association</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}>Gems & Jewellery Export <br/> Promotion Council (GJEPC)</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}  >Sabyaschi Ray <br/> Mansukh Kothari <br/> K. Srinivasan <br/> DD Karel</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data} >Executive Director </Box>
                        <Box className={classes.data} >Director, Vasupati Jewellers</Box>
                        <Box className={classes.data}>Managing Director, Emerald Jewellers</Box>
                        <Box className={classes.data} >Executive Director</Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />

        <Box sx={{paddingBottom:"10px", }} >
            <Grid container spacing={2} sx={{margin:"10px auto"}} >
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}>National Bullion Traders <br/> (& Jewellers) Trade Association</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}>India Bullion & Jewellers <br/> Exchange (IBJA)</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}  >Surendra Mehta</Box>
                        <Box className={classes.data}  >Prithviraj Kothari</Box>
                        <Box className={classes.data}  >Saurabh Gadgil</Box>
                        <Box className={classes.data}  >Chiraj Thakkar</Box>
                        <Box className={classes.data}  >Ashish Pethe</Box>
                        <Box className={classes.data}  >Haresh Acharya</Box>
                        <Box className={classes.data}  >Sachin Jain (Invitee)</Box>
                        <Box className={classes.data}  >Bhargav Vaidya (Invitee)</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data} >Secretary, IBJA</Box>
                        <Box className={classes.data} >Managing Director, <br/> Riddhisiddhi Bullion Ltd</Box>
                        <Box className={classes.data}>MD & CEO, <br/> PNG Jewellers</Box>
                        <Box className={classes.data} >Partner,<br/> Waman Hari Pethe</Box>
                        <Box className={classes.data} >Managing Director,<br/> Parker Bullion</Box>
                        <Box className={classes.data} >Owner, Vardhaman <br/> Jewellers</Box>
                        <Box className={classes.data} >CA Advisor to IBJA</Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
        
         <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />

         <Box sx={{paddingBottom:"10px", }} >
            <Grid container spacing={2} sx={{margin:"10px auto"}} >
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}>National Retailers & Manufacturers  <br/> Trade Association</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}>All India Gems & Jewellery<br/> 
                        Domestic Council (GJC)</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}  >Ananth Padmanabhan</Box>
                        <Box className={classes.data}  >Manoj Jha</Box>
                        <Box className={classes.data}  >Avinash Gupta</Box>
                        <Box className={classes.data}  >Nitin Khandelwal</Box>
                        <Box className={classes.data}  >Ashok Minawala</Box>
                        <Box className={classes.data}  >Ajoy Chawla appointed <br /> Vijay Govindrajan - General<br /> Manager and Commercial <br />head and Bullion Mgmt <br /> - Jewellery division</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data} >Secretary, IBJA</Box>
                        <Box className={classes.data} >Managing Director, <br/> Riddhisiddhi Bullion Ltd</Box>
                        <Box className={classes.data}>MD & CEO, <br/> PNG Jewellers</Box>
                        <Box className={classes.data} >Partner,<br/> Waman Hari Pethe</Box>
                        <Box className={classes.data} >Managing Director,<br/> Parker Bullion</Box>
                        <Box className={classes.data} >Owner, Vardhaman <br/> Jewellers</Box>
                        <Box className={classes.data} >CA Advisor to IBJA</Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
         <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />

        <Box sx={{paddingBottom:"10px", }} >
            <Grid container spacing={2} sx={{margin:"10px auto"}} >
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}>National Bullion Traders <br/> (& Jewellers) Trade Association</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}>India Bullion & Jewellers <br/> Exchange (IBJA)</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}  >Surendra Mehta</Box>
                        <Box className={classes.data}  >Prithviraj Kothari</Box>
                        <Box className={classes.data}  >Saurabh Gadgil</Box>
                        <Box className={classes.data}  >Chiraj Thakkar</Box>
                        <Box className={classes.data}  >Ashish Pethe</Box>
                        <Box className={classes.data}  >Haresh Acharya</Box>
                        <Box className={classes.data}  >Sachin Jain (Invitee)</Box>
                        <Box className={classes.data}  >Bhargav Vaidya (Invitee)</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data} >Secretary, IBJA</Box>
                        <Box className={classes.data} >Managing Director, <br/> Riddhisiddhi Bullion Ltd</Box>
                        <Box className={classes.data}>MD & CEO, <br/> PNG Jewellers</Box>
                        <Box className={classes.data} >Partner,<br/> Waman Hari Pethe</Box>
                        <Box className={classes.data} >Managing Director,<br/> Parker Bullion</Box>
                        <Box className={classes.data} >Owner, Vardhaman <br/> Jewellers</Box>
                        <Box className={classes.data} >CA Advisor to IBJA</Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
         <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />
         <Box sx={{paddingBottom:"10px", }} >
            <Grid container spacing={2} sx={{margin:"10px auto"}} >
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}>National Bullion Traders <br/> (& Jewellers) Trade Association</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}>India Bullion & Jewellers <br/> Exchange (IBJA)</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Stack>
                        <Box className={classes.data}  >Surendra Mehta</Box>
                        <Box className={classes.data}  >Prithviraj Kothari</Box>
                        <Box className={classes.data}  >Saurabh Gadgil</Box>
                        <Box className={classes.data}  >Chiraj Thakkar</Box>
                        <Box className={classes.data}  >Ashish Pethe</Box>
                        <Box className={classes.data}  >Haresh Acharya</Box>
                        <Box className={classes.data}  >Sachin Jain (Invitee)</Box>
                        <Box className={classes.data}  >Bhargav Vaidya (Invitee)</Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3} >
                    <Stack>
                        <Box className={classes.data} >Secretary, IBJA</Box>
                        <Box className={classes.data} >Managing Director, <br/> Riddhisiddhi Bullion Ltd</Box>
                        <Box className={classes.data}>MD & CEO, <br/> PNG Jewellers</Box>
                        <Box className={classes.data} >Partner,<br/> Waman Hari Pethe</Box>
                        <Box className={classes.data} >Managing Director,<br/> Parker Bullion</Box>
                        <Box className={classes.data} >Owner, Vardhaman <br/> Jewellers</Box>
                        <Box className={classes.data} >CA Advisor to IBJA</Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const useStyle = makeStyles({
  text: {
    color: "white",
    fontSize: { xs: "10px", md: "15px", sm:"11px" },
  },
  data: {
    marginBottom: { xs: "5px", md: "10px" },
    fontSize: { xs: "5px", md: "12px" },
  },


});

export default MembersList;

       
       










// import { Box, Grid, Stack, Typography } from '@mui/material'
// import React from 'react'
// import PageWidth from '../../common/Container'
// import { makeStyles } from '@mui/styles'

// const MembersList = () => {
//     const classes= useStyle();
//   return (
//      <Box sx={{
//         backgroundImage:`url(${"/assets/abbg.png"})`
//      }} >
        


            
//                 <Grid container spacing={0} gap={3} sx={{display:"flex", justifyContent:"center", paddingTop:"40px", paddingBottom:"40px"}}>
//                     <Grid xs={6} sm={6} md={4} >
//                         <Box sx={{borderBottom:"2px solid #322666", textAlign:"center"}}>
//                             <Stack sx={{color:"#322666"}}>
//                              <Typography variant='h4'>Steering Committee</Typography>
//                             </Stack>
//                         </Box>
//                     </Grid>
//                     <Grid xs={6} sm={6} md={4} >
//                     <Box sx={{borderBottom:"2px solid gray", textAlign:"center"}}>
//                             <Stack sx={{color:"#D0AC54"}} >
//                              <Typography variant='h4' >Working Groups</Typography>
//                             </Stack>
//                         </Box>
//                     </Grid>
//                 </Grid>
            
            
        
//           <Box
//            sx={{maxWidth:"1000px",margin:"auto",paddingBottom:"50px "}}>  
//             <Box mb="30px" >
//                     <Typography sx={{textAlign:"center", fontSize:"14px", lineHeight:"15px"}} >The first Steering Committee of RGIP India formed in October 2020 includes Government authorities, several stakeholders from various national level jewelers, trade associations, and policymakers. It aims to bring together retail investors, product providers, and several industry experts on a single platform to help forge a valuable relationship and guide investors and product providers.</Typography>
//             </Box>

//             <Box mb="30px">
//                 <Typography sx={{color:"#322666", fontSize:"20px", textAlign:"center" }} >Members</Typography>
//             </Box>
            
            // <Box sx={{backgroundColor:"#322666",paddingBottom:"10px", }} >
            //     <Grid container spacing={2} sx={{margin:"10px auto"}} >
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.text} >STAKEHOLDER CATEGORY</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.text}>ORGANIZATION</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.text}>NAME</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.text}>DESIGNATION</Box>
            //             </Stack>
            //         </Grid>
            //     </Grid>
            // </Box>


            // <Box sx={{paddingBottom:"10px", }} >
            //     <Grid container spacing={2} sx={{margin:"10px auto"}} >
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>Global authority</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>World Gold Council</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>David Tait <br/> Mike Oswin <br/> Somasundaram PR</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>Chief Executive Officer <br/> Director <br/> Managing Director, India</Box>
            //             </Stack>
            //         </Grid>
            //     </Grid>
            // </Box>

            // <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />

            // <Box sx={{paddingBottom:"10px", }} >
            //     <Grid container spacing={2} sx={{margin:"10px auto"}} >
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>Government sponsored Trade <br/> Association</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>Gems & Jewellery Export <br/> Promotion Council (GJEPC)</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}  >Sabyaschi Ray <br/> Mansukh Kothari <br/> K. Srinivasan <br/> DD Karel</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data} >Executive Director </Box>
            //                 <Box className={classes.data} >Director, Vasupati Jewellers</Box>
            //                 <Box className={classes.data}>Managing Director, Emerald Jewellers</Box>
            //                 <Box className={classes.data} >Executive Director</Box>
            //             </Stack>
            //         </Grid>
            //     </Grid>
            // </Box>

            // <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />

            // <Box sx={{paddingBottom:"10px", }} >
            //     <Grid container spacing={2} sx={{margin:"10px auto"}} >
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>National Bullion Traders <br/> (& Jewellers) Trade Association</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>India Bullion & Jewellers <br/> Exchange (IBJA)</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}  >Surendra Mehta</Box>
            //                 <Box className={classes.data}  >Prithviraj Kothari</Box>
            //                 <Box className={classes.data}  >Saurabh Gadgil</Box>
            //                 <Box className={classes.data}  >Chiraj Thakkar</Box>
            //                 <Box className={classes.data}  >Ashish Pethe</Box>
            //                 <Box className={classes.data}  >Haresh Acharya</Box>
            //                 <Box className={classes.data}  >Sachin Jain (Invitee)</Box>
            //                 <Box className={classes.data}  >Bhargav Vaidya (Invitee)</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data} >Secretary, IBJA</Box>
            //                 <Box className={classes.data} >Managing Director, <br/> Riddhisiddhi Bullion Ltd</Box>
            //                 <Box className={classes.data}>MD & CEO, <br/> PNG Jewellers</Box>
            //                 <Box className={classes.data} >Partner,<br/> Waman Hari Pethe</Box>
            //                 <Box className={classes.data} >Managing Director,<br/> Parker Bullion</Box>
            //                 <Box className={classes.data} >Owner, Vardhaman <br/> Jewellers</Box>
            //                 <Box className={classes.data} >CA Advisor to IBJA</Box>
            //             </Stack>
            //         </Grid>
            //     </Grid>
            // </Box>
            
            //  <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />

            //  <Box sx={{paddingBottom:"10px", }} >
            //     <Grid container spacing={2} sx={{margin:"10px auto"}} >
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>National Retailers & Manufacturers  <br/> Trade Association</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>All India Gems & Jewellery<br/> 
            //                 Domestic Council (GJC)</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}  >Ananth Padmanabhan</Box>
            //                 <Box className={classes.data}  >Manoj Jha</Box>
            //                 <Box className={classes.data}  >Avinash Gupta</Box>
            //                 <Box className={classes.data}  >Nitin Khandelwal</Box>
            //                 <Box className={classes.data}  >Ashok Minawala</Box>
            //                 <Box className={classes.data}  >Ajoy Chawla appointed <br /> Vijay Govindrajan - General<br /> Manager and Commercial <br />head and Bullion Mgmt <br /> - Jewellery division</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data} >Secretary, IBJA</Box>
            //                 <Box className={classes.data} >Managing Director, <br/> Riddhisiddhi Bullion Ltd</Box>
            //                 <Box className={classes.data}>MD & CEO, <br/> PNG Jewellers</Box>
            //                 <Box className={classes.data} >Partner,<br/> Waman Hari Pethe</Box>
            //                 <Box className={classes.data} >Managing Director,<br/> Parker Bullion</Box>
            //                 <Box className={classes.data} >Owner, Vardhaman <br/> Jewellers</Box>
            //                 <Box className={classes.data} >CA Advisor to IBJA</Box>
            //             </Stack>
            //         </Grid>
            //     </Grid>
            // </Box>
            //  <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />

            // <Box sx={{paddingBottom:"10px", }} >
            //     <Grid container spacing={2} sx={{margin:"10px auto"}} >
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>National Bullion Traders <br/> (& Jewellers) Trade Association</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>India Bullion & Jewellers <br/> Exchange (IBJA)</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}  >Surendra Mehta</Box>
            //                 <Box className={classes.data}  >Prithviraj Kothari</Box>
            //                 <Box className={classes.data}  >Saurabh Gadgil</Box>
            //                 <Box className={classes.data}  >Chiraj Thakkar</Box>
            //                 <Box className={classes.data}  >Ashish Pethe</Box>
            //                 <Box className={classes.data}  >Haresh Acharya</Box>
            //                 <Box className={classes.data}  >Sachin Jain (Invitee)</Box>
            //                 <Box className={classes.data}  >Bhargav Vaidya (Invitee)</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data} >Secretary, IBJA</Box>
            //                 <Box className={classes.data} >Managing Director, <br/> Riddhisiddhi Bullion Ltd</Box>
            //                 <Box className={classes.data}>MD & CEO, <br/> PNG Jewellers</Box>
            //                 <Box className={classes.data} >Partner,<br/> Waman Hari Pethe</Box>
            //                 <Box className={classes.data} >Managing Director,<br/> Parker Bullion</Box>
            //                 <Box className={classes.data} >Owner, Vardhaman <br/> Jewellers</Box>
            //                 <Box className={classes.data} >CA Advisor to IBJA</Box>
            //             </Stack>
            //         </Grid>
            //     </Grid>
            // </Box>
            //  <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />
            //  <Box sx={{paddingBottom:"10px", }} >
            //     <Grid container spacing={2} sx={{margin:"10px auto"}} >
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>National Bullion Traders <br/> (& Jewellers) Trade Association</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}>India Bullion & Jewellers <br/> Exchange (IBJA)</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data}  >Surendra Mehta</Box>
            //                 <Box className={classes.data}  >Prithviraj Kothari</Box>
            //                 <Box className={classes.data}  >Saurabh Gadgil</Box>
            //                 <Box className={classes.data}  >Chiraj Thakkar</Box>
            //                 <Box className={classes.data}  >Ashish Pethe</Box>
            //                 <Box className={classes.data}  >Haresh Acharya</Box>
            //                 <Box className={classes.data}  >Sachin Jain (Invitee)</Box>
            //                 <Box className={classes.data}  >Bhargav Vaidya (Invitee)</Box>
            //             </Stack>
            //         </Grid>
            //         <Grid item xs={3} sm={3} md={3}>
            //             <Stack>
            //                 <Box className={classes.data} >Secretary, IBJA</Box>
            //                 <Box className={classes.data} >Managing Director, <br/> Riddhisiddhi Bullion Ltd</Box>
            //                 <Box className={classes.data}>MD & CEO, <br/> PNG Jewellers</Box>
            //                 <Box className={classes.data} >Partner,<br/> Waman Hari Pethe</Box>
            //                 <Box className={classes.data} >Managing Director,<br/> Parker Bullion</Box>
            //                 <Box className={classes.data} >Owner, Vardhaman <br/> Jewellers</Box>
            //                 <Box className={classes.data} >CA Advisor to IBJA</Box>
            //             </Stack>
            //         </Grid>
            //     </Grid>
            // </Box>
// </Box>

            
        
//      </Box> 
//   )
// }

// const useStyle = makeStyles ({

//     text:{
//         color:"white",
//         fontSize:"15px",
//         // textAlign:"center"
//     },

//     data:{
//         // textAlign:"center"
//         marginBottom:"10px",
//         fontSize:"10px"

//     }
// })

// export default MembersList