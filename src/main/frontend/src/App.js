import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩
import React, { useState, useEffect } from 'react'
import Detail from './routes/Detail'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import PostWrite from './routes/PostWrite'
import Viewer from './routes/Viewer'
function App() {

  return (
      <div>

        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/postwrite">
              <PostWrite />
            </Route>
            <Route path="/viewer">
              <Viewer />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
  )
}
export default App