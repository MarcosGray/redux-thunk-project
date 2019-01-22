import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducer'
import logger from 'redux-logger'
import Info from './Info'

const store = createStore( reducer, applyMiddleware(logger) )

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Info />  
        </div>
      </Provider>
    )
  }
}

export default App
