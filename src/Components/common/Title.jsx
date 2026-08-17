import React from 'react'
import { motion } from 'framer-motion';
function Title({children}) {
  return (
   <>
   <div className='rounded text-center my-3'>
      
    <motion.h4 whileHover={{rotate:'360deg' }} transition={{ease:'easeIn', duration:1}} className='title fw-normal  text-warning  d-inline-block  '>
       {
          children
       }
    </motion.h4>
   </div>
   </>
  )
}

export default Title
