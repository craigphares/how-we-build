import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Rules from './Rules'

const mapStateToProps = state => {
  console.log('match:', state)
  return {
    slide: state.presentation.slide
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNext: () => {
      dispatch(push('/approach'))
    },
    onPrevious: () => {
      dispatch(push('/etopia'))
    }
  }
}

const RulesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Rules)

export default RulesContainer
