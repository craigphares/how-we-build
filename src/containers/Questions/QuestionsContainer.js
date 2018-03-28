import { connect } from 'react-redux'
import { push } from 'react-router-redux'

// import { next, previous } from '../../actions'
import Questions from './Questions'

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
      dispatch(push('/kiosk'))
    }
  }
}

const QuestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions)

export default QuestionsContainer
