import Button from '@mui/material/Button';
import React, { useRef, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaBomb } from "react-icons/fa";
import ReactConfetti from 'react-confetti'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
function ME() {

// const {t} = useTranslation()

  // const [bomb , setBomb] = useState(false)
  //  const AudioRef = useRef()

  //  const handleBoom = () => {
  //    AudioRef.current.play()
  //    setBomb(true)
  //    setTimeout(()=>{
  //       AudioRef.current.pause()
  //       AudioRef.current.currentTime = 0
  //       setBomb(false)
  //    },10000)
  //   }
  

  return (
    <div className='me' >
           {/* {
               bomb && <ReactConfetti
    gravity={0.1}
    height={545}
    initialVelocityX={2}
    initialVelocityY={2}
    numberOfPieces={200}
    opacity={1}
    recycle
    run
    width={980}
    wind={0}
  /> */}
           {/* } */}
         <h1 className=''><i>Hello EveryOne</i></h1>
        <h3 className='w-100' ><i>I am Ali Mortazavi ❤️<div className='fw-bold my-2' style={{color:'var(--yellow)'}}> "Front-End Developer"</div></i></h3>
        <p className='my-3 fw-light lh-lg'style={{color:''}}><i>I love building modern websites that are fast, responsive, and enjoyable to use. As a Front-End Developer, I specialize in creating clean user interfaces and smooth user experiences with attention to every detail. My goal is to turn ideas into functional, elegant, and accessible web applications that make a lasting impression. Every project is an opportunity to learn, innovate, and create something meaningful.</i></p>
        <div className='d-flex gap-2'>
            <motion.button   whileTap={{ scale: 0.9, rotate: 3 , opacity:.5 }} className='btn btn-sm btn-warning' >Hire me<FaArrowRight size={10}/> </motion.button>
             {/* <motion.button  whileTap={{ scale: 0.9, rotate: 3 , opacity:.5 }}  className='btn btn-sm btn-warning' disabled={bomb} onClick={handleBoom} >{t('bomb')} <FaBomb className='bomb mx-1' color='black'/></motion.button> */}
             <motion.button  whileTap={{ scale: 0.9, rotate: 3 , opacity:.5 }}    className='btn btn-sm btn-warning' > <a href='/Files/MyResume-843[www.cvbuilder.me] (1).pdf' className='text-dark
              text-decoration-none'  download>Download My CV</a></motion.button>
             
        </div>

        {/* <audio ref={AudioRef} src='/audios/happySound.mp3'/> */}
    </div>
  )
}

export default ME
