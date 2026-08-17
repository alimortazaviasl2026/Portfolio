import React from 'react'
import LanguageData from './Skill '
import Skill from './Skill '
import { skills } from '../../../../data/data'

function Skills() {
  return (
    <div className='p-2 border-bottom'>
       <span>skills</span>
       {
        skills.map(skill => <Skill key={skill.id} {...skill}/>)
       }
    </div>
  )
}

export default Skills
