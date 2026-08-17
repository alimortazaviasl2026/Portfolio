import React from 'react'

function MarqueeTrack({mrq}) {
  return (
    <div className='marquee-Track'>
       <img src={mrq} width={200} className='bg-transparent bg-dark' />
    </div>
  )
}

export default MarqueeTrack
