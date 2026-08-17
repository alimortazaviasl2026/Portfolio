import React from 'react'
import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

function ServiceCard() {
  return (
   <> 
   <div>
 <Card  className='fw-light text-center py-4 border-0 shadow-lg card-service' >
                         <Card.Img src='/imgs/design.png' className='w-25 mx-auto' height={68}/>
                    <Card.Body>
                         <Card.Title className='fontSize14' >
                             uI/uX design
                         </Card.Title>
                         <Card.Text className='fontSize13' style={{color:'var(--grayLow)'}}>
                           Mobile app, website design
                         </Card.Text>
                    </Card.Body>
 </Card>
   </div>
   
   </>
  )
}

export default ServiceCard


