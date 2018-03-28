import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Route } from 'react-router'

import './index.css'
import howWeBuildApp from './reducers'
import Presentation from './containers/Presentation'
import Etopia from './containers/Etopia'
import Rules from './containers/Rules'
import Approach from './containers/Approach'
import Form from './containers/Form'
import Kiosk from './containers/Kiosk'
import Questions from './containers/Questions'

function run() {
  const history = createHistory()
  const middleware = routerMiddleware(history)
  const store = createStore(howWeBuildApp, applyMiddleware(middleware))

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className='app'>
          <Route exact path='/' component={Presentation}/>
          <Route path='/etopia' component={Etopia}/>
          <Route path='/rules' component={Rules}/>
          <Route path='/approach' component={Approach}/>
          <Route path='/form' component={Form}/>
          <Route path='/kiosk' component={Kiosk}/>
          <Route path='/questions' component={Questions}/>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run()
} else {
  window.addEventListener('DOMContentLoaded', run, false)
}
