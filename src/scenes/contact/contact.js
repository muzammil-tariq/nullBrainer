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
                                    <input className="name" type="text" id="name" onChange={changeEvent} />
                                    <label className="label-message">Enter name</label>

                                </div>
                                <div className="message">
                                    <input className="email" type="email" id="email" onChange={changeEvent}  />
                                    <label className="label-message">Enter email</label>

                                </div>
                                <div className="message">

                                    <input className="cel" type="tel" id="tel" onChange={changeEvent}  />
                                    <label className="label-message">Enter cell</label>

                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="message">
                                    <input onChange={changeEvent} id="message"></input>
                                    <label className="label-message">Enter message</label>
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