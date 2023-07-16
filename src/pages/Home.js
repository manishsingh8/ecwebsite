import React from 'react';


import Header from '../components/Header';
import Baner from '../components/Baner';
import Expert from '../components/Expert';
import NewsLater from '../components/NewsLater';
import Plans from '../components/Plans';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Header />
        <Baner />
        <Expert />
        <NewsLater />
        <Plans />
        <Footer />
    </div>
  )
}

export default Home;
