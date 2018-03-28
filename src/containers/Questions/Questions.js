import 'aframe'
import { Scene, Entity } from 'aframe-react'
import React from 'react'
import PropTypes from 'prop-types'
import 'aframe-text-geometry-component'

import Sky from '../../components/Sky'
import Grid from '../../components/Grid'
import Camera from '../../components/Camera'
import Teleporter from '../../components/Teleporter'

class Questions extends React.Component {
  constructor(props) {
    super(props)

    document.title = 'How We Build | Questions'
  }

  handleCheckpoint(checkpoint) {
    const uuid = checkpoint.detail.checkpoint.id
    if (uuid === 'next') {
      this.props.onNext()
    } else if (uuid === 'previous') {
      this.props.onPrevious()
    }
  }

  render() {
    let x = 0
    let y = 0

    return(
      <Scene>
        <a-assets>
          <a-asset-item id="futuraFont" src="/fonts/futura2.typeface.json"/>
        </a-assets>

        <Camera x={x} 
                y={y} 
                onCheckpointEnd={(checkpoint) => this.handleCheckpoint(checkpoint)} 
                />

        <Entity position='-4 2 -5'
                text-geometry={{
                  value: 'QUESTIONS?', 
                  font: '#futuraFont',
                  size: 1
                }}
                material={{color: 'white'}} />

        <Entity position='-4 1 -5'
                text-geometry={{
                  value: '@craigphares', 
                  font: '#futuraFont',
                  size: 0.5
                }}
                material={{color: 'white'}} />

        <Teleporter position='8 0 -4' 
                    color='#3d6e7f'
                    uuid='next'
                    />
        <Teleporter position='-8 0 -4' 
                    color='#911014'
                    uuid='previous'
                    />

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

Questions.propTypes = {
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  slide: PropTypes.number
}

export default Questions