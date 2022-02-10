import { useState } from 'react'
// import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import '../css/Login.css'

function Login() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const onIdHandler = (event) => {
    setId(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    const USERID = localStorage.getItem('id')
    const USERPASS = localStorage.getItem('password')

    if ((id === USERID) & (password === USERPASS)) {
      console.log('로그인 성공')
    } else {
      console.log('로그인 실패')
    }

    event.preventDefault()
    // setDisabled(true)
    // await new Promise((r) => setTimeout(r, 1000))
    // if (
    //   USER.find((user) => user.email === email && user.password === password)
    // ) {
    //   const currentUser = USER.find((user) => user)
    //   setLogin(true)
    //   localStorage.setItem('currentUser', JSON.stringify(currentUser))
    // } else {
    //   alert('정보가 없습니다.')
    // }
    // setDisabled(false)
  }
  return (
    <div className="all">
      <div className="loginregister">
        <div>
          <form>
            <div>
              <input
                type="text"
                onChange={onIdHandler}
                value={id}
                className="loginregister__input"
                placeholder="아이디"
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
