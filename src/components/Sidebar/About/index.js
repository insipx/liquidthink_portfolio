import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          A CS Student who enjoys to write (occasionally) I often find projects to work on and contribute to, and more often leave project ideas sitting with the [private] tag in my <a className="link" href="https://github.com/InsidiousMind">Github</a>. I've attended a few hackathons with my club (Scranton Hacks), including HackPSU and DragonHacks (Drexel).

      If I come across anything interesting in any of my projects, or am just excited about one, I'll usually write a post on my blog at <a className="link" href="https://code.liquidthink.net">Code.LiquidThink</a>
        </div>
      </div>
    )
  }
}

export default About
