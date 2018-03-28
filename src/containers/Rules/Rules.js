import 'aframe'
import { Scene, Entity } from 'aframe-react'
import React from 'react'
import PropTypes from 'prop-types'
import 'aframe-environment-component'

import Camera from '../../components/Camera'
import Teleporter from '../../components/Teleporter'

class Rules extends React.Component {
  constructor(props) {
    super(props)

    document.title = 'How We Build | Rules'
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

        <Entity environment={{preset: 'yavapai'}}/>

        <Camera x={0} y={0}
                onCheckpointEnd={(checkpoint) => this.handleCheckpoint(checkpoint)}
                />

        <Entity position='-1.5 0.1 -3'
                rotation='-90 0 0'
                scale='0.4 0.4 0.4'>
          <Entity position='0 0 0'
                  text-geometry={{
                    value: 'RULES', 
                    font: '#futuraFont',
                    size: 1
                  }}
                  material={{color: 'white'}} />
          <Entity position='0 -1 0'
                  text-geometry={{
                    value: 'Anyone can use Etopia', 
                    font: '#futuraFont',
                    size: 0.5
                  }}
                  material={{color: 'white'}} />
          <Entity position='0 -2 0'
                  text-geometry={{
                    value: 'Never break the fourth wall', 
                    font: '#futuraFont',
                    size: 0.5
                  }}
                  material={{color: 'white'}} />
          <Entity position='0 -3 0'
                  text-geometry={{
                    value: 'Everything has to work in VR', 
                    font: '#futuraFont',
                    size: 0.5
                  }}
                  material={{color: 'white'}} />
        </Entity>

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

Rules.propTypes = {
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  slide: PropTypes.number
}

export default Rules