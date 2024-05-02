import React from "react";

import { Box, Grid } from "@mui/material";
import img from"./../../../public/Images/main page/image3.svg"
const Banner = () => {
  return (
    <>
      <Grid container maxWidth={'xl'}>
        <Grid item xs={12} md={12} xl={12}>
          <Box
            sx={{
              marginTop: "15px",
              
            }}
          >
            <img src={img} alt="Bannerimage"  style={{width:"100%"}} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;