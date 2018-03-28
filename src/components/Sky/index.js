import { Entity } from 'aframe-react'
import React from 'react'

import sky from './sky.jpg'

class Sky extends React.Component {
  render() {
    return(
      <Entity primitive='a-sky' 
              src={sky} 
              rotation='0 -90 0' 
              // color='#000'
              />
    )
  }
}

export default Sky