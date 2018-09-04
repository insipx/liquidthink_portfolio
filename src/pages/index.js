import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import FossSection from '../components/FossSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Andrew Plaza</span>
        </h5>

        <h3 className="bold">
          I am a student studying Computer Science. On the side, I contribute to Free Open Source Software.
        </h3>

        <ExperienceSection />
        <ProjectsSection />
        <FossSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
