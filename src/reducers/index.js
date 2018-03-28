import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import presentation from './presentation'

const howWeBuildApp = combineReducers({
  presentation,
  router: routerReducer
})

export default howWeBuildApp