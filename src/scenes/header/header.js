import React from 'react';
import video from '../../assets/homepage.mp4'
import './index.css'
const header = (props) => (
    <header>

        <video src={video} autoPlay={true} loop={true} preload="auto" playsInline ></video>
    </header>
);

export default header;