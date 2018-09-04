import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import wework from '../../assets/images/experience/wework.png'
import sharkk from '../../assets/images/experience/sharkk.png'
import intsam from '../../assets/images/experience/intsam.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={wework}
            colour='#fff'
            title='WeWork'
            link='https://www.wework.com/'
            timeperiod='Aug 2017 - Jan 2018'
            subtitle='Worked on internal documentation software in React/Typescript, and handled devops/testing for experimental web applications'
          />
          <ExperienceUnit
            logo={sharkk}
            colour='#FFFFFF'
            title='Sharkk'
            link='https://www.sharkk.com/'
            timeperiod='May 2017 - Aug 2017'
            subtitle="Worked on designing fast, efficient API's in Ruby and designing/building a fast mobile application in AngularJS for Android/iOS that communicates with low-powered bluetooth devices. In addition, I created and implemented an automated deployment workflow for all of Sharkks webapplications with NodeJS"
          />
          <ExperienceUnit
            logo={intsam}
            colour='#C3531A'
            title='International Samaritan'
            link='https://www.intsam.org/'
            timeperiod='Feb 2017 - Nov 2017'
            subtitle='Designed and built the International Samaritan website & custom plugins from the ground up with Wordpress & PHP. Provisioned, administered, and secured the webservers that ran the site and made backups.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
