import React from 'react'
import Links from '../links';
import "./styles.css"
function WorkCard() {
  return (
    <div  className="position-relative border pb-5 m-5 title  animate__animated animate__fadeInBottomRight animate__delay-1s">
    <div className='img position-relative' > <img  src={require("../../assets/imgs/img2.jpg")} alt="story" className='w-100 ' />
  
    </div>
        <p className='fs-1 fw-bold m-5 animate__animated animate__fadeInBottomRight animate__delay-4s'>How to open a crypto wallet and buy your first NFT</p>
        <span className='ms-5 text-gray animate__animated animate__fadeInBottomRight animate__delay-4s'>02-03-2022</span>
       
        <Links></Links>


    </div>
  )
}

export default WorkCard