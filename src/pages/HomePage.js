import React from 'react';
import Nav from '../scenes/nav/nav';
import Header from '../scenes/header/header';
import Mpartial from '../scenes/mpartial/mpartial';
import PostMitigration from '../scenes/post-mitigration/postMitigration';
import HowItWork from '../scenes/How-It-Work/howItWork';
import WaterFall from '../scenes/waterFall/waterFall';
const HomePage = () => {
    return (
        <div>
            <Nav/>
            <Header/>
            <Mpartial/>
            <PostMitigration/>
            <HowItWork/>
            <WaterFall/>

        </div>
    );
};

export default HomePage;