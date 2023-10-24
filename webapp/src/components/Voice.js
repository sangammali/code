import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import PageWidth from "../common/Container";

const Voice = ({ HeadingContainer, headingSideLine, textStyle, text }) => {
  const img = [
    "/assets/images/loren_img.png",
    "/assets/images/lorem2_img.png",
    "/assets/images/lorem3_img.png",
  ];

  const industryData = [
    {
      id: 1,
      img: "/assets/vo1.png",
      text: "Sr. Developer", // Add the text here
    },
    {
      id: 2,
      img: "/assets/vo2.png",
      text: "Sr. Developer", // Add the text here
    },
    {
      id: 3,
      img: "/assets/vo3.png",
      text: "Sr. Developer", // Add the text here
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${"assets/vobg.png"})`,
      }}
    >
      <PageWidth sx={{ paddingTop: "50px" }}>

      <Box sx={{ paddingBottom: "50px" }}>
          <Typography
            align="center"
            sx={{
              color: "#D0AC54",
              fontWeight: "400",
              fontSize: { sm: "25px", md: "30px" },
            }}
          >
            — Voice of the Industry —
          </Typography>
        </Box>

        <Box sx={HeadingContainer}>
          <Box sx={headingSideLine} />

          <Typography sx={textStyle}> {text}</Typography>

          <Box sx={headingSideLine} />
        </Box>

        <Box>
          <Typography
            sx={{
              textAlign: "center",
              lineHeight: "20px",
              fontSize: "13px",
              mb: "70px",
              padding: {xs:"0px 20px 0px 20px",sm:"0px 10px 0px 20px", md:"0"}
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            mb: "70px",
          }}
        >
          {industryData.map((Data) => {
            return (
              <Box
                key={Data.id}
                mb="30px"
                sx={{
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  <img
                    src={Data.img}
                    alt="not loaded"
                    width="200px"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      backgroundColor: "rgba(0,0,0,0.7)",
                      color: "#fff",
                      padding: "10px",
                   
                    }}
                  >
                    {Data.text}
                  </div>
                </div>

                <Typography
                  textAlign="center"
                  maxWidth="200px"
                  sx={{
paddingLeft:"30px"
,padding:"20px 0px 20px 40px"
                    // White text color
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </Typography>
              </Box>
            );
          })}
        </Box>
      </PageWidth>
    </Box>
  );
};

export default Voice;
