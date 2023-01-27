import React from 'react'
import './Resume.css'
import {FaFileDownload} from 'react-icons/fa'
const Resume = () => {
  return (
    <div className='resume_container'>
      <iframe src="https://drive.google.com/file/d/1s-P3vGWhQ3fWnXZGhYnpiqlbG3RO2c6A/preview" className="resume" allow="autoplay"></iframe>
      <a className="outline_button" href="https://drive.google.com/file/d/1s-P3vGWhQ3fWnXZGhYnpiqlbG3RO2c6A/preview" download><FaFileDownload /> Download</a>
    </div>
  )
}

export default Resume