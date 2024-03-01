import React from 'react'
import image1 from   "./pics/Rectangle 3652.png"
import image2 from   "./pics/Rectangle 3651.png"
import image3 from   "./pics/Rectangle 3653.png"
import image4 from   "./pics/Rectangle 3654.png"
import image5 from   "./pics/Rectangle 3655.png"
import image6 from   "./pics/Rectangle 3656.png"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./TextFolder/TextFolder.css"

export default function FourthContainer() {
  return (
   
    <div className="fourthContainer">
    <div className='fourthDiv'>
      <h1  style={{color:"white",textAlign:"center"}}  className='heading'>
      Area of Practices
      </h1>

     <Box sx={{ flexGrow: 1 }}>
<Grid container spacing={-10} style={{rowGap:30,columnGap:100}}>
<div style={{display:"flex", gap: "20px"}}>
<Grid item xs={8}>
<img src={image1} alt=""  className='gridImage2'/>
<p className='imageTitle'>Business Law</p>
</Grid>

<Grid item xs={4} >
<img src={image2} alt="" className='gridImage2'/>
<p className='imageTitle'>Partnership LAW</p>
</Grid>
</div>
<div style={{display:"flex",gap: "20px"}}>
   <Grid item xs={4} >
<img src={image3} alt="" className='gridImage2'/>
<p className='imageTitle'>REAL ESTATE LAW</p>


</Grid>
<Grid item xs={8}>
<img src={image4} alt="" className='gridImage2'/>
<p className='imageTitle'>BUSINESS LAW</p>

</Grid>
</div>
<div style={{display:"flex",gap: "20px"}}>
<Grid item xs={8}>
<img src={image6} alt=""  className='gridImage2'/>
<p className='imageTitle'>LANDLORD DISPUTES</p>
</Grid>
<Grid item xs={4}>
<img src={image5} alt="" className='gridImage2'/>
<p className='imageTitle'>ELDER ABUSE</p>
</Grid>
</div>
</Grid>
</Box>
         


    </div>
    </div>

  )
}
