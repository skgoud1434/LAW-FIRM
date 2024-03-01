import React from 'react'
import Icon from "./pics/Group 19.png"
import "./TextFolder/TextFolder.css"
export default function ThirdContainer() {
  return (
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

  )
}
