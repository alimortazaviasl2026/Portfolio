import React from 'react'

function CustomToolTip({payload}) {

    
    
    
  return (
    <div className='p-3 shadow rounded-3 d-flex justify-content-center align-items-center flex-column' style={{width:'200px'}}>
       <div className='fw-bold'><span className='fw-light text-dark'>{payload[0]?.payload.topic}</span>{' '} :  عنوان </div>
       <div className='fw-bold'>درصد  :  {' '} <span className='fw-light text-dark'>{payload[0]?.payload.percent}</span></div>
    </div>
  )
}

export default CustomToolTip
