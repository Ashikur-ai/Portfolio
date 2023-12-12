import React from 'react';
import image from "../../assets/background.jpg"
import Banner from '../../components/Banner';

import About from '../../components/About';
import Experience from '../../components/Experience';
import RecentWorks from '../../components/RecentWorks';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
const Home = () => {
    return (
        <div className=''>

            <Banner></Banner>
            <About></About>

            <Experience></Experience>
            <RecentWorks></RecentWorks>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;