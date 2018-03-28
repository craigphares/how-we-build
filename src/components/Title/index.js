import { Entity } from 'aframe-react'
import React from 'react'
import 'aframe-text-geometry-component'

import pink from './pink.jpg'
import chrome from './chrome.jpg'

class Title extends React.Component {
  render() {
    return(
      <Entity position='0 1 -11' rotation='5 0 0'>
        <Entity
          rotation='0 0 5'
          position='-5 3 0.2'
          text-geometry={{
            value: 'How We Build', 
            font: '#dawningFont', 
            bevelEnabled: true, 
            bevelSize: 0.05, 
            bevelThickness: 0.05, 
            curveSegments: 12, 
            size: 1, 
            height: 0
          }}
          material={{
            color: 'lavenderblush', 
            metalness:1, 
            roughness: 0, 
            sphericalEnvMap: pink
          }}/>
        
        <Entity 
          position='-8.5 0.5 -0.5'
          scale='0.6 1.2 1'
          text-geometry={{
            value: 'SOLVING THE COMPLEXITIES', 
            font: '#exoFont', 
            bevelEnabled: true,
            bevelSize: 0.1,
            bevelThickness: 0.1,
            curveSegments: 1,
            size: 1.5,
            height: 0.5
          }}
          material={{
            color: 'pink',
            metalness: 0.9,
            roughness: 0.05,
            sphericalEnvMap: chrome
          }}/>

        <Entity 
          position='-8.5 0 0.3'
          text-geometry={{
            value: 'of Virtual Reality Development',
            font: '#exoItalicFont',
            style: 'italic',
            size: 0.8,
            weight: 'bold',
            height: 0
          }}
          material={{
            shader: 'flat',
            color: 'white'
          }}
          />
        <Entity 
          position='-8.5 0 0.3'
          text-geometry={{
            value: 'of Virtual Reality Development',
            font: '#exoItalicFont',
            style: 'italic',
            size: 0.8,
            weight: 'bold',
            height: 0,
            bevelEnabled: true,
            bevelSize: 0.04,
            bevelThickness: 0.04,
            curveSegments: 1
          }}
          material={{
            shader: 'flat',
            color: 'white',
            transparent: true,
            opacity: 0.4
          }}
          />
      </Entity>
    )
  }
}

export default Title