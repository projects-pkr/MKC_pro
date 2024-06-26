import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Box, Container, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './Our_performers.css'
export default function our_performer() {




  const settings = {
    dots:true,  
    className: "center",
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
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
    
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#F3F3F3",position:"relative",height:"80vh" }} >
        <Box sx={{ paddingTop: "20px" }}>
          <Typography variant="h2" style={{
            fontSize: "36px",
            fontWeight: "700",
            marginTop: "1rem",
            color: "#646878",
            textAlign: "center",
            // padding: "10px"
          }}> Our performer</Typography>
          <Typography variant="h5" style={{ fontSize: "14px", color: "#646878", textAlign: "center", fontWeight: "200" }}>Get to know the faces behind the scrnes and learn about the values that drived us </Typography>
        </Box>
        {/* -------------------------------------------slider box------------------------------------- */}
        <Box sx={{ marginTop: "40px", overflow:"hidden",width:"82%",height:"70vh",marginLeft:{xl:"150px",md:"100px",xs:'30px'}}}>
          <Slider  {...settings}  >

            {/* ----------slider page-1 -------------- */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Card sx={{ maxWidth: 400}}>
        <CardActionArea>
            <Box sx={{ padding: "10px" }}>
                <CardMedia
                    component="img"
                    height={'280px'}
                    textAlign={"center"}
                    image="/public/Images/our performer/image-removebg-preview (44) 3.png"
                    alt="green iguana"
                    style={{ backgroundColor: "#C9ECF9", borderRadius: "5px", objectFit: 'contain' }} 
                />
                <CardContent>
                    <Typography variant="h2" style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "black",
                        textAlign: "center",
                    }}>
                        Mukesh Sharma
                    </Typography>
                    <Typography variant="h5" style={{ fontSize: "14px", color: "black", textAlign: "center", paddingTop: "10px" }}>NDA-12</Typography>
                </CardContent>
            </Box>
        </CardActionArea>
    </Card>
</Box>

            {/* ----------slider page-2-------------- */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
            <Box sx={{ padding: "10px" }}>
                <CardMedia
                    component="img"
                    height={'280px'}
                    textAlign={"center"}
                    image="/public/Images/our performer/image-removebg-preview (44) 3.png"
                    alt="green iguana"
                    style={{ backgroundColor: "#C9ECF9", borderRadius: "5px", objectFit: 'contain' }} 
                />
                <CardContent>
                    <Typography variant="h2" style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "black",
                        textAlign: "center",
                    }}>
                        Mukesh Sharma
                    </Typography>
                    <Typography variant="h5" style={{ fontSize: "14px", color: "black", textAlign: "center", paddingTop: "10px" }}>NDA-12</Typography>
                </CardContent>
            </Box>
        </CardActionArea>
    </Card>
</Box>

            {/* ----------slider page-3-------------- */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
            <Box sx={{ padding: "10px" }}>
                <CardMedia
                    component="img"
                    height={'280px'}
                    textAlign={"center"}
                    image="/public/Images/our performer/image-removebg-preview (44) 3.png"
                    alt="green iguana"
                    style={{ backgroundColor: "#C9ECF9", borderRadius: "5px", objectFit: 'contain' }} 
                />
                <CardContent>
                    <Typography variant="h2" style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "black",
                        textAlign: "center",
                    }}>
                        Mukesh Sharma
                    </Typography>
                    <Typography variant="h5" style={{ fontSize: "14px", color: "black", textAlign: "center", paddingTop: "10px" }}>NDA-12</Typography>
                </CardContent>
            </Box>
        </CardActionArea>
    </Card>
</Box>

            {/* ----------slider page-4-------------- */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
            <Box sx={{ padding: "10px" }}>
                <CardMedia
                    component="img"
                    height={'280px'}
                    textAlign={"center"}
                    image="/public/Images/our performer/image-removebg-preview (44) 3.png"
                    alt="green iguana"
                    style={{ backgroundColor: "#C9ECF9", borderRadius: "5px", objectFit: 'contain' }} 
                />
                <CardContent>
                    <Typography variant="h2" style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "black",
                        textAlign: "center",
                    }}>
                        Mukesh Sharma
                    </Typography>
                    <Typography variant="h5" style={{ fontSize: "14px", color: "black", textAlign: "center", paddingTop: "10px" }}>NDA-12</Typography>
                </CardContent>
            </Box>
        </CardActionArea>
    </Card>
</Box>

            {/* ----------slider page-5-------------- */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
            <Box sx={{ padding: "10px" }}>
                <CardMedia
                    component="img"
                    height={'280px'}
                    textAlign={"center"}
                    image="/public/Images/our performer/image-removebg-preview (44) 3.png"
                    alt="green iguana"
                    style={{ backgroundColor: "#C9ECF9", borderRadius: "5px", objectFit: 'contain' }} 
                />
                <CardContent>
                    <Typography variant="h2" style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "black",
                        textAlign: "center",
                    }}>
                        Mukesh Sharma
                    </Typography>
                    <Typography variant="h5" style={{ fontSize: "14px", color: "black", textAlign: "center", paddingTop: "10px" }}>NDA-12</Typography>
                </CardContent>
            </Box>
        </CardActionArea>
    </Card>
</Box>



          </Slider>
        </Box>
      </Box>
    </>

  );
}


