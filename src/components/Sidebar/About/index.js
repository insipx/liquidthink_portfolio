import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
	  Software Engineer working on Free Software. Sometimes I find projects to work on and contribute to, but more often leave project ideas sitting with the [private] tag in my <a className="link" href="https://github.com/insipx">Github</a>. Love fleshing out new ideas and hacking on new stuff whenever I get the chance.
      If I come across anything interesting in any of my projects, or am just excited about one, I'll sometimes write a post on my blog at <a className="link" href="https://blog.liquidthink.net">Blog.LiquidThink</a>
        </div>
      </div>
    )
  }
}

export default About
