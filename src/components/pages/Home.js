import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Middle from '../Middle';
// import WhySection from '../WhySection';

function Home(){
    return (
        <>
            <HeroSection />
            <Cards />
            <Middle />
            {/* <WhySection /> */}
            <Footer />
            
        </>
    );
}
export default Home;