import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './pagesCss/Profile.css';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user')) || { email: 'xablau@xablau.com' };

  return (
    <section>
      <div>
        <Header namePage="Profile" isEnable={ false } />
      </div>
      <main className="mainProfile">
        <p className="emailProfile" data-testid="profile-email">{ user?.email }</p>
        <div className="divButtons">
          <Link to="/done-recipes">
            <button
              className="buttonProfile"
              data-testid="profile-done-btn"
              type="button"
            >
              Done Recipes
            </button>
          </Link>
          <Link to="/favorite-recipes">
            <button
              className="buttonProfile"
              data-testid="profile-favorite-btn"
              type="button"
            >
              Favorite Recipes
            </button>
          </Link>
          <Link to="/">
            <button
              className="buttonProfile"
              data-testid="profile-logout-btn"
              type="button"
              onClick={ () => localStorage.clear() }
            >
              Logout
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Profile;
