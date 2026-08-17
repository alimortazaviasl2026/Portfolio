
import React, { useRef, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap'
import ServiceCard from './components/ServiceCard'
import Title from '../../common/Title'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { services } from '../../../data/data'
import { duration } from '@mui/material/styles';










function Services() {
  



  return (
    // <div className='services margin7rem'>
    //      <div className='text-center my-4' >
    //         <Title><i >{t('serviceTitle')}</i></Title>
    //         <p className='w-50 mx-auto lh-lg fontSize13' style={{color:'var(--grayLow)'}}>
    //             <i>{t('service')}</i>
    //         </p>
    //      </div>
    //      <Container fluid className='my-5'>
    //        <Row>
    //            {/* {
    //             ['1','2','3'].map(service => <Col key={service} xl={4}><ServiceCard/></Col>)
    //            } */}
    //           <Col>
    //            <div className=' mx-auto w-50'>
    //         <Swiper
    //         height={200}
    //     effect={'cube'}
    //     grabCursor={true}
    //     cubeEffect={{
    //       shadow: true,
    //       slideShadows: true,
    //       shadowOffset: 20,
    //       shadowScale: 0.94,
    //     }}
    //     pagination={false}
    //     modules={[EffectCube, Pagination]}
    //     className="mySwiper w-75"


    //   >
    //     {
    //       services.map(slide => <SwiperSlide key={slide}><div className=''><img src={slide} className='w-100 rounded-3' height={300} /></div></SwiperSlide>)
    //     }
    //   </Swiper>
    //            </div>
    //           </Col>
  
    //        </Row>
    //      </Container>
    // </div>
     <>
      <div className='text-center my-5' >
            <Title><i >My services</i></Title>
         </div>
      <Swiper  autoplay={{duration:1.5}} pagination={true} modules={[Pagination , Autoplay]} className="mySwiper my-5 ">
         {
         services.map(ser => <SwiperSlide key={ser}>
            <div>
               <img src={ser} className='w-100  rounded-5' />
            </div>
         </SwiperSlide>)
         }
      </Swiper>
     </>
  )
}

export default Services

// Import Swiper React components

// Import Swiper styles


// import required modules

