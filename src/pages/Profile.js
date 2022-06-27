import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './pagesCss/Profile.css';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user')) || { email: 'xablau@xablau.com' };
  const history = useHistory();

  return (
    <section>
      <div>
        <Header namePage="Profile" isEnable={ false } />
      </div>
      <main className="mainProfile">
        <p className="emailProfile" data-testid="profile-email">{ user?.email }</p>
        <div className="divButtonsProfile">
          <button
            className="buttonProfile"
            data-testid="profile-done-btn"
            type="button"
            onClick={ () => history.push('/done-recipes') }
          >
            Done Recipes
          </button>
          <button
            className="buttonProfile"
            data-testid="profile-favorite-btn"
            type="button"
            onClick={ () => history.push('/favorite-recipes') }
          >
            Favorite Recipes
          </button>
          <button
            className="buttonProfile"
            data-testid="profile-logout-btn"
            type="button"
            onClick={ () => {
              localStorage.clear();
              history.push('/');
            } }
          >
            Logout
          </button>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Profile;
