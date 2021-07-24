import React, { useState, useEffect } from 'react';
import Title from '../../components/title';
import ReCAPTCHA from "react-google-recaptcha";
import './contact.css';

const Contact = (props) => {
    useEffect(() => {
        // const btn = document.querySelector('.button button')
        // btn.style.cursor = 'not-allowed';
        if (value) {
            const btn = document.querySelector('.button button')
            btn.style.cursor = 'auto';
        }
        else {
            const btn = document.querySelector('.button button')
            btn.style.cursor = 'not-allowed';
        }
    })
    const [load, setLoad] = useState(true);
    const [value, setvalue] = useState('');
    const _reCaptchaRef = React.createRef();

    const handleChange = value => {
        console.log("Captcha value:", value);
       
        setvalue(value);

    };
    const submitEvent = (e) => {
        e.prevantDefault();
    }
    return (
        <section className="contact">
            <div className="container" style={{ justifyContent: 'center', textAlign: 'center' }}>
                <div className="row" >
                    <Title title="Contact Us" />
                    <form onSubmit={submitEvent}>
                        <div className="form">
                            <div className="col-lg-5">
                                <div className="message">
                                    <input type="text" id="name" class="form__input" autocomplete="off" placeholder=" " />
                                    <label for="email" class="form__label">Name</label>
                                </div>
                                <div className="message">
                                    <input type="text" id="email" class="form__input" autocomplete="off" placeholder=" " />
                                    <label for="email" class="form__label">Email</label>
                                </div>
                                <div className="message">
                                    <input type="text" id="cell" class="form__input" autocomplete="off" placeholder=" " />
                                    <label for="email" class="form__label">Cell</label>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="message">
                                    <input type="text" id="message_text" class="form__input" autocomplete="off" placeholder=" " />
                                    <label for="email" class="form__label">Enter Your message</label>
                                </div>
                            </div>
                        </div>
                        {load && (
                            <ReCAPTCHA
                                style={{ display: "inline-block" }}
                                theme="light"
                                ref={_reCaptchaRef}
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={handleChange}
                            />
                        )}
                        <div className="button">
                            <button type="button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default Contact;