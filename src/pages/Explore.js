import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';

function Explore() {
  return (
    <div>
      Explore
      <Footer />
      <Header namePage="Explore" isEnable={ false }/>
    </div>
  );
}

export default Explore;
