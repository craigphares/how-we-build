import { Entity } from 'aframe-react'
import React from 'react'

import grid from './grid.png'
import sky from '../Sky/sky.jpg'

class Grid extends React.Component {
  render() {
    return(
      <Entity 
        geometry={{primitive: 'plane', width: 10000, height: 10000}} 
        rotation='-90 0 0' 
        // color='#000'
        material={{
          src: grid, 
          repeat: '10000 10000', 
          transparent: true, 
          metalness: 0.6, 
          roughness: 0.4, 
          sphericalEnvMap: sky
        }}/>
    )
  }
}

export default Grid