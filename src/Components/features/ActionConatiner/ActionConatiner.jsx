import { SiHeroicgameslauncher } from "react-icons/si";
import { MdMedicalServices , MdFactory } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiFinishLine } from "react-icons/gi";
import { FaComments } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { SlPicture } from "react-icons/sl";
function ActionConatiner() {


  const scrollTosection = (position1 , position2) => {
    document.documentElement.scrollTo(position1 , position2)
  }

  
// d-flex d-xl-block

  return (
    <div className=' p-2 text-center position-fixed bottom-0  d-none d-xl-block '>
         <div className='item my-3'>
              <button onClick={()=> scrollTosection(0 , 0)} className='btn   btn-outline-danger border-light border-2 rounded-circle '><SiHeroicgameslauncher title='Hero'/></button>
         </div>
         <div className='item my-3'>
              <button onClick={()=> scrollTosection(0 , 700)} className='btn  btn-outline-danger border-light border-2 rounded-circle '><MdMedicalServices title='services' /></button>
         </div>
         <div className='item my-3'>
              <button onClick={()=> scrollTosection(0 , 1150)} className='btn  btn-outline-danger border-light border-2 rounded-circle '><MdHistory title='History' /></button>
         </div>
         <div className='item my-3'>
              <button onClick={()=> scrollTosection(0 , 4200)} className='btn   btn-outline-danger border-light border-2 rounded-circle '><IoIosContact title='contact' /></button>
         </div>
         <div className='item my-3'>
              <button onClick={()=> scrollTosection(0 , 4700)} className='btn  btn-outline-danger border-light border-2 rounded-circle '><FaMapLocationDot title='location' /></button>
         </div>
         <div className='item my-3'>
              <button onClick={()=> scrollTosection(0 , 2000)} className='btn  btn-outline-danger border-light border-2 rounded-circle '><FaChartLine title='chart' /></button>
         </div>
         <div className='item my-3'>
              <button onClick={()=> scrollTosection(0 , 2600)} className='btn  btn-outline-danger border-light border-2 rounded-circle '>< SlPicture title='gallery' /></button>
         </div>
         <div className='item my-3'>
              <button onClick={()=> scrollTosection(0 ,5200)} className='btn  btn-outline-danger border-light border-2 rounded-circle '><MdFactory title='company' /></button>
         </div>
         <div className='item my-3'>
              <button onClick={()=> scrollTosection(0 , 3400)} className='btn  btn-outline-danger border-light border-2 rounded-circle '><FaComments title='comments' /></button>
         </div>
    </div>
  )
}

export default ActionConatiner
