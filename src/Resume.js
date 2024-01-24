import React from 'react';
import './Resume.css';
import Compass from './assets/compass.png';
import Ucla from './assets/ucla.png';
import Nasa from './assets/nasa.png';
import Ibm from './assets/ibm.png';
import Face from './assets/face.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import { useState, useEffect } from 'react';

const useMobileScreen = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const Resume = () => {
  const isMobile = useMobileScreen();

  return (
    <div className='page-container'>
      <div className='page-content'>
        <div className='top-section'>
          <div className='top-section-text'>
            {isMobile && <div className='top-photo'>
            <img src={Face} alt="Cap & Gown Shot"/>
          </div>}
            <h1>Samuel Strong</h1>
            <p>(818) 851 2288 | samuelstrong@ucla.edu</p>
            <div className='top-buttons'>
              <a className='top-btn' href="https://github.com/strongs20" target="_blank" rel="noopener noreferrer"><GitHubIcon/>&nbsp;Github</a>
              <a className='top-btn' href="https://www.linkedin.com/in/samjstrong/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/>&nbsp;LinkedIn</a>
              <a className='top-btn' href="https://docs.google.com/document/d/1GPeY-Djt5y4jBHrQjGcYcHXSJtga17y2SphFIoQ0EZY/edit" target="_blank" rel="noopener noreferrer"><DescriptionIcon/>&nbsp;Resume</a>
            </div>
          </div>
          {!isMobile && <div className='top-photo'>
            <img src={Face} alt="Cap & Gown Shot"/>
          </div>}
        </div>

        <div className='section'>
          <h2>EDUCATION</h2>
          <hr />
          <div className='section-title'>
            <div className="section-image">
              <img src={Ucla} alt="UCLA Logo"/>
            </div>
            <h3>University of California, Los Angeles (UCLA)</h3>
          </div>
          <p>Bachelor of Science in Computer Science, September 2020 - June 2024</p>
        </div>

        <div className='section'>
        <h2>EXPERIENCE</h2>
        <hr />
        <div className='section-title'>
          <div className="section-image">
            <img src={Nasa} alt="NASA Logo"/>
          </div>
          <h3>Data Science Intern | NASA Jet Propulsion Laboratory</h3>
        </div>
        <p>June 2023 - September 2023</p>
        <ul>
          <li>Fine-tuned InceptionV3 for frost detection on the Martian terrain using HiRISE imagery</li>
          <li>Fine-tuned a Mask R-CNN to segment clasts in images taken by the Perseverance Rover’s ZCAM</li>
          <li>Worked with Python, TensorFlow, Keras, and Pytorch to create and implement the models</li>
          <li>Contributed to understanding of the Martian climate and aiding future mission planning.</li>
          <li>Collaborated with experts in geology, climate science, and machine learning.</li>
        </ul>
        </div>

        <div className='section'>
        <h2>PROJECTS</h2>
        <hr />
        <div className='section-title'>
            <div className="section-image">
              <img src={Compass} alt="Compass Logo"/>
            </div>
          <h3>StrongMentorship</h3>
        </div>
        <p>February 2023 - Present</p>
        <ul>
          <li>Developed software for Compass Real Estate to manage their agent mentorship program</li>
          <li>Implemented with React, NodeJS, Google Firebase</li>
          <li>Still actively being used by 60+ members of Compass</li>
          <li>Enhanced user experience through iterative testing and feedback</li>
          <li>Allows agents to monitor sales statistics and course progress of mentees</li>
        </ul>
        </div>

        <div className='section'>
        <h2>SKILLS</h2>
        <hr />
        <ul>
          <li>Languages: C++, C, Python, Javascript, Bash, Assembly</li>
          <li>Machine Learning: Pytorch, Tensorflow, Keras, NumPy, Matplotlib</li>
          <li>Software Engineering: Git, Object-Oriented Programming, React, NodeJS</li>
          <li>Other: Technical Writing, Research Presentations, Problem Solving, Team Collaboration</li>
        </ul>
        </div>

        <div className='section'>
        <h2>RELEVANT COURSEWORK</h2>
        <hr />
        <ul>
          <li>Computer Systems Architecture</li>
          <li>Machine Learning</li>
          <li>Computer Network Fundamentals</li>
          <li>Software Construction</li>
          <li>Linear Algebra</li>
          <li>Differential Equations</li>
          <li>Multivariate Calculus</li>
        </ul>
        </div>

        <div className='section'>
        <h2>CERTIFICATION</h2>
        <hr />
        <div className='section-title'>
          <div className="section-image">
            <img src={Ibm} alt="IBM Logo"/>
          </div>
          <h3>IBM: Python Data Analytics - June 2020</h3>
        </div>
        <ul>
          <li>Learned data sanitization, visualization, and machine learning with Python</li>
          <li>Credential ID: addd039f99b94c05b70393c646846194</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
