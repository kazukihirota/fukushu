import axios from 'axios';
import React, { useContext, useState } from 'react';

const API_URL = process.env.REACT_APP_SERVER_URL + 'books';

const BookContext = React.createContext();

export function useBook() {
  return useContext(BookContext);
}

export function BookProvider({ children }) {
  async function addBook() {}

  const value = {};
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}
