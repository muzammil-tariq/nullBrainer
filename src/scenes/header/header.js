import React from 'react';
// import Video from 'react-native-fast-video';
import video from '../../assets/homepage.mp4'
import './index.css'
const header = (props) => (
    <>
    <header>

        {/* <Video src={video}  repeat="true" ></Video> */}
        <video src={video} autoPlay={true} loop={true} preload="auto" playsInline ></video>
    <div className="slider-down-btn"></div>
    </header>

    </>
);

export default header;