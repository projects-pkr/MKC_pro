import React from 'react'
import {Card,Box} from "@mui/material"
import image from "././../../../public/Images/header/image 2.svg"

const Navbar = () => {
  return (
    <>
        
        <Box sx={{marginLeft:"40px",marginTop:"20px"}} >
          <Box sx={{borderRight:"2px dashed #C9ECF9",width:"40vw"}}>
            <img src={image} alt="navbar header"style={{height:"100%",paddingRight:"10px",width:"35vw"}} />
            </Box>
        </Box>
       
       
             
    </>
  )
}

export default Navbar 