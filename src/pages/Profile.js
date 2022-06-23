import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user')) || { email: 'xablau@xablau.com' };

  return (
    <section>
      <div>
        <Header namePage="Profile" isEnable={ false } />
      </div>
      <p data-testid="profile-email">{ user?.email }</p>
      <div>
        <Link to="/done-recipes">
          <button
            data-testid="profile-done-btn"
            type="button"
          >
            Done Recipes
          </button>
        </Link>
        <Link to="/favorite-recipes">
          <button
            data-testid="profile-favorite-btn"
            type="button"
          >
            Favorite Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            data-testid="profile-logout-btn"
            type="button"
            onClick={ () => localStorage.clear() }
          >
            Logout
          </button>
        </Link>
      </div>
      <Footer />
    </section>
  );
}

export default Profile;
