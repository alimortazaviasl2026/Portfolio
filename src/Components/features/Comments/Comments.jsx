import React from 'react'
import Title from '../../common/Title'
import { Col, Container, Row } from 'react-bootstrap'
import CommentBox from './components/CommentBox'
import MarqueeMadule from 'react-fast-marquee'
import { createComments } from '../../../Utils/func'
const Marquee = MarqueeMadule.default || MarqueeMadule

function Comments({theme}) {

    


    const makeCircle = () =>{
      let circles = []

      for(let i = 1 ; i <= createComments().length; i++ ){
        circles.push(<img key={i} src='/Portfolio/imgs/Ellipse 21.png'/>)
      }
      return circles
    }

  return (
   <>
    <div className='text-center my-4 d-none d-lg-block'>
            <Title><i>Recomendations</i></Title>
            {/* <p className='w-50 mx-auto lh-lg fontSize13' style={{color:'var(--grayLow)'}}>
                <i>This section showcases feedback and recommendations from clients and collaborators, highlighting their experiences and satisfaction with my work, professionalism, and dedication.
               </i>
            </p> */}
                   <Marquee pauseOnHover gradient gradientColor={theme === 'light' ? 'white':'' } direction='right'>
            <Container className='my-5'>
                 <Row>
                   {
                    createComments().map(data =>  <Col lg={4} key={data.id} ><CommentBox {...data}/></Col>)
                   }
                 </Row>
            </Container>
                   </Marquee>
            <div className='count-circle-comments d-flex justify-content-center gap-1'>
                 {makeCircle()}
            </div>
    </div>
   </>
  )
}

export default Comments
