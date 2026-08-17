import React from 'react'

function Shape({color , postion , type}) {
  return (
    <div className={`shape border border-3 p-1 d-none d-md-block  position-absolute ${type === 'circle' ? 'rounded-circle':'rounded-1'} ${color || 'border-warning'}`} style={{width:'2px',top:postion.top || '',right:postion.right || '',bottom:postion.bottom || '',left:postion.left || '',padding:'6px'}}></div>
  )
}

export default Shape
