import React from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
export default function Signup() {
  return (
    <>



 
      <Grid container sx={{ backgroundColor: "#003D32", justifyContent: "center",marginTop:"80px"}}>
        <Box sx={{ maxWidth: "650px", color: "white", textAlign: "center", padding: "20px" }}>
          <Typography sx={{ fontSize: "30px" }}>If you interest our course and know our latest news Please subscribe our newsletter</Typography>
          <Box sx={{marginTop:"20px",display:"flex", alignItems:"center",justifyContent:"space-around"}}>
          <Box sx={{width:{xl:"200px",md:"100px",xs:"50px"}}}><hr style={{
    border: "none",
    height: "2px",
    background: "linear-gradient(to right,#003D32, #FFFFFF)" 
  }}/>
  </Box>
          <Button sx={{ backgroundColor: "#FFB800", fontSize: "18px", color: "black", padding: "10px",width: "190px", borderRadius: "8px", textTransform: "capitalize",  "&:hover": { backgroundColor: "orange" } }}>Sign Up today</Button>
          <Box sx={{width:{xl:"200px",md:"100px",xs:"50px"}}}><hr  style={{
    border: "none",
    height: "2px",
    background: "linear-gradient(to left,#003D32, #FFFFFF)" }}/></Box>
          </Box>
        </Box>      
      </Grid>
    </>
  )
}
