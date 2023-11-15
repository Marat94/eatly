import React from "react";
import './forgetPassword.css'
import {Link} from "react-router-dom";

const ForgetPassword = () => {
    return (
        <section className="forget-pass">
            <div className="forget-pass-content">
                <div className="forget-pass-left">
                    <div className="forget-pass-logo">
                        <Link to="/">
                            <img src="/image/eatlyLogo.svg" alt="Eatly Logo"/>
                        </Link>
                    </div>
                    <div className="forget-pass-form">
                        <div className="forget-pass-headline">
                            <h1 className="forget-pass-title">Forget Password</h1>
                            <p className="forget-pass-text">Enter Your Mail To Reset</p>
                        </div>
                        <div className="forget-pass-inputs">
                            <div className="forget-pass-input">
                                <img src="/image/signUp/emailIcon.svg" alt="Email Icon"/>
                                <input type="email" placeholder="Email" className="forget-pass-email"/>
                            </div>
                            <div>
                                <input type="button" value="Verify" className="pass-verify-button"/>
                            </div>
                        </div>
                    </div>


                    <div className="privacy-policy-text">
                        <p>Privacy Policy</p>
                        <p>Copyright 2022</p>
                    </div>
                </div>
                <div className="forget-pass-right">
                    <div className="forget-pass-right-img">
                        <img src="/image/signUp/chickenHellGroup.svg" alt="Chicken Hell Group"
                             className="chicken-hell-group"/>
                    </div>
                    <div className="forget-pass-right-title">
                        <h1>Find Foods With Love</h1>
                        <p>
                            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
                            Including Asian, Chinese, Italians And Many More. Our Dashboard
                            Helps You To Manage Orders And Money.
                        </p>
                        <div className="forget-pass-indicator">
                            <div className="indicator-rectangle"></div>
                            <div className="indicator-ellipse"></div>
                            <div className="indicator-ellipse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgetPassword;
