import React, {useEffect, useState} from 'react';
import axios from "axios"; //restAPI
// import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import '../css/Login.css'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmit = (event) => {

    axios(
        {
          url: '/login',
          method: 'post',
          data: {
            email: email, password: password
          },

          baseURL: 'http://localhost:8080',
        }).then(function (response) {
      console.log(response.data)
      if(response.data == 'success') {
        alert("로그인 성공!");
      }
    })
    // const USERID = localStorage.getItem('id')
    // const USERPASS = localStorage.getItem('password')
    //
    // if ((id === USERID) & (password === USERPASS)) {
    //   console.log('로그인 성공')
    // } else {
    //   console.log('로그인 실패')
    // }
    //
    // event.preventDefault()
  }
  return (
      <div className="all">
        <div className="loginregister">
          <div>
            <form>
              <div>
                <input
                    name="email"
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={onEmailHandler}
                    className="loginregister__input"
                />
              </div>
              <div>
                <input
                    type="text"
                    onChange={onPasswordHandler}
                    value={password}
                    className="loginregister__input"
                    placeholder="비밀번호"
                />
              </div>
              <Button className="button" onClick={onSubmit} variant="darked">
                Login
              </Button>
            </form>
            <h4 className="letter kr">아직 회원이 아닌가요?&nbsp;&nbsp;&nbsp;</h4>
            <h4 className="letter eng">
              <Link to={`/register`}> Create an account!</Link>
            </h4>

            {/*라우터에서 백엔드와 통신*/}
            {/*<div className="App">*/}
            {/*  <header className="App-header">*/}
            {/*    <h1 className="App-title">{message}</h1>*/}
            {/*  </header>{' '}*/}
            {/*  <p className="App-intro">*/}
            {/*    To get started, edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*</div>*/}
          </div>
        </div>

      </div>
  )
}
export default Login