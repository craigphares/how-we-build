import { Entity } from 'aframe-react'
import React from 'react'
import 'aframe-animation-component'
import PropTypes from 'prop-types'
import 'aframe-extras'

const minSize = '0.5 0.5 0.5'
const maxSize = '1.5 1.5 1.5'

class Camera extends React.Component {
  handleNavigationEnd(checkpoint) {
    console.log('arrived at checkpoint', checkpoint)
    this.props.onCheckpointEnd(checkpoint)
  }

  render() {
    return(
      <Entity id='rig' 
              movement-controls={{controls: 'checkpoint'}} 
              checkpoint-controls={{mode: 'animate'}}
              events={{
                'navigation-end': (checkpoint) => this.handleNavigationEnd(checkpoint)
              }}>
        <Entity camera 
                look-controls 
                // wasd-controls 
                // mouse-cursor
                position={this.props.x + ' 1.6 ' + this.props.y}>
          <Entity cursor={{fuse: false, fuseTimeout: 1500}}
                  raycaster={{objects: '.clickable'}}
                  position='0 0 -1'
                  geometry={{
                    primitive: 'ring', 
                    radiusInner: 0.02, 
                    radiusOuter: 0.03
                  }}
                  scale={minSize}
                  material={{
                    color: 'white', 
                    shader: 'flat',
                    transparent: true,
                    opacity: 0.9
                  }}
                  animation__click={{
                    property: 'scale', 
                    startEvents: 'click', 
                    easing: 'easeInQuad', 
                    from: minSize, 
                    to: maxSize, 
                    dur: 150
                  }}
                  animation__fusing={{
                    property: 'scale', 
                    startEvents: 'fusing', 
                    easing: 'easeInQuad', 
                    from: maxSize, 
                    to: minSize, 
                    dur: 1500
                  }}
                  animation__mouseenter={{
                    property: 'scale', 
                    startEvents: 'mouseenter', 
                    easing: 'easeInQuad', 
                    from: minSize, 
                    to: maxSize, 
                    dur: 150
                  }}
                  animation__mouseleave={{
                    property: 'scale', 
                    startEvents: 'mouseleave', 
                    easing: 'easeInQuad', 
                    from: maxSize, 
                    to: minSize, 
                    dur: 150
                  }}
                  />
        </Entity>
      </Entity>
    )
  }
}

Camera.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  onCheckpointEnd: PropTypes.func
}

Camera.defaultProps = {
  x: 0,
  y: 0
}

export default Camera