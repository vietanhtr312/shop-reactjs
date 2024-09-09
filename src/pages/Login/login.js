import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    setEmailError('')
    setPasswordError('')

    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }

    checkAccountExists((accountExists) => {
      if (accountExists) logIn()
      else if (
        window.confirm(
          'An account does not exist with this email address: ' +
          email +
          '. Do you want to create a new account?',
        )
      ) {
        logIn()
      }
    })
  }

  const checkAccountExists = (callback) => {
    fetch('http://localhost:3080/check-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((r) => r.json())
      .then((r) => {
        callback(r?.userExists)
      })
  }

  const logIn = () => {
    fetch('http://localhost:3080/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => r.json())
      .then((r) => {
        if ('success' === r.message) {
          localStorage.setItem('user', JSON.stringify({ email, token: r.token }))
          props.setLoggedIn(true)
          props.setEmail(email)
          navigate('/')
        } else {
          window.alert('Wrong email or password')
        }
      })
  }

  return (
    <div className={'wrapper'}>
      <div className={'smallContainer'} style={{ backgroundImage: 'url(https://down-vn.img.susercontent.com/file/sg-11134004-7rdww-lz7fzhaqivg745)' }}>
        <div className={'mainContainer'}>
          <div className={'titleContainer'}>
            <div>Đăng nhập</div>
          </div>
          <br />
          <div className={'inputContainer'}>
            <label>Email</label>
            <input
              value={email}
              placeholder="Nhập email của bạn"
              onChange={(ev) => setEmail(ev.target.value)}
              className={'inputBox'}
            />
            <label className="errorLabel">{emailError}</label>
          </div>
          <br />
          <div className={'inputContainer'}>
            <label>Mật khẩu</label>
            <input
              value={password}
              placeholder="Nhập mật khẩu của bạn"
              onChange={(ev) => setPassword(ev.target.value)}
              className={'inputBox'}
              type='password'
            />
            <label className="errorLabel">{passwordError}</label>
          </div>
          <br />
          <div className={'inputContainer'}>
            <input className={'btn btn--primary'} type="button" onClick={onButtonClick} value={'Đăng nhập'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login