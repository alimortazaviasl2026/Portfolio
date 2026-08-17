import React from 'react'
// import { createMaequeeItems as marquees } from '../../../Utils/func'
import MarqueeModule from "react-fast-marquee";
import MarqueeTrack from './elements/MarqueeTrack';
import Title from '../../common/Title';
import { brands } from '../../../data/data';
const Marquee = MarqueeModule.default || MarqueeModule;

function MarqueeBox({theme}) {
  return (
    <div className='MarqueeBox margin7rem'>
      <Title>Brands I’ve Worked With</Title>
     <Marquee  autoFill speed={50} gradient gradientColor={theme === 'light' ? 'white':'' } pauseOnHover >
         {
            brands.map(mrq => <MarqueeTrack key={mrq} mrq={mrq}  />)
         }
     </Marquee>
    </div>
  )
}

export default MarqueeBox
