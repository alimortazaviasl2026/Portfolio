import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormLabel from "@mui/material/FormLabel"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"



function LanguageBox({lang , setLang}) {


 const hanldeChangeLang = (e) => {
    const lang = e.target.value
    setLang(lang)
 }



  return (
   <> 
<FormControl fullWidth className="my-2 ">
  <FormLabel className="fontSize14">languages</FormLabel>
  <RadioGroup className="" value={lang} onChange={hanldeChangeLang} name="radio-buttons-group" >
    <FormControlLabel value="en" control={<Radio color="warning" size=""/>} label="English" />
    <FormControlLabel value="fr" control={<Radio color="warning" size=""/>} label="French" />
    <FormControlLabel value="fa" control={<Radio color="warning" size=""/>} label="Persian" />
  </RadioGroup>
</FormControl>
   </>
  )
}

export default LanguageBox
