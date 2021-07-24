import React, { useState } from 'react';
import Title from '../../components/title';
import './contact.css';
const Contact = (props) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        tel: "",
        message: ""
    });

    const changeEvent = (e) => {
        if (e.target.id = data) {
            setData(e.target.id);
        }
    }

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