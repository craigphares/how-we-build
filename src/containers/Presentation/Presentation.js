import 'aframe'
import { Scene, Entity } from 'aframe-react'
import React from 'react'
import PropTypes from 'prop-types'
import 'aframe-text-geometry-component'

import Sky from '../../components/Sky'
import Grid from '../../components/Grid'
import Title from '../../components/Title'
import Camera from '../../components/Camera'
import Teleporter from '../../components/Teleporter'

class Presentation extends React.Component {
  constructor(props) {
    super(props)

    document.title = 'How We Build'
  }

  handleCheckpoint(checkpoint) {
    console.log('checkpoint: ', checkpoint)
    this.props.onNext()
  }

  render() {
    let x = 0
    let y = 0

    return(
      <Scene background={{
        // color: 'black'
        }}>
        <a-assets>
          <a-asset-item id='dawningFont' src='https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2FdawningOfANewDayRegular.typeface.json?1490305922844' />
          <a-asset-item id='exoFont' src='https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2Fexo2Black.typeface.json?1490305922150' />
          <a-asset-item id="exoItalicFont" src="https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2Fexo2BlackItalic.typeface.json?1490305922725" />
          <a-asset-item id="futuraFont" src="/fonts/futura2.typeface.json"/>
        </a-assets>

        <Camera x={x} 
                y={y} 
                onCheckpointEnd={(checkpoint) => this.handleCheckpoint(checkpoint)} 
                />

        <Teleporter position='8 0 -4' 
                    color='#3d6e7f'
                    />

        <Title />

        <Entity position='-3 0 -11'
                  text-geometry={{
                    value: 'howwebuild.sixoverground.com', 
                    font: '#futuraFont',
                    size: 0.3
                  }}
                  material={{color: 'white'}} />

        {/*<Entity position='0 0 -5'
                className='clickable'
                link={{
                  href: '/etopia',
                  title: 'Etopia'
                }}/>*/}

        <Grid/>
        <Entity light={{color: '#ccccff', intensity: 1, type: 'ambient'}}/>
        <Entity light={{color: '#ffaaff', intensity: 1.5}} position='5 5 5'/>
        <Entity light={{color: 'white', intensity: 0.5}} position='-5 5 15'/>
        <Entity light={{color: 'white', type: 'ambient'}}/>
        <Sky/>
      </Scene>
    )
  }
}

Presentation.propTypes = {
  onNext: PropTypes.func,
  slide: PropTypes.number
}

export default Presentation