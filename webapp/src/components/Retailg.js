import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import PageWidth from "../common/Container";
// import Grid from "@mui/material";

import Retaildata from "../common/help";

const Retail = () => {
  const [info, setInfo] = useState(Retaildata);
  console.log(info);

  return (
    <div className="retbg">
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
            — Retail Gold Investment Principles —
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            margin: "0 auto",
            flexDirection: { sm: "column", xs: "column", md: "row" },
          }}
        >
          {info.map((redata) => {
            const { id, name, img } = redata;

            return (
              <Box key={id}>
                <Box sx={{ textAlign: "center" }}>
                  {" "}
                  <img src={img} alt="not loaded" />{" "}
                </Box>
                <Typography sx={{ textAlign: "center" }}>{name}</Typography>
              </Box>
            );
          })}
        </Box>

        <Grid item xs={12} sx={{ paddingBottom: "50px", paddingTop: "50px" }}>
          <Typography
            align="center"
            sx={{
              color: "#D0AC54",
              fontWeight: "500",
              fontSize: { sm: "25px", md: "20px" },
            }}
          >
            READ MORE +
          </Typography>
        </Grid>
      </PageWidth>
    </div>
  );
};

export default Retail;
