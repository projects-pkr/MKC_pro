import React from 'react'
import './footer.css'
import Container from '@mui/material/Container'

import { Box, Grid, Stack, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Footer() {
    
  return (
    <>
     <Box sx={{backgroundColor
        :"#DFDDDD"}}>
            <Box sx={{padding:"50px 40px 0px 40px",marginTop:"80px"}}>
        <Grid container spacing={0}  >

            
            {/* grid-1 */}
            <Grid item xl={4} md={6} xs={12}>
                <Box>
                    <Typography className='heading'  >Logo</Typography>
                    <Typography  className='list-item' style={{paddingRight:"50px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                    <Box  className="icon" sx={{margin:"20px 0px 10px 0px"}}>
                       <a href="#"> <FacebookIcon className="icon"/></a>
<a href="#"><TwitterIcon className="icon"/></a>
<a href="#"><InstagramIcon className="icon"/></a>
<a href="#"><YouTubeIcon className="icon"/></a>
                    </Box>
                </Box>
            </Grid>
            {/* grid-2*/}
            <Grid item xl={2} md={6} xs={12}><Box><Typography variant="h4"className='heading'>About</Typography>
                <ul>
                    <li className='list'><a href="#" className='list-item'>Menu</a></li>
                    <li className='list'><a href="#" className='list-item'>Features</a></li>
                    <li className='list'><a href="#" className='list-item'>News & Bloges</a></li>
                    <li className='list'><a href="#" className='list-item'>Help & Supports</a></li>
                </ul></Box></Grid>
             {/* grid-3 */}
            <Grid item xl={3} md={6} xs={12}><Box>
                <Typography variant="h4" className='heading'>Company</Typography>
                <ul>
                    <li className='list'><a href="#" className='list-item'>How we work</a></li>
                    <li className='list'><a href="#" className='list-item'>Terms of service</a></li>
                    <li className='list'><a href="#" className='list-item'>Pricing</a></li>
                    <li className='list'><a href="#" className='list-item'>FAQ</a></li>
                </ul>
                </Box></Grid> 
            {/* grid-4*/}
            <Grid item xl={3} md={6} xs={12}><Box><Typography variant="h4" className='heading'>Contact Us</Typography>
                <ul>
                    <li className='list'><a href="#" className='list-item'>Lorem ipsum dolor sit amet consectetur. Lacin ornare quam ut.</a></li>
                    <li className='list'><a href="#" className='list-item'>+1 202-918-2132</a></li>
                    <li className='list'><a href="#" className='list-item'>mkc@mail.com</a></li>
                    <li className='list'><a href="#" className='list-item'>www.mkceducation.com</a></li>
                </ul></Box></Grid>
             
          
        </Grid>
        <Box><hr /></Box>
        <Box sx={{display:"flex",alignItems:"center",paddingBottom:"50px"}}> 
            <Typography  className='text'>MADE WITH </Typography>
            <Typography  className='text'><FavoriteIcon style={{color:'red',fontSize:"14px"}}/> </Typography>
            <Typography className='text' >IN INDIA By:  </Typography>
           <a href="#"><Typography  className='text' >EVD Technology  </Typography></a> 
        </Box>
        </Box>
    </Box>    
    </>
  )
}
