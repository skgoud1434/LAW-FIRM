import React from 'react'
import  './TextFolder/TextFolder.css'
import FirstContainer from './FirstContainer'
import SecondContainer from './SecondContainer'
import ThirdContainer from './ThirdContainer.jsx'
import FourthContainer from './FourthContainer'
import FifthContainer from './FifthContainer'
import SixthContainer from './SixthContainer'
import SeventhContainer from './SeventhContainer'
import EigthContainer from './EigthContainer'
import NinethContainer from './NinethContainer'

export default function App() {
  return (
     <center>
    <div className="container">    {/* <TextFolder />
         */}
         <FirstContainer />
         <SecondContainer />
       <ThirdContainer />
        <FourthContainer />
        <FifthContainer />
        <SixthContainer />
        <SeventhContainer />
        <EigthContainer />
        <NinethContainer />
    </div>
    </center>
  )
}


 

