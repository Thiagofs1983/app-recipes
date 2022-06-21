import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';

function Profile() {
  return (
    <div>
      Profile
      <Footer />
      <Header namePage="Profile" isEnable={ false } />
    </div>
  );
}

export default Profile;
