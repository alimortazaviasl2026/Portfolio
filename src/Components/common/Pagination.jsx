import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import useLocalStorage from '../../Hooks/useLocalstorage'

function Pagination({pagination , allImages}) {
    const {count , setItems } = pagination
    
    const [currentPage , setPage] = useLocalStorage('page' , 1)  
    const pages = Math.ceil(allImages.length / count)
    


    useEffect(()=>{
       
         const fisrtIndex = (currentPage - 1 ) * count // 0
        const lastIndex =  fisrtIndex + count // 4

        const pagedItems = allImages.slice(fisrtIndex , lastIndex )
        
        setItems(pagedItems)
        
  
       
        
         
    },[currentPage])
    
    
    const handleChangePage = (val) => setPage(val)
   
    const btns = () => {
        let btns = []

        for (let i = 1 ; i <= pages ; i++){
               btns.push(<button key={i} className={`btn ${currentPage == i && 'active'  } btn-sm  btn-outline-warning  rounded-circle `} onClick={()=> handleChangePage(i)}>{i}</button>)
        }
        return btns
    }

  return (
    <div className='paginationContsiner my-5 justify-content-center d-flex gap-2'>
        <button disabled={currentPage === 1} className='pre btn btn-outline-warning btn-sm rounded-circle' onClick={()=>handleChangePage(currentPage - 1) }>pre</button>
          {
              btns()
            }
            <button disabled={currentPage === pages} className='next btn btn-outline-warning btn-sm rounded-circle' onClick={()=>handleChangePage(currentPage + 1) }>next</button>
    </div>
  )
}

export default Pagination
