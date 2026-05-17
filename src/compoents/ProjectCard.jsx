import React from 'react'
import "./project-card.css"
import { FaDownload } from "react-icons/fa";

function ProjectCard(props) {
  return (
    <div className='pro-card'>
        <img src={props.image} alt="project image" />
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
        <a href={props.file} download className="resume-btn"> Download Zip File <FaDownload /></a>
    </div>
  )
}

export default ProjectCard