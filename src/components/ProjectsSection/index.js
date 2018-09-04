import React from 'react'
import Section from '../Section'
import FossUnit from '../FossUnit'
import brainfuck from '../../assets/images/projects/brainfuck.jpg'
import edb from '../../assets/images/projects/edb.png'
import ergo from '../../assets/images/projects/Ergo.png'
import absentis from '../../assets/images/projects/absentis.png'
import bliss from '../../assets/images/projects/bliss.jpg'
import scrantonhacks from '../../assets/images/projects/scrantonhacks.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <FossUnit
            logo={edb}
            colour="#fff"
            lang="Rust"
            lang_colour="#E43717"
            title="Ethereum Debug"
            link="https://github.com/ethdbg/edb"
            timeperiod="2018-Present"
            subtitle="A Real-Time Debugger for Ethereum's Programming Languages"
          />
          <FossUnit
            logo={brainfuck}
            colour="#25212F"
            title="Emotif**k"
            link="http://emotifuck.rs/"
            lang="Rust"
            lang_colour="#E43717"
            timeperiod="Oct 2017"
            subtitle="A spin on the Esoteric Programming Language 'Brainfuck' created by Urban Müller (PhD). Emotif**k is Brainfuck but with Emojis."
          />
          <FossUnit
            logo={ergo}
            colour="#fff"
            title="Ergo"
            lang="HTML/CSS"
            lang_colour="#000"
            link="https://ergo.liquidthink.net/"
            timeperiod="Sept. 2018"
            subtitle="A Web-Theme I created to test out the Gutenberg static site generator, and to refresh my blog."
          />
          <FossUnit
            logo={absentis}
            colour="#fff"
            title="Absentis"
            lang="Rust"
            lang_colour="#E43717"
            link="https://github.com/InsidiousMind/Absentis"
            timeperiod="Aug 2018"
            subtitle="A CLI Tool Created for the GitCoin QuickBlocks Bounty. Attempts to validate a list of Ethereum Transactions in a CSV file by querying a specified Ethereum Node"
          />
          <FossUnit
            logo={bliss}
            colour="#fff"
            title="Material Bliss Jekyll Theme"
            lang="Ruby/React/Redux/HTML/CSS"
            lang_colour="#000"
            link="https://github.com/InsidiousMind/material-bliss-jekyll-theme"
            timeperiod="Aug 2018"
            subtitle="Another web-theme static-site-generator experiment. This time, a material design using Jekyll with a home-brewed plugin to allow for the use of React/Redux"
          />
          <FossUnit
            logo={scrantonhacks}
            colour="#000"
            title="Scranton Hacks"
            lang="React/NodeJS/SCSS"
            lang_colour="#000"
            link="http://scrantonhacks.com"
            timeperiod="2017"
            subtitle="ScrantonHacks is my student-run Hackathon club. We attended more than a few hackathons throughout 2016/2017."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
