import React, {useState} from "react";
import './signIn.css';
import {Link} from "react-router-dom";
import {signInApi} from "../../../../api";
import {useNavigate} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {error, success} from "../../../elements/alerts";

const SignIn = () => {
  const navigate = useNavigate()
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  })
  // const error = (err) => toast(err)
  // const success = (text) => toast(text)
  const onHandleSignIn = () => {
    signInApi({
      email: signInData.email,
      password: signInData.password,
    })
      .then(res => {
        success('Success request')
        res.data.auth && navigate('/')
      })
      .catch(err => {
        error(err.message)
        console.log('err', err)
      })
  }

  return (
    <section className="sign-in">
      <div className="sign-in-content">
        <div className="sign-in-left">
          <div className="sign-in-logo">
            <Link to="/">
              <img src="/image/eatlyLogo.svg" alt="logo"/>
            </Link>
          </div>
          <div className="sign-in-form">
            <h1 className="sign-in-headline">Sign In To eatly</h1>
            <div className="sign-in-buttons">
              <button className="sign-in-google">G</button>
              <button className="sign-in-apple"><img src="/image/signUp/apple.svg" alt=""/></button>
            </div>
            <p className="sign-in-text">or</p>
            <div className="sign-in-inputs">
              <div className="sign-in-input">
                <img src="/image/signUp/nameIcon.svg" alt="username"/>
                <input type="text" placeholder="username" className="sign-in-username"
                       onChange={(e) => {
                         setSignInData(() => {
                           return {
                             ...signInData,
                             email: e.target.value
                           }
                         })
                       }}/>
              </div>
              <div className="sign-in-input">
                <img src="/image/signUp/passIcon.svg" alt="password"/>
                <input type="password" placeholder="Password" className="sign-in-pass"
                       onChange={(e) => {
                         setSignInData(() => {
                           return {
                             ...signInData,
                             password: e.target.value
                           }
                         })
                       }}/>
              </div>
              <Link to="/forgetPass" className="forget-password-ref">Forget Password?</Link>
              <div>
                <input
                  type="button"
                  value="SIGN IN"
                  className="sign-in-button"
                  onClick={onHandleSignIn}
                />
              </div>
            </div>

            <p className="sign-up-ref">
              Create A New Account?
              <Link to="/signUp" className="sign-up-ref-link">Sign Up</Link>
            </p>
          </div>
          <div className="privacy-policy-text">
            <p>Privacy Policy</p>
            <p>Copyright 2022</p>
          </div>
        </div>
        <div className="sign-in-right">
          <div className="sign-in-right-img">
            <img src="/image/signUp/chickenHellGroup.svg" alt="box" className="chicken-hell-group"/>
          </div>
          <div className="sign-in-right-title">
            <h1>Find Foods With Love </h1>
            <p>
              Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
              Including Asian, Chinese, Italians And Many More. Our Dashboard
              Helps You To Manage Orders And Money.
            </p>
            <div className="sign-in-indicator">
              <div className="indicator-rectangle"></div>
              <div className="indicator-ellipse"></div>
              <div className="indicator-ellipse"></div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </section>
  )
}

export default SignIn
