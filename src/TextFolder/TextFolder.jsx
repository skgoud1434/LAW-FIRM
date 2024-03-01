import Tooltip from '@mui/material/Tooltip';
import React from 'react'
import "./TextFolder.css"
import image from "../pics/Image.png"
import input from "../pics/Group 11.png"
import Icon from "../pics/Group 19.png"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image1 from   "../pics/Rectangle 3652.png"
import image2 from   "../pics/Rectangle 3651.png"
import image3 from   "../pics/Rectangle 3653.png"
import image4 from   "../pics/Rectangle 3654.png"
import image5 from   "../pics/Rectangle 3655.png"
import image6 from   "../pics/Rectangle 3656.png"
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import image7 from   "../pics/Ellipse 14.png"
import image8 from   "../pics/Ellipse 14 (1).png"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import image9 from   "../pics/Ellipse 14 (2).png"
import image10 from   "../pics/Ellipse 15 (1).png"
import image11 from   "../pics/Ellipse 15 (2).png"
import image12 from   "../pics/Ellipse 15 (3).png"
import image13 from   "../pics/Ellipse 15 (4).png"
import image14 from   "../pics/Ellipse 15.png"
import image15 from   "../pics/Ellipse 16.png"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import vector from "../pics/Vector.png"
    export default function TextFolder() {
      return (

        <center>
        <div className="container">
          <div className="firstContainer">
           <div className='firstDiv'>
            <nav>
              <div style={{display:"flex",justifyContent:"space-around"}}>
                <img src={vector} alt="" style={{width: "30.41px",height: "30.3px",top: "61px",left: "153px"}}/>
                 <p>IGSTUDIO</p>
           </div>
               <div className='options'> 
                <p>Home</p>
                <p>Attorney</p>
                <p>Practice Areas</p>
                <p>About Us</p>
               </div>
               <button>
                Contact Now
               </button>
            </nav>
           <div className='secContainer' style={{display:"flex",justifyContent:"space-between"} }>  
            <div style={{width:"50%"}}>
              <p className='heading'>You don’t have to <br/>
                        Fight them Alone.</p>
       <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
             {/* <input type="text" name="" id="" />
             <input type="submit" name="" id="" /> */}
             {/* <img src={input} alt="" />*****************8888 */}
              <div style={{width:"438px",height: "74px",top: "615px",left: "154px",borderRadius:"43px",display:"flex"}}>
             <input type="text" placeholder='Enter your email address' style={{width: "438px",height: "62px",top:"621px",left: "449px",borderRadius: "43px",opacity:"10%",backgroundColor: "rgba(255, 255, 255, 1)"} }/>
             <input type="submit" value= "Let's Talk"   style={{width: "137px",height: "62px",top:"621px",left: "449px",borderRadius: "43px",backgroundColor:"rgba(227, 183, 72, 1)"}}/>
             </div>
           
            </div>
      <div style={{backgroundColor:" rgba(227, 183, 72, 1)",width: "467.71px" ,height: "362px",top: "249px",left: "820px",borderRadius:"50px",marginTop: "167px"}}>
            <img src={image} alt="" style={{marginTop:"-150px"}}/>
            </div>
              </div>
            </div> 
            </div>

            <div className="secondContainer">

           <div className='secondDiv'>
                <div>
                  <p className='heading' style={{LineHeight:"87.22px"}}>Let's Introduce Ourself</p>
                </div><hr  style={{color:"white",height:"150px"}}/>
                <div>
                  <div style={{textAlign:"left"}}>
                  <span  className='SecondDivHeading2' style={{color:"white",LineHeight:"52.01px"}}>Criminal Lawyer</span>
                  {/* className='lorem' */}
                  <p >Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</p>
                </div>
                </div>
                </div>



           </div>

           <div className="thirdContainer" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"space-between",marginTop:"150px"}}>
           <div className='thirdDiv'>
           <div>
             <h1 style={{color:"white",textAlign:"center"}}  className='heading'>Why Choose us?</h1>
             </div>
             <div className="gridContainer" style={{display:"flex"}}>
               <div className='Gridcard'>
                     <img src={Icon} alt="" />
                     <p>98% Success Rate</p>
                     <p className='lorem'>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
               </div>
               <div className='Gridcard'>
               <img src={Icon} alt="" />
               <p>100% Success Rate</p>
               <p>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
               </div>
               <div className='Gridcard'>
               <img src={Icon} alt="" />
              <p> 100% Success Rate</p>
           <p className='lorem'>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
               </div>
             </div>

            </div>
            </div>


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


            <div className="fifthContainer">

            <div className="fifthDiv">
           
                   <div className="header">
                    <p className='heading'>What says our
