import React from 'react';
import Nav from '../scenes/nav/nav';
import Header from '../scenes/header/header';
import Mpartial from '../scenes/mpartial/mpartial';
import PostMitigration from '../scenes/post-mitigration/postMitigration';
import HowItWork from '../scenes/How-It-Work/howItWork';
import WaterFall from '../scenes/waterFall/waterFall';
import ExampleDel from '../scenes/Example-Del/exampleDel';
import Contact from '../scenes/contact/contact';
const HomePage = () => {
    return (
        <div>
            <Nav/>
            <Header/>
            <Mpartial/>
            <PostMitigration/>
            <HowItWork/>
            <WaterFall/>
            <ExampleDel/>
            <Contact/>

        </div>
    );
};

export default HomePage;