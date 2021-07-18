import React from 'react';
import Nav from '../scenes/nav/nav';
import Header from '../scenes/header/header';
import Mpartial from '../scenes/mpartial/mpartial';
import PostMitigration from '../scenes/post-mitigration/postMitigration';
const HomePage = () => {
    return (
        <div>
            <Nav/>
            <Header/>
            <Mpartial/>
            <PostMitigration/>

        </div>
    );
};

export default HomePage;