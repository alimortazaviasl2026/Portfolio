import React, { useState } from 'react'
import { Col, Container,  Row, Tab, Tabs } from 'react-bootstrap'
// import { artImages, occupationImages } from '../../../../data/galleryImages'
import galleryImages  from '../../../../data/galleryImages'
import Pagination from '../../../common/Pagination'

function GalleryBox() {

  const [images , setImages] = useState(galleryImages)
 
  
  return (
    <div className='my-4'>
     
   <Container>
    <Row className='g-2 '>
          {
            images.map((img , index)=> <Col sm={12} md={3} key={`key${index}`} >
                <div>
                   <img src={img} className='w-100 rounded-2 ' alt={img} height={160}  />
                </div>
            </Col>)
          }
    </Row>
   </Container>
    <Pagination allImages={galleryImages} pagination={{count:4 , setItems : setImages}}/>
    </div>
  )
}

export default GalleryBox
 {/* <Tabs fill defaultActiveKey='art' className='mb-5'>
        <Tab eventKey='art' title='art'>
            <Container fluid>
                <Row className='g-2'>
                     {
                        artImages.map(art => <Col xl={4} key={art}>
                       <div className='gallery-img'>
                          <img src={art} alt="" className='w-100 rounded-2 '/>
                       </div>
                     </Col>)
                     }
                </Row>
            </Container>
        </Tab>
        <Tab eventKey='html/Css' title='html/Css'>
            <Container fluid>
                <Row className='g-2'>
                     {
                        artImages.map(art => <Col xl={4} key={art}>
                       <div className='gallery-img'>
                          <img src={art} alt="" className='w-100 rounded-2 '/>
                       </div>
                     </Col>)
                     }
                </Row>
            </Container>
        </Tab>
        <Tab eventKey='occupation' title='occupation'>
            <Container fluid>
                <Row className='g-2'>
                     {
                        occupationImages.map(art => <Col xl={4} key={art}>
                       <div className='gallery-img'>
                          <img src={art} alt="" className='w-100 rounded-2 '/>
                       </div>
                     </Col>)
                     }
                </Row>
            </Container>
        </Tab>
        <Tab title='design' disabled/>
      </Tabs> */}