import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import '../css/Register.css'
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import HomeSearch from "../components/Home/HomeSearch";

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  let history = useHistory();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }
  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onPhoneHandler = (event) => {
    setPhone(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    } else {
      axios(
          {
            url: '/register',
            method: 'post',
            data: {
              email: email, password: password, name: name, phone: phone,
            },

            baseURL: 'http://localhost:8080',
          }).then(function (response) {

        if(response.data == "success") {
          //회원가입 성공 시 로그인 화면으로 이동
          history.push("/login");
          alert("회원가입 성공!");

        } else {
          alert("회원가입 실패!");
        }
      })
    }
  }

  return (
      <div className="all">
        <div className="full-container flex">
          <HomeSearch />
        </div>

        <div className="loginregister">
          <div>
          <form onSubmit={onSubmit}>
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
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={onPasswordHandler}
                  className="loginregister__input"
              />
            </div>
            <div>
              <input
                  name="confirmPassword"
                  type="password"
                  placeholder="비밀번호 확인"
                  value={confirmPassword}
                  onChange={onConfirmPasswordHandler}
                  className="loginregister__input"
              />
            </div>
            <div>
              <input
                  name="name"
                  type="text"
                  placeholder="이름"
                  value={name}
                  onChange={onNameHandler}
                  className="loginregister__input"
              />
            </div>
            <div>
              <input
                  name="phone"
                  type="phone"
                  placeholder="전화번호"
                  value={phone}
                  onChange={onPhoneHandler}
                  className="loginregister__input"
              />
            </div>

            <Button
                id="register"
                type="submit"
                onSubmit={onSubmit}
                className="button"
                onClick={onSubmit}
                variant="darked"
            >
              Register
            </Button>
          </form>
          <h4 className="letter kr">아이디가 이미 있으신가요?&nbsp;&nbsp;&nbsp;</h4>
          <h4 className="letter eng">
            <Link to={`/login`}> Login 하러 가기</Link>
          </h4>
          </div>
        </div>
      </div>
  )
}
export default Register