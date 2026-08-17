import React from 'react'
import { ProgressBar } from 'react-bootstrap'


function Skill ({topic , percent , learning}) {
  return (
   <>
     <div className='skill  my-3'>
       <div>
        <div className='land-data my-1 fw-light  d-flex justify-content-between fontSize14' style={{color:'var(--grayLow'}}>
            <span>{topic}</span>
            {/* <span className='fontSize13 badge bg-success p-1'>{learning ? 'active':''}</span> */}
            <span>{percent}%</span>
        </div>
       <ProgressBar animated variant="warning" now={percent} />
        
       </div>
    </div>
    
   </>
  )
}

export default Skill 
