import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Form from './Form'

const mapStateToProps = state => {
  console.log('match:', state)
  return {
    slide: state.presentation.slide
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNext: () => {
      dispatch(push('/kiosk'))
    },
    onPrevious: () => {
      dispatch(push('/approach'))
    }
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default FormContainer
