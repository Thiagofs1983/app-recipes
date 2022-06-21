import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';

function Profile() {
  const userProfile = localStorage.getItem('user');
  const userEmail = JSON.parse(userProfile);

  return (
    <section>
      <h1>Profile</h1>
      <p data-testid="profile-email">{ userEmail.email }</p>
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
      <Header />
    </div>
    </section>
  );
}

export default Profile;
