import { Entity } from 'aframe-react'
import React from 'react'
import PropTypes from 'prop-types'
import 'aframe-particle-system-component'
import 'aframe-extras'

import smokeparticle from './smokeparticle.png'


class Teleporter extends React.Component {
  handleClick() {
    if (this.props.onClick !== undefined) {
      this.props.onClick()
    }
  }

  render() {
    return(
      <Entity position={this.props.position}>
        <Entity position='0 0 0'
                particle-system={{
                  color: '#FFFFFF,#FFFFFF',
                  type: 3,
                  accelerationValue: '0 0.2 0',
                  accelerationSpread: '0.1 0.1 0.1',
                  velocityValue: '0 0.2 0',
                  velocitySpread: '0.1 0.1 0.1',
                  opacity: 0.5,
                  positionSpread: '2 0 2',
                  texture: smokeparticle,
                  particleCount: 100,
                  size: 0.1,
                  maxAge: 3.2
                }} />
        <Entity primitive='a-cylinder' 
                radius='1' 
                height='3.2' 
                position='0 1.6 0' 
                color={this.props.color}
                material={{
                  transparent: true,
                  opacity: 0.2
                }}/>
        <Entity primitive='a-cylinder' 
                checkpoint
                radius='1' 
                height='0.1' 
                position='0 0 0' 
                color={this.props.color}
                events={{
                  click: () => this.handleClick()
                }}
                className='clickable'
                id={this.props.uuid} />
      </Entity>
    )
  }
}

Teleporter.propTypes = {
  position: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  uuid: PropTypes.string
}

export default Teleporter