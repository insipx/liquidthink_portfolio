import React from 'react'
import Section from '../Section'
import FossUnit from '../FossUnit'

import spotifyQuizLogo from '../../assets/images/projects/spotify-quiz.png'
import littleNomadLogo from '../../assets/images/projects/little-nomad.png'
import walkthroughViewGif from '../../assets/images/projects/wvwalkthroughview-optimize.gif'

import rustweb3 from '../../assets/images/foss/rustweb3.png'
import redox from '../../assets/images/foss/redox.png'

class FossSection extends React.Component {
  render() {
    return (
      <Section title="Past & Present FOSS Contributions">
        <div className="row">
          <FossUnit
            logo={rustweb3}
            lang="Rust"
            colour="#fff"
            lang_colour="#E43717"
            title="Rust Web3"
            link="https://www.github.com/tomusdrw/rust-web3/"
            timeperiod="Aug 2018 - Present"
            subtitle="The Rust Version of Web3JS. It makes Ethereum API's available to more developers and helps grow Ethereum's use."
          />
          <FossUnit
            logo={redox}
            lang="Rust"
            colour="#fff"
            lang_colour="#E43717"
            title="Redox OS"
            link="https://redox-os.org/"
            timeperiod="Apr 2017"
            subtitle="RedoxOS is an Operating System written completely in Rust. After becoming interested in Rust, this is the first project I contributed to. I fixed bugs with the WindowManager and the PIT interrupt handler not context switching."
          />
        </div>
      </Section>
    )
  }
}

export default FossSection
