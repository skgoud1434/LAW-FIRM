import React from 'react'
import Accordion from '@mui/material/Accordion';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import "./TextFolder/TextFolder.css"

export default function SeventhContainer() {
  return (
    <div className="seventhContainer">
    <p className='heading'>FAQ</p>
    <div style={{display:"flex", justifyContent:"space-between",textAlign:"left"}}>
         <div className="firstHalf7">
         
          <p className="seventhPara" style={{textAlign:"left",width:"45%"}}>Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. </p>
         </div>
         <div className='Accordion'>
         <Accordion>
  <AccordionSummary
    expandIcon={<AddRoundedIcon style={{color:"white"}}/>}
    aria-controls="panel1-content"
    id="panel1-header"
  >
    <Typography style={{color:"white"}}>Do I need a personal injury report?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
    Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
    </Typography>
  </AccordionDetails>
</Accordion>

{/* *****************************88 */}

<Accordion>
  <AccordionSummary
    expandIcon={<AddRoundedIcon style={{color:"white"}}/>}
    aria-controls="panel1-content"
    id="panel1-header"
  >
    <Typography style={{color:"white"}}>Do I need a personal injury report?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
    Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
    </Typography>
  </AccordionDetails>
</Accordion>



<Accordion>
  <AccordionSummary
    expandIcon={<AddRoundedIcon style={{color:"white"}}/>}
    aria-controls="panel1-content"
    id="panel1-header"
  >
    <Typography style={{color:"white"}}>Do I need a personal injury report?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
    Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
    </Typography>
  </AccordionDetails>
</Accordion>




<Accordion>
  <AccordionSummary
    expandIcon={<AddRoundedIcon style={{color:"white"}}/>}
    aria-controls="panel1-content"
    id="panel1-header"
  >
    <Typography style={{color:"white"}}>Do I need a personal injury report?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
    Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
    </Typography>
  </AccordionDetails>
</Accordion>


         </div>

      



         </div>

    </div>
  )
}
