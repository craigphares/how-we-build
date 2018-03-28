import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Approach from './Approach'

const mapStateToProps = state => {
  console.log('match:', state)
  return {
    slide: state.presentation.slide
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNext: () => {
      dispatch(push('/form'))
    },
    onPrevious: () => {
      dispatch(push('/rules'))
    }
  }
}

const ApproachContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Approach)

export default ApproachContainer
