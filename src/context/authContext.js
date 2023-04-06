import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null,
  );
  const login = (obj) => setCurrentUser({ ...obj, id: crypto.randomUUID(), img: 'https://i.pinimg.com/236x/75/db/ac/75dbacdc47b7c6ccba207afd5b484811.jpg' });
  const logOut = () => setCurrentUser(null);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
