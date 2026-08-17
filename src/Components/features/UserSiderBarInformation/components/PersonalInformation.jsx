import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";

function PersonalInformation() {
  return (
    <div className='personal'>
        <div className='base-info  p-2 my-2 rounded-2 text-center'>
              <div>
                  <img src="/Portfolio/imgs/97a2a402-03eb-4c4d-a24f-90671890f297.jpg" className='rounded-circle' style={{border:'3px solid #eeee'}} width={140} height={140}  />
              </div>
              <div className="body my-2">
                <span className=' d-block '><i>Ali Mortazavi</i></span>
                <span className='fw-lighter' style={{color:'var(--grayLow)'}}>Front-End Developer</span>
              </div>
              <div className="footer my-2 py-2 d-flex justify-content-center gap-2 border-bottom">
                  <a href='https://t.me/alimortazaviasl2026'><span><FaTelegram color='orange' size={20}/></span></a>
                 <a href="https://instagram.com/alimortazaviasl2026"> <span><FaInstagramSquare color='orange' size={20}/></span></a>
                 <a href="tel:+989382664389" > <span><FaPhoneSquare color='orange' size={20}/></span></a>
              </div>
        </div>
        <div className="main-info border-bottom p-2 fontSize14 fw-light">
            <div className='d-flex my-2  justify-content-between '>
                 <span className='text-bg-warning p-1 rounded-1'>Age :</span>
                 <span> 21</span>
            </div>
            <div className='d-flex my-2  justify-content-between '>
                 <span className='text-bg-warning p-1 rounded-1'>Residence :</span>
                 <span>IRAN</span>
            </div>
            <div className='d-flex my-2  justify-content-between '>
                 <span className='text-bg-warning p-1 rounded-1'>freelance :</span>
                 <span className='text-success'>availLable</span>
            </div>
            <div className='d-flex my-2  justify-content-between '>
                 <span className='text-bg-warning p-1 rounded-1'>Address :</span>
                 <span>Tehran,Tehran</span>
            </div>
        </div>
    </div>
  )
}

export default PersonalInformation
