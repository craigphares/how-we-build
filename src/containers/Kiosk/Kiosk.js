import AFRAME from 'aframe'
import { Scene, Entity } from 'aframe-react'
import React from 'react'
import PropTypes from 'prop-types'
import 'aframe-material'
import 'aframe-text-geometry-component'
import 'aframe-environment-component'

// import Grid from '../../components/Grid'
// import Sky from '../../components/Sky'
import Camera from '../../components/Camera'
// import picassoTower from './picasso-tower.jpg'

AFRAME.ASSETS_PATH = './assets'

class Kiosk extends React.Component {
  constructor(props) {
    super(props)

    document.title = 'How We Build | Kiosk'

    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    console.log('focus', this.username)
    this.username.focus()
  }

  changeUsername(e) {
    this.setState({username: e.target.value})
  }

  changePassword(e) {
    this.setState({password: e.target.value})
  }

  submitForm() {
    // this.props.onLogin(this.state.username, this.state.password)
    this.props.onNext()
  }

  focusUsername(e) {
    console.log('focus username', e)
    console.log('keyboard', this.keyboard)
    // this.keyboard.open()
  }

  blurUsername(e) {
    console.log('blur username', e)
  }

  focusPassword(e) {
    console.log('focus password', e)
    console.log('keyboard', this.keyboard)
    // this.keyboard.open()
  }

  keyboardOpened(e) {
    console.log('keyboard opened', e)
    // this.keyboard.show()
  }

  keyboardDismissed(e) {
    console.log('keyboard dismissed', e)
  }

  keyboardInput(e) {
    console.log('keyboard input', e)
  }

  keyboardBackspace(e) {
    console.log('keyboard backspace', e)
  }

  keyboardEnter(e) {
    console.log('keyboard enter', e)
    this.props.onNext()
  }

  render() {
    return(
      <Scene>
        <a-assets>
          <a-asset-item id="futuraFont" src="/fonts/futura2.typeface.json"/>
        </a-assets>

        <Entity environment={{preset: 'default'}}/>


        {/*<Entity laser-controls={{hand: 'right'}}/>*/}
        <Camera x={0} y={0}
                onCheckpointEnd={(checkpoint) => this.handleCheckpoint(checkpoint)}
                />

        <Entity position="0 0.4 1">
          <Entity primitive='a-keyboard'
            is-open={true}
            // physical-keyboard='true'
            className='clickable'
            events={{
              didopen: (e) => this.keyboardOpened(e),
              diddismiss: (e) => this.keyboardDismissed(e),
              input: (e) => this.keyboardInput(e),
              backspace: (e) => this.keyboardBackspace(e),
              enter: (e) => this.keyboardEnter(e)
            }} 
            _ref={(keyboard) => this.keyboard = keyboard}
            />
        </Entity>

        
        <Entity primitive='a-form' position='0 0.4 -1'>
          {/*<Entity position='-0.5 1.2 0'
                text-geometry={{
                  value: 'SIGN IN', 
                  font: '#futuraFont',
                  size: 0.2
                }}
                material={{color: 'white'}} />*/}
          <Entity primitive='a-input'
            placeholder="Username" 
            // position="-1.025 1.2 0" 
            position="-0.6 0.95 0" 
            color="black" 
            width="1.2" 
            value={this.state.username}
            className='clickable'
            events={{
              change: (e) => this.changeUsername(e),
              focus: (e) => this.focusUsername(e),
              blur: (e) => this.blurUsername(e)
            }} 
            _ref={(username) => this.username = username}
            />
          <Entity primitive='a-input'
            type="password" 
            placeholder="Password" 
            // position="-1.025 1 0" 
            position="-0.6 0.75 0" 
            color="black" 
            width="1.2" 
            value={this.state.password}
            className='clickable'
            events={{
              change: (e) => this.changePassword(e),
              focus: (e) => this.focusPassword(e)
            }} 
            />
          {/*<Entity primitive='a-button' 
                  value="Sign in" 
                  type="raised" 
                  position="0.025 1.1 0" 
                  width="1"
                  className='clickable'
                  events={{click: () => this.submitForm()}} />*/}
        </Entity>

        {/*<Entity position='0 0 -3'>
          <Entity geometry={{
              primitive: 'box',
              width: 3,
              height: 3.2,
              depth: 0.1
            }}
            position='0 0 0'
            material={{
              color: '#272435'
            }}
            />
          <Entity geometry={{
              primitive: 'box',
              width: 1.55,
              height: 3.2,
              depth: 0.1
            }}
            position='-1.5 0 0.2'
            rotation='0 25 0'
            material={{
              color: '#272435'
            }}
            />
          <Entity geometry={{
              primitive: 'box',
              width: 1.55,
              height: 3.2,
              depth: 0.1
            }}
            position='1.5 0 0.2'
            rotation='0 -25 0'
            material={{
              color: '#272435'
            }}
            />
        </Entity>*/}

        {/*<Entity primitive='a-sky' src={picassoTower} />*/}
      </Scene>
    )
  }
}

Kiosk.propTypes = {
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  slide: PropTypes.number
}

export default Kiosk