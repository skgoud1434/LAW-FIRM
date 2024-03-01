import React from 'react'
import image9 from   "./pics/Ellipse 14 (2).png"
import image10 from   "./pics/Ellipse 15 (1).png"
import image11 from   "./pics/Ellipse 15 (2).png"
import image12 from   "./pics/Ellipse 15 (3).png"
import image13 from   "./pics/Ellipse 15 (4).png"
import image14 from   "./pics/Ellipse 15.png"
import image15 from   "./pics/Ellipse 16.png"
import "./TextFolder/TextFolder.css"

export default function SixthContainer() {
  return (
   
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
  )
}
