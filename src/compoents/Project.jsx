import React from 'react'
import { IoRocketSharp } from "react-icons/io5";
import { FcIdea } from "react-icons/fc";
import ProjectCard from './ProjectCard'
import ima from "../assets/image.png"

import "./project.css"

function Project() {
  return (
        <div className='project'>
          <h1 className='title'>Welcome To ShaCodes  <FcIdea /></h1>
          <p>Do subscribe for more upcoming codes </p>
          <a href="https://www.youtube.com/@shacodes-f5n">Click to Subscribe</a>
            <div className="head-pro"><h3>Projects  <IoRocketSharp /></h3></div>
            <div className="project-container">
                <ProjectCard
                image={ima}
                title={"Billing Website"}
                description={"This Website creatd using Html,Css,JavaScript in React.js.this website useage is billing the products, adding products and invoice genrate and mobile responsive.  "}
                file={"src\assets\billing-website-main (3).zip" }
                />
            </div>
        </div>
  )
}

export default Project