import React from 'react';
import './index.css'
const postMitigration = (props) => (

    <section className="mitigration" >
        <div className="wrapper">
            <div className="images">
                <div className="img-1"></div>
                <div className="img-2"></div>
            </div>
            <div className="slider">
                <input type="range" min="0" max="100" value="50" />
            </div>
        </div>
        <div className="try-now-btn">
            <a href="#">
                <button className="btn">Try Today</button>
            </a>
        </div>
    </section>

);

export default postMitigration;