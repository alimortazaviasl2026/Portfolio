import React from 'react'
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import CustomToolTip from '../../../common/CustomToolTip'

function Chart({data}) {


 
  
  return (
          <LineChart className='fw-normal' style={{fontSize:'14px' }} width='100' height={400} responsive data={data}>
                 <Tooltip content={({payload})=>{
                   return <CustomToolTip payload={payload}/>
                 }}/>
                <CartesianGrid strokeDasharray="4 4"  />
                <XAxis  dx={-8} dy={10} dataKey="topic" />
                <YAxis dx={-5} width="auto"   />
                 <Line type='monotone' fill='#ffea00' dataKey='percent'/>
            </LineChart>
  )
}

export default Chart
