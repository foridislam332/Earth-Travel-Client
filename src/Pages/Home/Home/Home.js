import React from 'react';
import Blogs from '../../Blogs/Blogs';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;