happy Clients </p>
                  <div className="icons">
                              <ArrowForwardRoundedIcon style={{color:"white",width: "90.61px",height: "90.61px",top: "3648.24px",left: "1090px"}} />
                             < ArrowBackRoundedIcon style={{color:"white",width: "90.61px",height: "90.61px",top: "3648.24px",left: "1090px"}} />

                  </div>
                   </div>
                     <div className='cardContainer' style={{display:"flex",textAlign:"left",justifyContent:"space-between"}}>
                   <div className="card" >
                         <img src={image7} alt="" />
                         <p>Jane Cooper</p>
                         <h6 style={{color:"white"}}>Ceo of Hunt</h6>
                         <p className='lorem'>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia</p>
            
                   </div>

                   <div className="card">
                   <img src={image8} alt="" />
                   <p>Devon Lane</p>
                   <h6  style={{color:"white"}}>Ceo of Hunt</h6>
                   <p className='lorem'>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia</p>
            

                         </div>

                         <div className="card">
                         <img src={image9} alt="" />
                        <p> Robert Fox</p>
                        <h6 style={{color:"white"}}>Ceo of Hunt</h6>
                        <p className='lorem'>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia</p>
            
                         </div>
                         </div>


              
            </div>
            </div>



                  <div className="sixthContainer">
            <div className="sixthDiv" style={{display:"flex",justifyContent:"center", flexDirection:"column"}}>



                     <p className='heading' style={{textAlign:"center"}}>Our Team</p>

                    <div className='chipContainer' style={{display:"flex",justifyContent:"space-between"}}>

                       <div className='chip'>
                        <img src={image14} alt="" />
                           <div>
                            <p>Danial Def</p>
                            <p>301 Cases</p>
                           </div>
                      </div> 
                      <div className='chip'  style={{backgroundColor:"rgba(227, 183, 72, 1)"}}>
                        <img src={image15} alt="" />
                           <div>
                            <p>Danial Def</p>
                            <p>301 Cases</p>
                           </div>
                      </div>

                      <div className='chip' >
                <img src={image10} alt="" />
                           <div>
                            <p>Sanfole</p>
                            <p>850 Cases</p>
                           </div>

                     </div>

                    </div>

                    <div className='chipContainer' style={{display:"flex",justifyContent:"space-between"}}>

                      <div className='chip'>
                        <img src={image11} alt="" />
                           <div>
                            <p>Danial Def</p>
                            <p>301 Cases</p>
                           </div>
                      </div>

                      <div className='chip'>
                      <img src={image12} alt="" />
                           <div>
                            <p>Sanfole</p>
                            <p>850 Cases</p>
                           </div>

                     </div>

                   <div className='chip'>

                   <img src={image13} alt="" />
                           <div>
                            <p>Cesforila</p>
                            <p>470 Cases</p>
                           </div>
 
                       </div>

                    </div>
                     
                     <div>
                     </div>

                     </div>  

            </div>


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


          <div className="eigthContainer" style={{backgroundColor:" rgba(71, 71, 71, 0.5)"}}>



           
            
                    
              
               <p className='eigthContainerDiv'>Subscribe Our Newsletter</p>
               <div style={{spacing:"40"}}>
                
               <input type="text" name="" id="" placeholder='Name : ' /> 

               
               
               <input type="text" name="" id="" placeholder="Enter your Email" />

             <button className='send'>SEND</button>
               
               </div>

            
              
             {/* </div> */}


          </div>


          <div className="ninthContainer">

          <footer  >
            <div  style={{display:"flex",justifyContent:"space-between"}}>

              <div style={{display:"flex"}}>
             
              <img src={vector} alt="" style={{width: "30.41px",height: "30.3px",top: "61px",left: "153px",paddingTop:"9px"}}/>
               <p> IGSTUDIO</p>
               </div>

                   {/* <div className='totalOne' style={{width:"80%"}}> */}
               {/* <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}> */}

               {/* <div> */}
               
               <div className='options' style={{display:"flex"}}>
              
                <p>Home</p>
                <p>Attorney</p>
                <p>Practice Areas</p>
                <p>About Us</p>
                </div>
              {/* <div  style={{color:"orange",display:"flex",justifyContent:"space-between"}}> */}
               <div style={{width: "187px",height: "30px",top: "6579px",left:"1111px",marginTop:"12px",marginLeft:"15px"}} >
                   <InstagramIcon  className='icon'/>
                  <FacebookIcon className='icon' />
                  <TwitterIcon className='icon'/>
            {/* </div> */}
            </div>
            {/* </div> */}
          <div>
          </div>
          </div>
            <div style={{display:"flex",justifyContent:"space-",aligbetweennItems:"center",    marginTop: "75px",    marginRight:"100px"}}>
              
              <p>© 2020 Acme. All right reserved.</p>
              
              
              <p>Privacy Policy</p>
              
              <p>Terms of Service</p>
            
 
            </div>
           
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}




            </footer>





          </div>


            {/* <div className="seventhhalfDiv">
              <p className='heading'>Do I need a personal injury report?</p>
              <p  className="sdivpara" style={{textAlign:"left"}}>Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p><hr />

  <p style={{textAlign:"left"}} className="heading">What should I do right after car accidect</p><hr />
  <p style={{textAlign:"left"}} className="heading">How much is my case worth?</p><hr />
  <p style={{textAlign:"left"}} className="heading">What should I do right after car accidect</p><hr />
  <p style={{textAlign:"left"}} className="heading">How much is my case worth?</p>

          
            </div> */}
         
         

          
            {/* </div> */}

         {/* </div>  */}
         </div>
        </center>
      )
    }
    
       
    
    

     