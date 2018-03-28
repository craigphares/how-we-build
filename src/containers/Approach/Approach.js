import 'aframe'
import { Scene, Entity } from 'aframe-react'
import React from 'react'
import PropTypes from 'prop-types'
import 'aframe-environment-component'
import 'aframe-text-geometry-component'

import Camera from '../../components/Camera'
import Teleporter from '../../components/Teleporter'

class Approach extends React.Component {
  constructor(props) {
    super(props)

    document.title = 'How We Build | Approach'
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
    return(
      <Scene>
        <a-assets>
          <a-asset-item id="futuraFont" src="/fonts/futura2.typeface.json"/>
        </a-assets>

        <Entity environment={{preset: 'default'}}/>

        <Camera x={0} y={0}
                onCheckpointEnd={(checkpoint) => this.handleCheckpoint(checkpoint)}
                />

        <Entity position='0 0 -9' rotation="0 45 0" scale='0.1 0.1 0.1'>
          <a-entity rotation="-20 0 0" position="0 0 10.75" scale="1 0 1">
            <a-animation attribute="scale" to="1 1 1" delay="200" dur="1000" easing="ease-out"></a-animation>
            <a-box width="12.5" depth="1" height="30" color="#EF2D5E" position="0 15 0">
              <a-entity rotation="-140 0 0" position="0 15 0" scale="1 0 1">
                <a-animation attribute="scale" to="1 1 1" delay="800" dur="800" easing="ease-out"></a-animation>
                <a-box width="12.49" depth=".1" height="30" color="#24CAFF" position="0 15 -.52" shader="flat"></a-box>
                <a-box width="12.5" depth="1" height="30" color="#EF2D5E" position="0 15 0"></a-box>
              </a-entity>
            </a-box>
          </a-entity>
          <a-entity rotation="-90 0 0" position="0 8 7.5" scale="1 0 1">
            <a-animation attribute="scale" to="1 1 1" delay="800" dur="600" easing="ease-out"></a-animation>
            <a-box width="12.45" depth=".1" height="14" color="#F2E646" position="0 7 .52" shader="flat"></a-box>
            <a-box width="12.5" depth="1" height="14" color="#EF2D5E" position="0 7 0"></a-box>
          </a-entity>
        </Entity>

        <Entity position='-3.4 4 -9'
                text-geometry={{
                  value: 'A-FRAME + Cardboard', 
                  font: '#futuraFont',
                  size: 0.5
                }}
                material={{color: 'white'}} />

        <Entity position='0 4 -7' 
                light={{
                  type: 'point', 
                  color: '#fff'
                }}/>

        <Teleporter position='8 0 -4' 
                    color='#3d6e7f'
                    uuid='next'
                    />
        <Teleporter position='-8 0 -4' 
                    color='#911014'
                    uuid='previous'
                    />
      </Scene>
    )
  }
}

Approach.propTypes = {
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  slide: PropTypes.number
}

export default Approach