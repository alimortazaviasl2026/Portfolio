import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { TbBrandCraft } from "react-icons/tb";
import { extraSkills } from '../../../../data/data';

function ExtraSkills() {
  return (
    <div className=' border-bottom'>
        <span className='m-3 d-block'>Extra skills</span>
         <ListGroup className='my-3'>
           {
            extraSkills.map(item =>   <ListGroup.Item key={item.id} className='d-flex align-items-center justify-content-start p-1 gap-1 border-0 fontSize13' style={{color:'var(--grayLow)'}}>
                <TbBrandCraft color='orange' size={20}/>
                 {
                    item.topic
                 }
             </ListGroup.Item>)
           }
         </ListGroup>
    </div>
  )
}

export default ExtraSkills
