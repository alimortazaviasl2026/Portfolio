import React from 'react'

function ScrollLine({width}) {
  return (
    <div className='line position-fixed top-0 start-0 bg-warning' style={{width:width , height:'4px',zIndex:'100000000000000000'}}></div>
  )
}

export default ScrollLine
