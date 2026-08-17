import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
function FormConatiner() {

  // const [languageSystem  , setLanguageSystem ]= useState('')
  

 

  return (
     <div className='form-wrapper shadow rounded-2 p-3 my-2 '>
        <form className='form  ' >
       <div className='my-4'>
        <TextField   id="filled-basic" label="Full-Name" variant="outlined" size='small' fullWidth />
       </div>
       <div className='my-4'>
        <TextField   id="filled-basic" label="E-mail" variant="outlined" size='small' fullWidth />
       </div>
       <div className='my-4'>
        <TextField   id="filled-basic" label="Subject"  variant="outlined" size='small' fullWidth />
       </div>
       <div>
        <label className='form-label fontSize14 text-muted' htmlFor="lab">your Massage</label>
         <textarea id='lab'   className='form-control'></textarea>
       </div>
        <div className='my-3 '>
             <motion.button whileTap={{ scale: 0.9, rotate: 3 , opacity:.5 }}  className='btn btn-warning w-50 btn-sm'>
                 send massage
             </motion.button>
        </div>
    </form>
     </div>
  )
}

export default FormConatiner
