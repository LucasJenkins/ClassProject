import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../views/Home'
import Trash from '../views/Trash'

const App = props => (
  <div>
    <Route path='/trash' component={Trash} />
    <Route exact path='/' component={Home} />
  </div>
)

export default App
