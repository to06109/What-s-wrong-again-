import React, { useEffect, useState } from 'react'
import axios from 'axios' //restAPI
// import { useParams } from 'react-router-dom'
import { Link, useHistory } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import '../css/Login.css'
import HomeSearch from '../components/Home/HomeSearch'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory()

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    axios({
      url: '/login',
      method: 'post',
      data: {
        email: email,
        password: password,
      },

      baseURL: 'http://localhost:8080',
    }).then(function (response) {
      // console.log(response)
      if (response.data == 'success') {
        history.push('/')
        alert('로그인 성공!')
      } else {
        alert('로그인 실패!')
      }
    })
  }
  return (
    <div className="all">
      <div className="full-container flex">
        <HomeSearch />
      </div>

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
        </div>
      </div>
    </div>
  )
}
export default Login
