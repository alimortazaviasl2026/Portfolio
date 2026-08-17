import React from 'react'

function CompanyInfo() {
  return (
    <div className='border-top fontSize13 p-2 fw-light'>
        <img src="public/imgs/Nova.png" className='rounded-circle mx-1' width={30} height={30}/>
        built pixel by pixel by <i className='fw-bolder'style={{color:'var(--yellow)'}}>NOVA</i>
    </div>
  )
}

export default CompanyInfo
