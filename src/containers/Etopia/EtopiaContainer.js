import { connect } from 'react-redux'
import { push } from 'react-router-redux'

// import { next, previous } from '../../actions'
import Etopia from './Etopia'

const mapStateToProps = state => {
  console.log('match:', state)
  return {
    slide: state.presentation.slide
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNext: () => {
      // dispatch(next())
      dispatch(push('/rules'))
    },
    onPrevious: () => {
      // dispatch(previous())
      dispatch(push('/'))
    }
  }
}

const EtopiaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Etopia)

export default EtopiaContainer
