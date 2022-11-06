import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_SERVER_URL + 'users';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  async function signup(name, email, password) {
    const response = await axios.post(API_URL, { name, email, password });

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
      setCurrentUser(response.data);
      console.log('Logged in successfully');
    } else {
      throw new Error('');
    }
  }

  async function login(email, password) {
    const response = await axios.post(API_URL + '/login', { email, password });

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
      setCurrentUser(response.data);
      console.log('Logged in successfully');
    } else {
      throw new Error('');
    }
  }

  function logout() {
    localStorage.removeItem('user');
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  useEffect(() => {
    if (!currentUser) {
      const user = localStorage.getItem('user');
      if (user) {
        setCurrentUser(JSON.parse(user));
      }
    }
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
