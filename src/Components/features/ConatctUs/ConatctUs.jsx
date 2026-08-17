import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FormConatiner from '../FormConatiner/FormConatiner'
import ContactCard from '../FormConatiner/components/ContactCard'
import { IoIosContacts } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";


function ConatctUs({id}) {
  return (
    <div className='contact-Us p-2 margin7rem' id={id}>
        <div className='d-flex fw-bold justify-content-around '>
             <h5 >Leave us your info</h5>
        </div> 
        <Container>
             <Row className='align-items-center '>
                <Col  sm={12} xl={7}>
                   <FormConatiner/>
                </Col>
                <Col sm={12} xl={5}>
                   <div className='contact-boxes my-5'>
             <h5 className='text-center my-4'>Contact information</h5>
                       <ContactCard icon={<IoIosContacts/>} data={{Country:'Iran' , City:'Tehran', Street:'Madani'}}/>
                       <ContactCard icon={<MdEmail/>} data={{Email:'Brazilyali25@gmail.com' , Instagram:'Alifront2026', Telegram:'@Alifront2026'}}/>
                       <ContactCard icon={<FaPhoneSquare/>} data={{Support_services:'' , Office:'021-56653085', Personal:'09382664389'}}/>
                   </div>
                </Col>
             </Row>
        </Container>
    </div>
  )
}

export default ConatctUs
