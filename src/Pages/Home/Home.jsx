import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import Destination from './Destination';
import HotelLocation from './HotelLocation';

const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <HotelLocation/> */}
            <Destination/>
            <Faq/>
        </div>
    );
};

export default Home;