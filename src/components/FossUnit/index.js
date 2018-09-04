import React, { Component } from 'react'

import './style.scss'

class FossUnit extends Component {
  render() {
    return (
      <div className="foss-unit col-xs-12 col-sm-6 col-md-4">
        <a href={this.props.link} target="_blank">
          <div
            className="image"
            style={{
              backgroundImage: `url(${this.props.logo})`,
              backgroundColor: this.props.colour
            }}>
          </div>
        </a>
        <div className="title bold">
          {this.props.title}
        </div>
        <div className="title lang bold">
          Language(s): <span style={{color: this.props.lang_colour }}>{this.props.lang}</span>
        </div>
        <div className="time-period">
          {this.props.timeperiod}
        </div>
        <div className="subtitle">
          {this.props.subtitle}
        </div>
      </div>
    )
  }
}

export default FossUnit
