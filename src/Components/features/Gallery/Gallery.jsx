import React from 'react'
import Title from '../../common/Title'
import GalleryBox from './components/GalleryBox'

function Gallery() {

    

  return (
    <div className='p-3 margin7rem mx-auto'>
      <Title>My Gallery</Title>
      {/* <p className='w-100  mx-auto fontSize14' style={{color:'var(--grayLow)'}}>
        Explore a collection of projects that showcase my passion for clean design, modern development, and attention to detail. Every piece reflects a unique challenge transformed into a functional and engaging digital experience.

      </p> */}
      <GalleryBox/>
    </div>
  )
}

export default Gallery
