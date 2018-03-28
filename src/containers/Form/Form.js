import AFRAME from 'aframe'
import { Scene, Entity } from 'aframe-react'
import React from 'react'
import PropTypes from 'prop-types'
import 'aframe-environment-component'

// import Grid from '../../components/Grid'
// import Sky from '../../components/Sky'
import Camera from '../../components/Camera'
import './index.css'

AFRAME.ASSETS_PATH = './assets'

class Form extends React.Component {
  constructor(props) {
    super(props)

    document.title = 'How We Build | Form'

  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onNext()
  }

  render() {
    return(
      <div>
        <Scene>
          <Entity environment={{preset: 'default'}}/>
          <Camera x={0} y={0}
                  onCheckpointEnd={(checkpoint) => this.handleCheckpoint(checkpoint)}
                  />        
        </Scene>
        <form className="form">
          <div className="form-wrapper">
            <input type="text" className="field"/>
            <input type="password" className="field"/>
            <button type="submit" className="btn" onClick={(e) => this.handleSubmit(e)}>SIGN IN</button>
          </div>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  slide: PropTypes.number
}

export default Form