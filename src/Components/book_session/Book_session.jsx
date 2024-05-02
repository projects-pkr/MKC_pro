import React from 'react'
import './book_session.css';
import Grid from '@mui/material/Grid'
import Box  from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function Book_session() {
  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 const text_box={key:{width:{xl:'400px',xs:"300px"}, height:'40px'}};
 const [age, setAge] = React.useState('');

 const handleChange = (event) => {
   setAge(event.target.value);
 };
  return (
    <>
    
    <Grid container spacing={0} sx={{ marginTop:{xl:'30px',md:"15px",xs:'5px',height:"100vh",position:'relative'}}} >
        {/*------------- part-one--------------------- */}
        <Grid item xl={6} md={8} xs={12} >
          <Box className="mainbox" sx={{marginLeft:{xl:'50px',md:"20px",sx:'5px'},
        width:{xl:"500px",xs:"400px"},  height:'600px'
        }}><Box className="heading-box" sx={{ width: {xl:"480px",xs:"400px"}}}>
        <Typography variant="h2" style={{fontSize:"20px",fontWeight:"400"}}>Book your free session</Typography>
    <Typography  >Lorem ipsum, dolor sit amet consectetur</Typography>
     </Box>
        <Box  sx={{marginLeft:"40px"}} >
            
          <TextField type="text"placeholder='Full Name'className='text-box' sx={text_box.key}/>
          <TextField type="text"placeholder='Father Name'className='text-box'sx={text_box.key}/>
          <TextField type="text"placeholder='Mobile Number'className='text-box'sx={text_box.key}/>
          <TextField type="text"placeholder='Email Id'className='text-box'sx={text_box.key}/>
          <FormControl sx={{width:{xl:'400px',xs:"300px"}, marginTop:"40px",height:'40px'}}>
        <InputLabel id="demo-simple-select-label" >Age</InputLabel>
        <Select labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange} >
          <MenuItem value={10}>menuitem-1</MenuItem>
          <MenuItem value={20}>menuitem-2</MenuItem>
          <MenuItem value={30}>menuitem-3</MenuItem>
        </Select>
      </FormControl>
      <Typography style={{color:"grey",marginTop:"20px"}}>Why you want to join NDA?</Typography>
     <Box sx={{display:"flex",alignItems:"center"}}><Checkbox {...label} defaultChecked style={{color:"green"}} /><Typography>Zoom Call</Typography></Box> 
      
        </Box>
        <Button sx={{ width:{xl:"400px",xs:"300px"},backgroundColor:"#003D32",color:"white" ,'&:hover':{color:"white",backgroundColor:'green'}}}>Submit</Button>
        </Box>
        </Grid>
{/* ---------------part-two---------------- */}
        <Grid item xl={6} md={4} xs={12} 
        // sx={{marginTop:{xl:'0px',xs:"0px"}}}
        > 
        <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              textAlign: 'center',
            }}><img src="/public/Images/book session/image-01.png" alt="image" style={{ maxWidth: '100%', height: 'auto' }}/></Box>
        
        </Grid>
      
    </Grid>

      
    </>
  )
}
