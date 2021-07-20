import React, { useState } from 'react';
import './index.css';
import img from '../../assets/comparison.png';
const PostMitigration = (props) => {
    const [range, setRange] = useState(50);
    const onRangeChange = (e) => {
        const img=document.querySelector('.img-2');
        const com=document.querySelector('.wrapper .arrows img');
        img.style.width=e.target.value + "%"
        com.style.left=(e.target.value - 7) + "%"
        setRange(e.target.value);
    }
    return (
        <section className="mitigration" >
            <div className="wrapper">
                <div className="images">
                    <div className="img-1"></div>
                    <div className="img-2"></div>
                </div>
                <div className="slider">
                    <input type="range" min="0" max="100" value={range} onChange={onRangeChange} />
                </div>
                <div className="arrows">
                    <img src={img}></img>
                </div>
            </div>
            <div className="try-now-btn">
                <a href="#">
                    <button className="btn">Try Today</button>
                </a>
            </div>

        </section>

    );
}

export default PostMitigration;