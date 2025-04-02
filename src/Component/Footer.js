import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='w-100 mt-5 pt-4 backfooter text-center footer text-white'>
        <div  className='pt-3 mb-2 pb-1 h3 textlogo'>Msh<span className='mshcolour' >quiz</span></div>
        <div  className='info px-4'>Yon can connect with me on diffrent platform . click the below icon connect with me.</div>
         <div  className='d-flex justify-content-center align-items-center gap-3 my-3 text-black '>
          <Link to={"https://www.linkedin.com/in/mahesh-patil-ab1259233"} ><p className='iconsfooter d-flex align-items-center justify-content-center '><FaLinkedin/></p></Link>
          <Link to={"https://www.instagram.com/tare_laine_hu_?igsh=MjFmZG9sZng4bXRj"} ><p className='iconsfooter d-flex align-items-center justify-content-center'><FaInstagramSquare/></p></Link>
          <Link to={"https://x.com/mshpatil2712?t=rY2d4doITeLDLR1Eg6qIKQ&s=08"} ><p className='iconsfooter d-flex align-items-center justify-content-center'><FaSquareXTwitter/></p></Link>             
         </div>
         <div className='pb-2 info'><hr></hr> <p>@designed by mahesh patil</p></div>
       
    </div>
  )
}

export default Footer