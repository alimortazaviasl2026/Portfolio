import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdOutlineBatteryChargingFull } from "react-icons/md";
import { MdBatteryAlert } from "react-icons/md";
function Theme({theme , setLocal , battery}) {


  const handleTheme = () => {
   const toggleTheme = theme === 'light' ? 'dark' : 'light'
   setLocal(toggleTheme)
  }


  return (
    <>
    <div onClick={handleTheme} className="my-2 d-inline-block">
        {
            theme === 'light' ? <MdDarkMode size={20}/> : <MdLightMode size={20}/>
        }
    </div>
    <span className={`fontSize14 d-inline-flex justify-content-center align-items-center mx-2 fw-bold `}>{battery}%{''}{battery <= 15 ? <MdBatteryAlert className={`${battery <= 15 ? 'animation-battery':'' }`} size={17} color="red"/> : <MdOutlineBatteryChargingFull size={17}/>}</span>
    </>
  )
}

export default Theme
