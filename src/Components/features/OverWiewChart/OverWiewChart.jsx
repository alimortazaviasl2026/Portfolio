import React from 'react'
import Title from '../../common/Title'
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { Tab, Tabs } from 'react-bootstrap'
import Chart from './components/chart'
import { extraSkills, languages, skills } from '../../../data/data'

function OverWiewChart() {

  // const skills = [
  //   {id:1 , data:'word' , value:70},
  //   {id:2 , data:'Excel' , value:74},
  //   {id:3 , data:'powerPoint' , value:100},
  //   {id:4 , data:'Access' , value:50},
  //   {id:5 , data:'netWork' , value:100},
  //   {id:6 , data:'design' , value:100},
  //   {id:7 , data:'teaching-Englidh' , value:90},
  //   {id:8 , data:'marketing' , value:80},
  // ]
  // const languages = [
  //   {id:1 , data:'English' , value:70},
  //   {id:2 , data:'Persian' , value:100},
  //   {id:3 , data:'French' , value:40},
  //   {id:4 , data:'Arabic' , value:40},
   
  // ]
  // const projects = [
  //   {id:1 , data:'2020' , value:30},
  //   {id:2 , data:'2021' , value:55},
  //   {id:3 , data:'2022' , value:22},
  //   {id:4 , data:'2023' , value:43},
  //   {id:5 , data:'2024' , value:29},
  //   {id:6 , data:'2025' , value:63},
  //   {id:6 , data:'2026' , value:69},
  // ]




  return (
    <div className='chartbox margin7rem p-4 bg-gradient shadow-lg'>
        <div className=''>
           <h5>OverView Skills</h5>
            <Tabs fill  defaultActiveKey="skills" >
              <Tab  eventKey='skills' title='skills' >
                 <div className='chart my-3 '>
                    <Chart  data={skills} />
                 </div> 
              </Tab>
              <Tab eventKey='languages' title='languages'>
                <div className='chart my-3 '>
                    <Chart  data={languages} />
                 </div>
              </Tab>
              <Tab eventKey='extraSkills' title='extraSkills'>
                <div className='chart my-3 '>
                    <Chart  data={extraSkills} />
                 </div>
              </Tab>
            </Tabs>
        </div>
        
    </div>
  )
}

export default OverWiewChart
