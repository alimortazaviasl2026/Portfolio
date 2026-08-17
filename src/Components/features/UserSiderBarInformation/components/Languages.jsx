import React from 'react'
import LanguageData from './Skill '
import Skill from './Skill '
import { languages } from '../../../../data/data'

function Languages() {
  return (
    <div className='p-2 my-2 border-bottom'>
    <span>Languages</span>

    {
      languages.map(lang => <Skill key={lang.id} {...lang}/>)
    }
    
    </div>
  )
}

export default Languages
