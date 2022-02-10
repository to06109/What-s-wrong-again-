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
  // message 초기값을 ""으로 설정.
  const [message, setMessage] = useState('')
  // useEffect(함수,배열) : 컴포넌트가 화면에 나타났을(마운트)때 자동 실행.
  useEffect(() => {
    // fetch(url,options) : HTTP 요청 함수
    fetch('/api/hello')
        .then((response) => response.text())
        .then((message) => {
          setMessage(message)
        })
  }, [])

  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{message}</h1>
        </header>{' '}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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