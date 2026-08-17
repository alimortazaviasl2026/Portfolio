import React from 'react'
import PersonalInformation from './components/PersonalInformation'
import Languages from './components/Languages'
import Skills from './components/Skills'
import ExtraSkills from './components/ExtraSkills'
import Theme from '../../common/Theme'
import Welcome from '../../common/Welcome'
import HeroSection from '../../../heroSection/HeroSection'

function UserSiderBarInformation({theme , setLocal , battery}) {
  return (
     <>
     <Theme battery={battery} theme={theme} setLocal={setLocal}/>
   <div className='d-block d-xl-none'>
         <Welcome/>
         <HeroSection/>
   </div>
      <PersonalInformation/>
     <Languages/>
     <Skills/>
     <ExtraSkills/>
     <button className='w-100 btn rounded-0 my-2 btn-warning'>
        <a href="/Files/MyResume-843[www.cvbuilder.me] (1).pdf" className='text-decoration-none text-light' download>Download CV</a>
     </button>
     </>
  )
}

export default UserSiderBarInformation
