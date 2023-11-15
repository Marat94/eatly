import React, {useState} from "react";
import _ from "lodash";

import './questions.css';

const questions = [
    {
        id: 1,
        question: 'How long does delivery take?',
        answer: 'You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?',
        showIcon: '/image/menu/plus.svg',
        hideIcon: '/image/menu/minus.svg'
    },
    {
        id: 2,
        question: 'How Does It Work ?',
        answer: 'You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?',
        showIcon: '/image/menu/plus.svg',
        hideIcon: '/image/menu/minus.svg'
    },
    {
        id: 3,
        question: 'How does your food delivery service work?',
        answer: 'You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?',
        showIcon: '/image/menu/plus.svg',
        hideIcon: '/image/menu/minus.svg'
    },
    {
        id: 4,
        question: 'What payment options do you accept?',
        answer: 'You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?',
        showIcon: '/image/menu/plus.svg',
        hideIcon: '/image/menu/minus.svg'
    },
    {
        id: 5,
        question: 'Do you offer discounts or promotions?',
        answer: 'You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?',
        showIcon: '/image/menu/plus.svg',
        hideIcon: '/image/menu/minus.svg'
    },
]


const Questions = () => {

    const [openQuestion, setOpenQuestion] = useState(false)

    const onHandleShow = (id) => {
        setOpenQuestion(() => openQuestion === id ? !openQuestion : id)
    }

    return (
        <section className="questions">
            <div className="question-list">
                <h1 className="questions-title">Frequently Asked <span>Questions</span></h1>
                {questions.map(v => {
                    return (
                        <div className="question-task" key={_.uniqueId('key_')}>
                            <div className="question-item">
                                <p className="question">{v.question}</p>
                                {
                                    <img
                                        src={openQuestion === v.id ? v.hideIcon : v.showIcon}
                                        alt={openQuestion === v.id ? v.hideIcon : v.showIcon}
                                        onClick={() => onHandleShow(v.id)}
                                    />
                                }
                            </div>
                            {openQuestion === v.id && (
                                <div className="answer">{v.answer}</div>
                            )}
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Questions;