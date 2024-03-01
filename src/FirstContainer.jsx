import React from 'react'
import image from "./pics/Image.png";
import vector from "./pics/Vector.png"
import "./TextFolder/TextFolder.css"

export default function FirstContainer() {
  return (
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
  )
}
