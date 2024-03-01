import React from 'react'
import image7 from   "./pics/Ellipse 14.png"
import image8 from   "./pics/Ellipse 14 (1).png"
import "./TextFolder/TextFolder.css"
import image9 from   "./pics/Ellipse 14 (2).png"
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
export default function FifthContainer() {
  return (
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
  )

}
