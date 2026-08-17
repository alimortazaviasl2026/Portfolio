import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Title from '../../../common/Title';

function HistorySchool() {
     const [activeStep, setActiveStep] = useState(0);
    
const steps = [
  {
    id: 1,
    label: "High-school",
    field: "High-school Diploma",
    company: "Shahin TagiZadeh",
    period: "Jan 2022 - Apr 2024",
    location: "Iran",
    description:
      "Completed my high school education at [School Name], where I developed fundamental knowledge, academic discipline, and problem-solving skills that prepared me for higher education.",
       
    status: "Completed"
  },
  {
    id: 2,
    label: "English & French Language Instructor",
    field: "English Vs French ",
    company: "jahanNama institute",
    period: "Jan 2024 - present",
    location: "Iran",
    description:
      "Teaching English and French languages at an educational institute, focusing on improving students’ speaking, listening, reading, and writing skills. Creating engaging lessons, explaining grammar concepts, and helping learners develop effective communication skills through interactive teaching methods.",
       
    status: "Current"
  },
  {
    id: 3,
    label: "Bachelor’s Degree",
    field: "Bachelor’s Degree in English Translation",
    company: "Parand University ",
    period: "May 2024 - present",
    location: "Iran",
    description:
      "Studying for a Bachelor’s Degree in English Translation, focusing on translation skills, English language proficiency, and effective communication. Alongside my academic studies, I am developing my expertise in Front-End Development and modern web technologies.",
    status: "Current"
  }
];


  const previousActiveStepRef = useRef(activeStep);
  const continueButtonRef = useRef(null);
  const backButtonRef = useRef(null);
  const resetButtonRef = useRef(null)
  const loadRef = useRef(true)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


   useEffect(() => {
    if(loadRef.current){
     loadRef.current = false
     return
    }
    const previousActiveStep = previousActiveStepRef.current;
    previousActiveStepRef.current = activeStep;

    // If the user is going forward.
    if (previousActiveStep < activeStep) {
      if (activeStep === steps.length) {
        // If the user has completed all steps and hits "Finish", focus the "Reset" button.
        resetButtonRef.current.focus();
      } else {
        // Focus the "Continue" button otherwise.
        continueButtonRef.current.focus();
      }
      return;
    }
    // Otherwise, the user is going back.

    if (activeStep === 0) {
      // If the user hit "Back" on the second step, or hit "Reset", focus the "Continue" button.
      continueButtonRef.current.focus();
      return;
    }

    // Focus the "Back" button otherwise.
    backButtonRef.current.focus();
  }, [activeStep]);

  return (
        <div className=' '>
              <div className='my-5'>
                  <Title>History-School</Title>
              </div>
                 <Box sx={{ maxWidth: 500 }}>
          <Stepper activeStep={activeStep} orientation="vertical" >
            {steps.map((step, index) => (
              <Step  color='warning' key={step.label}>
                <StepLabel 
                 
                  optional={
                    index === steps.length - 1 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent className='fontSize13 fw-light' >
                 <div className='my-2 '>
                     <span className=' rounded-1 fw-bold fontSize14 text-bg-warning p-1'>field :</span> : {step.field}
                    </div> 
                 <div className='my-2 '>
                      <span className=' rounded-1 fw-bold fontSize14 text-bg-warning p-1'>company :</span> : {step.company}
                    </div> 
                 <div className='my-2 '>
                      <span className=' rounded-1 fw-bold fontSize14 text-bg-warning p-1'>period :</span>  : {step.period}
                    </div> 
                 <div className='my-2 '>
                      <span className=' rounded-1 fw-bold fontSize14 text-bg-warning p-1'>location :</span>  : {step.location}
                    </div> 
                 <div className='my-2 '>
                     <span className='f rounded-1 fw-bold fontSize14 text-bg-warning p-1'>description :</span>  : {step.description}
                    </div> 
                 <div className='my-2 '>
                     <span className='f rounded-1 fw-bold fontSize14 text-bg-warning p-1'>status :</span>   : {step.status}
                    </div> 
                  <Box sx={{ mb: 2 }}>
                    <Button 
                     color='warning'
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                      ref={continueButtonRef}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    {index !== 0 && (
                      <Button
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                        ref={backButtonRef}
                      >
                        Back
                      </Button>
                    )}
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper  elevation={0} sx={{ p: 3 }}>
              
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} ref={resetButtonRef}>
                Back first
              </Button>
            </Paper>
          )}
        </Box>
        </div>)
    

}

export default HistorySchool
