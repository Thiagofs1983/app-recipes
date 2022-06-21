import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';

function Explore() {
  return (
    <div>
      <Footer />
      <Header namePage="Explore" isEnable={ false }/>
    </div>
  );
}

export default Explore;
