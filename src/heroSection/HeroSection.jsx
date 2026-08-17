import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ME from './Components/ME'
import { motion } from 'framer-motion';
import i18next from 'i18next';
import Shape from '../Components/common/Shape';
import { duration } from '@mui/material/styles';


function HeroSection({lang}) {
 const [time , setTime] = useState({})
    
    const days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];  
      const months = ["January","February","March","April","May", "June", "July","August","September", "October","November","December"]
       
     
    

  useEffect(()=>{
    const showTime = () => {
        const time = new Date()
        console.log(time.getDay());
        
        setTime({year:time.getFullYear(),month:time.getMonth(),day:time.getDay(),date:time.getDate()}) 
    }
    showTime()
  },[])





  return (
    <motion.div  initial={{ opacity: 0, y: '-100% ',filter:'blur(8px)'}}  animate={{ opacity: 1, y: 0, filter:'none' }} transition={{duration:2, type: "spring", ease:'easeIn'}} className='p-3 shadow rounded-top-2 position-relative ' style={{ direction:lang === 'fa' ?'rtl':'ltr'}}>
        <div className='fontSize14 position-absolute  top-0 end-0 m-3 border-bottom  pb-1  d-flex gap-1'>
             <span>{days[time.day === 6 ? 0 : time.day + 1]}</span>,
             <span>{time.date}</span>,
             <span>{months[time.month]}</span>,
             <span>{time.year}</span>
        </div>
       
       <Container fluid>
          <Row className='align-items-center '>
            <Col  sm={12} md={7}>
                <ME/>
             </Col>
             <Col sm={12}  md={5}>
               <img src="/imgs/3f9dcc1e-5e3d-46f8-97b3-927a68e5d9f3.jpg" className='w-100 rounded-3 mt-5' height={400} alt="user" />
             </Col>
             
          </Row>
       </Container>
       <Shape postion={{top:'50px' , right:'10px'}} type="circle" color='border-warning'/>
       <Shape postion={{bottom:'20px' , right:'500px'}} type="square" color='border-primary-subtle'/>
       <Shape postion={{top:'200px' , right:'300px'}} type="circle" color='border-warning'/>
       <Shape postion={{bottom:'50px' , left:'10px'}} type="circle" color='border-warning'/>
       <Shape postion={{top:'300px' , right:'350px'}} type="circle" color='border-warning'/>
       <Shape postion={{top:'100px' , right:'500px'}} type="square" color='border-primary-subtle'/>
       <Shape postion={{top:'100px' , left:'500px'}} type="square" color='border-primary-subtle'/>
       <Shape postion={{top:'100px' , left:'100px'}} type="circle" color='border-warning'/>
       <Shape postion={{top:'100px' , right:'100px'}} type="square" color='border-primary-subtle'/>
        
    </motion.div>
  )
}

export default HeroSection
