import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../views/Home'
import Testing from '../containers/UploadTest'

const App = props => (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/testing' component={Testing} />
  </div>
)

export default App
