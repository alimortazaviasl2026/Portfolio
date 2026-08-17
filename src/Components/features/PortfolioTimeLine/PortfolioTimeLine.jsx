import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { SiHeroicgameslauncher } from "react-icons/si";
import { MdMedicalServices , MdFactory } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiFinishLine } from "react-icons/gi";
import { FaComments } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { SlPicture } from "react-icons/sl";
function PortfolioTimeLine() {
  return (
    <div className='PortfolioTimeLine p-1 my-5 text-center '>

      <span className='fw-bolder my-3 d-block'>My portfolio</span>
      <Timeline position="alternate-reverse" >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color='warning' variant="outlined" >
            <SiHeroicgameslauncher/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >Hero</TimelineContent>
      </TimelineItem>
       <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color='warning' variant="outlined" >
          <MdMedicalServices/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>services</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color='warning' variant="outlined" >
          <MdHistory/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>History</TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color='warning' variant="outlined" >
          <MdMedicalServices/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Education</TimelineContent>
      </TimelineItem>
     <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color='warning' variant="outlined" >
           <FaChartLine/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>OverView</TimelineContent>
      </TimelineItem>
     <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color='warning' variant="outlined" >
           <SlPicture/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Gallery</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color='warning' variant="outlined">
           <FaComments/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Comments</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color='warning' variant="outlined">
          <IoIosContact/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Conatct</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color='warning' variant="outlined">
        <FaMapLocationDot/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Map</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color='warning' variant="outlined">
        <MdFactory/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Companies</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineContent>last_Talk</TimelineContent>
      </TimelineItem>

    </Timeline>
    </div>
  )
}

export default PortfolioTimeLine
