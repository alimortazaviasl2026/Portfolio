import React from 'react'

function ContactCard({children , icon , data}){ 


    
    




  return (
    <div className='shadow rounded-1 p-2 my-2'>
        <div className=' text-center m-2'>
            <span className='p-1 rounded-pill bg-warning'>{icon}</span>
        </div>
      <div className='content fw-bold'>
        {
     Object.entries(data).map((key) => {
       return <div key={key[0]} className=' d-flex fontSize14 px-2 justify-content-between'>
             <span className=''>{key[0]} :</span>
             <span className='fw-light'>{key[1] ? key[1] : 'Not-Given' }</span>
        </div>
       })
       }
      </div>
    </div>
  )
}

export default ContactCard

// {/* 
//     //     return   */}