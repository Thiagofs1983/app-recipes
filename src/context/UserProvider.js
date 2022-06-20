import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    console.log('teste', target);
    const { value, name } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const context = {
    handleChange,
    user,
  };

  return (
    <UserContext.Provider value={ context }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default UserProvider;
