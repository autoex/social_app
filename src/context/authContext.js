import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null,
  );
  const login = (obj) => setCurrentUser({ ...obj, id: crypto.randomUUID()});
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
