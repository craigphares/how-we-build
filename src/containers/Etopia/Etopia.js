import 'aframe'
import { Scene, Entity } from 'aframe-react'
import React from 'react'
import PropTypes from 'prop-types'
import 'aframe-text-geometry-component'
// import 'aframe-environment-component'

import Grid from '../../components/Grid'
import Sky from '../../components/Sky'
import Camera from '../../components/Camera'
import cityObj from './city-block.obj'
// import cityMtl from './city-block.mtl'
import Teleporter from '../../components/Teleporter'

class Etopia extends React.Component {
  constructor(props) {
    super(props)

    document.title = 'How We Build | Etopia'
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
          <a-asset-item id="city-obj" src={cityObj}/>
        </a-assets>

        <Camera x={x} 
                y={y}
                onCheckpointEnd={(checkpoint) => this.handleCheckpoint(checkpoint)}
                />

        <Entity obj-model={{
                  obj: '#city-obj',
                  // mtl: '#city-mtl'
                }}
                position="-55 20 -40" 
                rotation="0 90 0" 
                scale="30 65 35"
                material={{
                  color: 'black'
                }}/>
        <Entity obj-model={{
                  obj: '#city-obj',
                  // mtl: '#city-mtl'
                }} 
                position="-5 8 -40" 
                rotation="0 90 0" 
                scale="30 35 35"
                material={{
                  color: 'black'
                }}/>
        <Entity obj-model={{
                  obj: '#city-obj',
                  // mtl: '#city-mtl'
                }} 
                position="50 20 -40" 
                rotation="0 90 0" 
                scale="30 65 35"
                material={{
                  color: 'black'
                }}/>

        <Entity position='-4.5 0 -5'
                text-geometry={{
                  value: 'ETOPIA', 
                  font: '#futuraFont',
                  size: 2
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

Etopia.propTypes = {
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  slide: PropTypes.number
}

export default Etopia