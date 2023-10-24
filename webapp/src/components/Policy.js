import React from 'react'
import Container from '../../Common/Container'
import { Box, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const PrivacyPolicy = () => {
    const classes = useStyle();
  return (
   <Box>
    <Container>
    
        <Stack>
        <Box sx={{display:"flex", justifyContent:"center", mb:"50px"}} >
            <Box sx={{ maxWidth:"400px", borderBottom:"3px solid #D0AC54",}} >
            <Typography variant='h3' color="#D0AC54" mb="10px" >Privacy Policy</Typography>

            </Box>
        </Box>
        <Typography 
        sx={{color:"#0F4430", fontWeight:"600", fontSize:"15px", mb:"20px", lineHeight:"17px" }} 
        >The World Gold Council (India) Private Limited (”WGC”) recognises the importance of protecting the privacy of all information provided by visitors of this website. We have created the following policy guidelines with a fundamental respect for our visitors’ right to privacy and to guide our relationships with our visitors.
        </Typography>

        <Box sx={{ height:"1.5px", backgroundColor:"#0F4430",mb:"20px"  }} ></Box>
        {/* <Box sx={{height:"3px, color:"red"}} /> */}

        <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Information Collected by the World Gold Council (India)</Typography>

        <p className={classes.para} >WGC may collect and use information about visitors during their registration for this website, such as name, address and email address; their participation in certain activities, including contests and polls, and through the use of cookies. When visitors request pages from our server, our web server automatically collects some information about the visitors, including their IP addresses. These addresses are used by computers on the network to send the requested pages to visitors. <br/> <br/> By using this website and providing your personal data to WGC you understand and agree that you are consenting to WGC and its affiliates: (a) using your personal data; and (b) sharing your personal data with third parties, as described below. Further, we may provide links to the websites of other third parties. These third-party websites may collect personal information about users on those websites, and our Privacy Policy does not extend to these external websites and third parties. Please refer directly to these third parties and web sites regarding their privacy policies.</p>

        <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Use of Information</Typography>

        <p className={classes.para} > WGC will not reveal any personal information that visitors provide us to any third party without their permission. WGC uses visitors’ IP addresses to help diagnose problems with our server and to administer the website. We also use it to gather broad demographic information about our visitors in general. This information does not contain anything that can identify visitors personally. We may combine demographic information supplied by a subscriber at registration with site usage data to provide profiles, in aggregate form, about our visitors and their preferences in the content of the site and advertising. We may share this composite information with our advertisers to help them better understand our services, but WGC does not give advertisers information about individual visitors. Your web browser may be set to accept cookies automatically, but can be changed to decline them. The Help section of the toolbar on most browsers will tell you how to set your browser to prevent accepting new cookies, how to have the browser notify you when you receive a new cookie or how to disable cookies altogether. Please note that if you decline to accept cookies, you may be required to register each time you wish to download materials from the website. 

        <br/> <br/>

         Using e-mail addresses, provided at registration or otherwise, WGC may periodically send out e-mail newsletters and promotional e-mails to our visitors about services and publications offered by this website and its advertisers. Visitors can indicate that they do not wish to receive e-mail information from WGC or its advertisers by ticking the “Do not send me any updates” box on the registration page or by following the instructions for unsubscribing included in each e-mail. Third parties will not contact our visitors through the use of our e-mail newsletter lists except through advertisements within the newsletters themselves, or unless visitors ask to be placed on a list to receive e-mails from our advertisers on subjects of interest. This website uses cookies to deliver content specific to visitors‘ interests and to honour their preferences. This information is used to assist us in creating a site that will serve the needs of our visitors. For information on cookies and how we use them see our Cookies Policy.
         <br/>
         <br/>
          WGC may disclose visitor’s personal information if, in our opinion, such disclosure is required (i) by law, (ii) to protect and/or defend WGC’s rights and/or (iii) to protect the personal safety of any individual. In addition, in the event that all or substantially all of WGC’s stock and/or assets are transferred or sold to another entity, WGC may transfer visitor’s personal information to the acquiring entity. 
         <br/><br/>
          Upon request, WGC will remove visitors (and their information) from our database or permit them to “opt-out” of any further e-mail newsletters or contact - visitors just need to follow the instructions for unsubscribing included in each e-mail and/or contact us at the address below. Although WGC does not specifically seek to obtain any information from children, there are certain areas of our website that children may visit. We urge children only to give us any information after they have discussed it with their parents. </p>

        <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Personal Data Security</Typography>
        <p className={classes.para} >We maintain adequate technical and organisational security measures to protect personal information from loss, misuse, and unauthorised access, disclosure, alteration, or destruction.</p>



        <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Corection / Updating / Deletion of Personal Information</Typography>

        <p className={classes.para} >We maintain adequate technical and organisational security measures to protect personal information from loss, misuse, and unauthorised access, disclosure, alteration, or destruction.</p>
        </Stack>

        <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >General</Typography>
        <p className={classes.para} >WGC is not responsible for the content or the privacy polices of websites to which it may provide links or the websites of its advertisers. WGC uses all reasonable precautions to keep the personal information disclosed to us secure and to disclose such information only to responsible third parties after permission from the visitor.</p>

        <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Governing Law</Typography>
        <p className={classes.para} >This website is governed by and shall be construed in accordance with laws of India and any dispute as to its terms shall be submitted to the exclusive jurisdiction of the courts in Mumbai.</p>








    <Box>
    </Box>
    </Container>
   </Box>
  )
}

const useStyle = makeStyles({
    para:{
        marginBottom:"35px",
        lineHeight:"15px",
        fontSize:"12px",
        color:"#231F20",
        fontWeight:"500"
    }
})

export default PrivacyPolicy