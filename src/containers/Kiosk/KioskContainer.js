import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Kiosk from './Kiosk'

const mapStateToProps = state => {
  console.log('match:', state)
  return {
    slide: state.presentation.slide
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNext: () => {
      dispatch(push('/'))
    },
    onPrevious: () => {
      dispatch(push('/form'))
    }
  }
}

const KioskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Kiosk)

export default KioskContainer
