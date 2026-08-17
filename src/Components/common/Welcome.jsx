import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Welcome() {
   
  const  texts = [
    "Welcome To My Portfolio",
    2000,
    'Nice to see you ',
    2000,
  "Professional Accountant",
  2000,
  "Financial Accuracy & Trust",
  2000,
  "Turning Numbers Into Insights",
  2000,
  "Helping Businesses Grow",
  2000,
  "Smart Financial Solutions",
  2000,
  "Expert In Accounting & Reporting",
  2000,
  "Managing Finances With Precision",
  2000,
  "Your Partner In Financial Success",
  2000,
  "Reliable Accounting Services",
  2000,
  "Driven By Accuracy & Integrity",
  1000,
  "Welcome To My Portfolio",
];


  return (
   <>
    <div className='welcome wellcomeBg rounded-top-3 text-light d-flex position-relative justify-content-center align-items-center' >
     <img src="/Portfolio/imgs/Nova.png" className='rounded-pill m-2 position-absolute top-0 start-0' alt="Nova" width={60}/>
         <div className='text display-5 fw-bold text-light'>
            <i> <TypeAnimation style={{fontSize:'30px'}} speed={30} cursor={false} omitDeletionAnimation repeat='2' sequence={texts} /></i>
         </div>
    </div>
   </>
  )
}

export default Welcome
