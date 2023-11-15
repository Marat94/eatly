import React, {useRef, useState} from "react";
import Wrapper from "../wrapper/Wrapper";
import './contact.css';

const Contact = () => {

    const nameInputRef = useRef(null)
    const emailInputRef = useRef(null)
    const textareaRef = useRef(null)


    const onHandleClick = () => {
        nameInputRef.current.value = ""
        emailInputRef.current.value = ""
        textareaRef.current.value = ""
    }

    return (
        <Wrapper>
            <section className="contact">
                <div className="contact-body">
                    <div className="contact-item">
                        <div className="contact-item-headline">
                            <h1>Just Contact</h1>
                            <img src="/image/contact/vectorArrow.svg" alt="vector"/>

                        </div>
                        <div className="contact-item-mobile">
                            <img src="/image/application/mobile.svg" alt="mobile" className="contact-mobile-img"/>
                            <img src="/image/application/illustration.svg" alt="illustration"/>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h1 className="contact-form-headline">Customer <span>Support</span></h1>
                        <form id="form">
                            <input type="text" placeholder="Full Name" className="name-input" ref={nameInputRef}/>
                            <input type="email" placeholder="enter your email"  className="email-input" ref={emailInputRef}/>
                            <textarea placeholder="Enter The Problem Or Query" className="contact-textarea" ref={textareaRef}/>
                            <input type="button" className="button-input" value="Send Now" onClick={onHandleClick}/>
                        </form>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
};

export default Contact;