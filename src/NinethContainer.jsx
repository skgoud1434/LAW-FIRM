import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import vector from "./pics/Vector.png"
import "./TextFolder/TextFolder.css"

export default function NinethContainer() {
  return (


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
    
    )
}
