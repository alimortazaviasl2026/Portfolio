import React, { Fragment, Suspense, useEffect, useState } from 'react'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import { GiAcousticMegaphone, GiBirdLimb } from "react-icons/gi";
import { SlArrowUp } from "react-icons/sl";
import Switch from '@mui/material/Switch';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { FiClock, FiShuffle } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Services from './Components/features/services/Services';
import ScrollLine from './Components/common/ScrollLine';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Welcome from './Components/common/Welcome';
import UserSiderBarInformation from './Components/features/UserSiderBarInformation/UserSiderBarInformation';
import HeroSection from '%/heroSection/HeroSection';
import LanguageBox from '../src/Components/common/LanguageBox'
import MapBox from './Components/features/MapBox/MapBox';
import CompanyInfo from './Components/common/CompanyInfo';
import MarqueeBox from './Components/features/MarqueeBox/MarqueeBox';
import ConatctUs from './Components/features/ConatctUs/ConatctUs';
import PortfolioTimeLine from './Components/features/PortfolioTimeLine/PortfolioTimeLine';
import Comments from './Components/features/Comments/Comments';
import ActionConatiner from './Components/features/ActionConatiner/ActionConatiner';
import useLocalStorage from './Hooks/useLocalstorage';
import HistoryContainer from './Components/features/HistoryContainer/HistoryContainer';
import Gallery from './Components/features/Gallery/Gallery';
import { Cursor } from "motion-plus/react"
import AnimatedCursor from 'react-animated-cursor';
import { lazy } from 'react';
import { motion } from 'motion/react';
import { useRef } from 'react';
import MetaData from './Components/common/MetaData';
const OverWiewChart =  lazy( async ()=> import('./Components/features/OverWiewChart/OverWiewChart'))

function App() {
  

  const [showClock , setShowClock] = useState(true)
  const [value, setValue] = useState(new Date());
  const [width , setWidth] = useState(0)
  const [battry , setBattery] = useState()
  const [theme , setLocal] = useLocalStorage('theme' , 'light')
  const [modalBattery , setModalBattry ] = useState(false)
  const [showChart , setShowChart] = useState(false)
  const chartRef = useRef()
  const [showHamburger , setShowHamburger] = useState(false)



 

  
 useEffect(()=> {
    const observer = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){
        setShowChart(true)
      }
      
    })
    observer.observe(chartRef.current)
 },[])

  const hanleScroll = (e) => {
    const userScroll = document.documentElement.scrollTop
    const bodyHeight = document.body.clientHeight
    const windowHeight = window.innerHeight

    const widthPercent = Math.ceil(userScroll / (bodyHeight - windowHeight ) * 100) 

     setWidth(`${widthPercent}%`)
    
  }

  
  window.addEventListener('scroll' , hanleScroll)
  useEffect(() => {

    
    const getBattry = async ()=>{
      const batteryData = await navigator.getBattery()
        setBattery(Math.ceil(batteryData.level * 100))
        batteryData.onlevelchange = () => setBattery(Math.ceil(batteryData.level * 100))
    }  
    getBattry()
  
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };


    
  }, []);



useEffect(()=>{
  //  if(battry <= 15) document.documentElement.style.filter = 'brightness(40%)'
},[battry])

useEffect(()=>{
  document.documentElement.dataset.bsTheme = theme
},[theme])







  return (
    <Fragment>
     <AnimatedCursor   
       innerSize={8}
        outerSize={40}
        color="0,0,0"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={3}
        
        />
        
     <MetaData >
       <title>
          Nova portfolio
       </title>
     </MetaData>
      <ScrollLine width={width}/>
        <Container fluid className=''>
           <Row>
              <Col  sm={12} xl={2} className='  shadow-lg' >
                   
                   {
                    showHamburger ? <div>hamburger</div>:<div><UserSiderBarInformation battery={battry} theme={theme} setLocal={setLocal}/>
                  <PortfolioTimeLine/></div>
                   }
                 
              </Col>
              <Col  sm={12}  xl={9} className=' py-1 bgMain '>
                 <div className='d-none d-xl-block'>
                   <Welcome/>
                 <HeroSection />
                 </div>
                 <Services/>
                 <HistoryContainer/>
                 <motion.div initial={{x:-600, opacity:0}} animate={{x:0 , opacity:1}} transition={{ease:'easeInOut', duration:4}} ref={chartRef} className='chart-lazy'>
                   {
                 showChart &&  
                     <Suspense fallback={<div>loading...</div>}>
                  <OverWiewChart/>
                     </Suspense>
               }
                </motion.div>
              
                 <Gallery/>
                 <Comments theme={theme}/>
                 <ConatctUs />
                  <MapBox theme={theme}/>
                 <MarqueeBox theme={theme} />
                  <CompanyInfo/>
              </Col>
              <Col  xl={1} className={`d-none d-xl-block ${theme === 'light' ? 'bg' : ''} shadow-lg `}  >
                  
                  <ActionConatiner />
              </Col>
           </Row>
        </Container>
           <div className='d-none d-xl-block clock position-absolute m-2' style={{bottom:'0'}}>
                  {
                  showClock &&  <div  >
                      <Clock renderNumbers value={value} />
                 </div>
                }
                  <div className='switch m-2 '>
                         <span className='fw-bold badge bg-warning'>liveClock{showClock ?<FiClock size={15}/> : <IoIosCloseCircleOutline size={15}/>}</span>
                       <Switch  color='warning' title='timer'  size='medium' checked={showClock} onChange={(e)=> setShowClock(e.target.checked)}/>
                  </div>
               </div>
    </Fragment>
  )
}

export default App



// const [value, setValue] = useState(new Date());



// startTransition(()=>{
      // setTimeout(()= setState(),4000)
  // })
  
  // setTimeout(()={
    // startTransition(()=>{
      // setState()
  // })
  // } ,4000)

  
