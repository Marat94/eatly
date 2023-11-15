import React, {useState} from "react";
import './signUp.css';
import {Link} from "react-router-dom";
import {signUpApi} from "../../../../api";
import {useNavigate} from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate()
  const [signUpData, setSignUpData] = useState({
    username: '', password: '', email: '',
  })

  const onHandleSignUp = () => {
    signUpApi({
      username: signUpData.username, password: signUpData.password, email: signUpData.email,
    })
      .then(res => {
        res.data.auth && navigate('/signIn')
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  return (<section className="sign-up">
    <div className="sign-up-content">
      <div className="sign-up-left">
        <div className="sign-up-logo">
          <Link to="/">
            <img src="/image/eatlyLogo.svg" alt="logo"/>
          </Link>
        </div>
        <div className="sign-up-form">
          <h1 className="sign-up-headline">Sign Up To eatly</h1>
          <div className="sign-up-buttons">
            <button className="sign-up-google">G</button>
            <button className="sign-up-apple"><img src="/image/signUp/apple.svg" alt=""/></button>
          </div>
          <p className="sign-up-text">or</p>
          <div className="sign-up-inputs">
            <div className="sign-up-input">
              <img src="/image/signUp/nameIcon.svg" alt="name"/>
              <input
                type="text"
                placeholder="Full Name"
                className="sign-up-name"
                onChange={(e) => {
                  setSignUpData(() => {
                    return {
                      ...signUpData, username: e.target.value
                    }
                  })
                }}
              />
            </div>
            <div className="sign-up-input">
              <img src="/image/signUp/emailIcon.svg" alt="email"/>
              <input type="email" placeholder="Email" className="sign-up-email"
                     onChange={(e) => {
                       setSignUpData(() => {
                         return {
                           ...signUpData, email: e.target.value
                         }
                       })
                     }}/>
            </div>
            <div className="sign-up-input">
              <img src="/image/signUp/passIcon.svg" alt="password"/>
              <input type="password" placeholder="Password" className="sign-up-pass"
                     onChange={(e) => {
                       setSignUpData(() => {
                         return {
                           ...signUpData, password: e.target.value
                         }
                       })
                     }}/>
            </div>
            <div>
              <input
                type="button"
                value="SIGN UP"
                className="sign-up-button"
                onClick={onHandleSignUp}
              />
            </div>
          </div>

          <p className="login-ref">
            Already Have An Account?
            <Link to="/signIn" className="login-ref-link">Log In</Link>
          </p>
        </div>
        <div className="privacy-policy-text">
          <p>Privacy Policy</p>
          <p>Copyright 2022</p>
        </div>
      </div>
      <div className="sign-up-right">
        <div className="sign-up-right-img">
          <img src="/image/signUp/chickenHellGroup.svg" alt="box" className="chicken-hell-group"/>
        </div>
        <div className="sign-up-right-title">
          <h1>Find Foods With Love </h1>
          <p>
            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
            Including Asian, Chinese, Italians And Many More. Our Dashboard
            Helps You To Manage Orders And Money.
          </p>
          <div className="sign-up-indicator">
            <div className="indicator-rectangle"></div>
            <div className="indicator-ellipse"></div>
            <div className="indicator-ellipse"></div>
          </div>
        </div>
      </div>
    </div>

  </section>)
};

export default SignUp;