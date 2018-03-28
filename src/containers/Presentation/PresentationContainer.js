import { connect } from 'react-redux'
import { push } from 'react-router-redux'

// import { next, previous } from '../../actions'
import Presentation from './Presentation'

const mapStateToProps = state => {
  console.log('match:', state)
  return {
    slide: state.presentation.slide
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNext: () => {
      console.log('dispatch next')
      // dispatch(next())
      dispatch(push('/etopia'))
    }
  }
}

const PresentationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentation)

export default PresentationContainer
