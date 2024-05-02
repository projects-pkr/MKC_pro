import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Box, Container, Typography } from "@mui/material";




function Our_menters() {
  const settings = {
    dots:true,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        },
        breakpoint: 776,
        settings: {
          slidesToShow: 2

        },
        breakpoint: 556,
        settings: { slidesToShow: 1 }
      },

    ],
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <>
      <Container sx={{ backgroundColor: "#F3F3F3",height:"70vh",width:"100%",position:"relative", marginTop:{xl:'0px',md:"20px",xs:"120px"}}} >
        <Box sx={{ paddingTop: "20px" }}>
          <Typography variant="h2" style={{
            fontSize: "36px",
            fontWeight: "700",
            marginTop: "1rem",
            color: "#646878",
            textAlign: "center",
            padding: "10px"
          }}> Our Menters</Typography>
          <Typography variant="h5" style={{ fontSize: "14px", color: "#646878", textAlign: "center", fontWeight: "200" }}>Get to know the faces behind the scrnes and learn about the values that drived us </Typography>
        </Box>
        {/* -------------------------------------------slider box------------------------------------- */}
        <Box sx={{ marginTop: "40px" }}>
          <Slider {...settings} >

            {/* ----------slider page-1 -------------- */}
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{height: "12rem", width: "12rem", border: "1px dashed black", borderRadius: "50%",
                  display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                  <Box sx={{ height: "11rem", width: "11rem", backgroundColor: "#D9D9D9", borderRadius: "50% " }}><img src="/public/Images/our menters/Profile Image Placeholder 6.png" alt="image" style={{ width: "11rem", height: "11rem"}} />
                  </Box>
                </Box>
                <Typography variant="h2" style={{
                   fontSize: "24px",
                  fontWeight: "700",
                  color: "black",
                  textAlign: "center",
                }}>
                   Aditya</Typography>
                <Typography variant="h5" style={{ fontSize: "14px", color: "#646878", textAlign: "center", fontWeight: "600" }}>Teacher</Typography>

              </Box>
            </Box>
            {/* ----------slider page-2-------------- */}
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{height: "12rem", width: "12rem", border: "1px dashed black", borderRadius: "50%",
                  display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                  <Box sx={{ height: "11rem", width: "11rem", backgroundColor: "#D9D9D9", borderRadius: "50% " }}><img src="/public/Images/our menters/Profile Image Placeholder 6.png" alt="image" style={{ width: "11rem", height: "11rem"}} />
                  </Box>
                </Box>
                <Typography variant="h2" style={{
                   fontSize: "24px",
                  fontWeight: "700",
                  color: "black",
                  textAlign: "center",
                }}>
                   Aditya</Typography>
                <Typography variant="h5" style={{ fontSize: "14px", color: "#646878", textAlign: "center", fontWeight: "600" }}>Teacher</Typography>

              </Box>
            </Box>
            {/* ----------slider page-3-------------- */}
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{height: "12rem", width: "12rem", border: "1px dashed black", borderRadius: "50%",
                  display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                  <Box sx={{ height: "11rem", width: "11rem", backgroundColor: "#D9D9D9", borderRadius: "50% " }}><img src="/public/Images/our menters/Profile Image Placeholder 6.png" alt="image" style={{ width: "11rem", height: "11rem"}} />
                  </Box>
                </Box>
                <Typography variant="h2" style={{
                   fontSize: "24px",
                  fontWeight: "700",
                  color: "black",
                  textAlign: "center",
                }}>
                   Aditya</Typography>
                <Typography variant="h5" style={{ fontSize: "14px", color: "#646878", textAlign: "center", fontWeight: "600" }}>Teacher</Typography>

              </Box>
            </Box>
            {/* ----------slider page-4-------------- */}
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{height: "12rem", width: "12rem", border: "1px dashed black", borderRadius: "50%",
                  display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                  <Box sx={{ height: "11rem", width: "11rem", backgroundColor: "#D9D9D9", borderRadius: "50% " }}><img src="/public/Images/our menters/Profile Image Placeholder 6.png" alt="image" style={{ width: "11rem", height: "11rem"}} />
                  </Box>
                </Box>
                <Typography variant="h2" style={{
                   fontSize: "24px",
                  fontWeight: "700",
                  color: "black",
                  textAlign: "center",
                }}>
                   Aditya</Typography>
                <Typography variant="h5" style={{ fontSize: "14px", color: "#646878", textAlign: "center", fontWeight: "600" }}>Teacher</Typography>

              </Box>
            </Box>
            {/* ----------slider page-5-------------- */}
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{height: "12rem", width: "12rem", border: "1px dashed black", borderRadius: "50%",
                  display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                  <Box sx={{ height: "11rem", width: "11rem", backgroundColor: "#D9D9D9", borderRadius: "50% " }}><img src="/public/Images/our menters/Profile Image Placeholder 6.png" alt="image" style={{ width: "11rem", height: "11rem"}} />
                  </Box>
                </Box>
                <Typography variant="h2" style={{
                   fontSize: "24px",
                  fontWeight: "700",
                  color: "black",
                  textAlign: "center",
                }}>
                   Aditya</Typography>
                <Typography variant="h5" style={{ fontSize: "14px", color: "#646878", textAlign: "center", fontWeight: "600" }}>Teacher</Typography>

              </Box>
            </Box>



          </Slider>
        </Box>
      </Container>
    </>

  );
}

export default Our_menters;
