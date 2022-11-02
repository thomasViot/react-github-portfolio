import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className='experience'>
        <VerticalTimeline linecolor="white">
            <VerticalTimelineElement className="vertical-timeline-element--education" 
            contentStyle={{color: '#ffffff'}}
            date="2015 - 2018"
            iconStyle={{background: "black", color: "#fff"}}
            >
                <h3 className='vertical-timeline-element-title' style={{color:"black"}}>Higth School, Perpignan, France</h3>
                <p style={{color:"black"}}>High School Diploma with higth honors</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education" 
            contentStyle={{color: '#ffffff'}}
            date="2018 - 2020"
            iconStyle={{background: "white", color: "#fff"}}
            >
                <h3 className='vertical-timeline-element-title' style={{color:"black"}}>Prépa des INP, Toulouse, France</h3>
                <p style={{color:"black"}}>2 years of intensive maths and physics lectures for preparing French engineering schools</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education" 
            contentStyle={{color: '#ffffff'}}
            date="2020 - 2023"
            iconStyle={{background: "black", color: "#fff"}}
            >
                <h3 className='vertical-timeline-element-title' style={{color:"black"}}>ENSEIRB-MATMECA, Toulouse, France</h3>
                <p style={{color:"black"}}>French engineering schools: Telecommunication master - software engineering specialty</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience