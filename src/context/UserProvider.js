import { useState } from 'react';

function UserProvider({ children }) {
  const [email, setEmail] = useState();
  return (
    { children }
  );
}

export default UserProvider;
