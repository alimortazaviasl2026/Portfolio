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


function HistoryWork() {
        const [activeStep, setActiveStep] = useState(0);
    
const steps = [
  {
    id: 1,
    label: "Internship",
    field: "Front-End developer",
    company: "Sabzlearn Training Center",
    period: "Jan 2022 - Apr 2024",
    location: "Iran",
    description:
      "During my Front-End development journey at Sabzlearn Academy, I gained hands-on experience in designing and developing modern web applications. I worked with HTML, CSS, JavaScript, and React, creating responsive layouts and interactive user interfaces. This experience helped me improve my coding skills, learn professional development practices, and build real-world projects.",
       
    status: "Completed"
  },
  {
    id: 2,
    label: "GRAD company",
    field: "Junior web developer",
    company: "GRAD",
    period: "May 2024 - Dec 2025",
    location: "Iran",
    description:
      "Worked on developing responsive user interfaces and improving website layouts using modern front-end technologies. Focused on clean code, user experience, and creating reusable components.",
    status: "Completed"
  },
  {
    id: 3,
    label: "TechNova Company",
    field: "ّّFront-End Developer",
    company: "TechNova",
    period: "Jan 2026 - Present",
    location: "Iran",
    description:
      "As a Front-End Developer at TechNova, I focused on designing and developing modern, responsive, and user-friendly web interfaces. I worked on creating reusable React components, implementing responsive layouts, and improving the overall user experience. I applied clean coding practices and modern front-end techniques to build efficient and scalable web applications.",
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
                  <Title>History-Job</Title>
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
        </div>
    
  )
}

export default HistoryWork
