import React from 'react';
import { Grid, Box, Typography,  } from '@mui/material';
import Student from '../../../public/Images/keypoints/student.svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ClassNames } from '@emotion/react';

const icon={style:
  {color:"#003D32",
marginRight:"10px"
}}
const Keypoints = () => {

  return (
    <Box>
      <Grid container >
        {/* {/ Right part with image /} */}
        <Grid item xs={12} xl={6} 
       
         >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              textAlign: 'center',
            }}
          >
            <img src={Student} alt="Student" style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
        </Grid>

        {/* {/ Left part with form /} */}
        <Grid item xs={12} xl={6} >
          <Box
            sx={{
              padding: 2,
              display:'flex',
              flexDirection:"column",
              alignItems:"flex-start",
              mt:"20px",mb:"auto"
             
            }}
          >
            <Typography variant="h2"  sx={{fontSize:"26px",fontWeight:"700"}}>
              Keypointes:
            </Typography>
            <Box sx={{height:"20rem",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
            <Box sx={{
                 alignItems:"center",
              display:"flex",
              flexDirection:"row",
              
              
              
            }}>

            <CheckCircleIcon style={icon.style}/>
            <Typography variant="body1" className={ClassNames.iconText}>
                Road Map to quality written NDA exam
            </Typography>
            </Box>
            <Box sx={{
                 alignItems:"center",
              display:"flex",
              flexDirection:"row",
              
              
            }}>
             <CheckCircleIcon color="sucess" style={icon.style}/>
            <Typography variant="body1" className={ClassNames.iconText}>
                Road Map to quality written NDA exam
            </Typography>
            </Box>
            <Box sx={{
                 alignItems:"center",
              display:"flex",
              flexDirection:"row",
              
              
            }}>
             <CheckCircleIcon color="sucess" style={icon.style}/>
            <Typography variant="body1" className={ClassNames.iconText}>
                Road Map to quality written NDA exam
            </Typography>
            </Box>
            <Box sx={{
                 alignItems:"center",
              display:"flex",
              flexDirection:"row",
              
              
            }}>

            <CheckCircleIcon color="sucess" style={icon.style}/>
            <Typography variant="body1" className={ClassNames.iconText}>
                Road Map to quality written NDA exam
            </Typography>
            </Box>
            <Box sx={{
                 alignItems:"center",
              display:"flex",
              flexDirection:"row",
                          
            }}>

            <CheckCircleIcon  style={icon.style}/>
            <Typography variant="body1" className={ClassNames.iconText}>
                Road Map to quality written NDA exam
            </Typography>
            </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Keypoints;