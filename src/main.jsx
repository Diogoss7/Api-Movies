import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './views/Home.jsx';
import MoviesDetails from './views/MoviesDetails.jsx';
import Search from './views/Search.jsx';
import './index.css';
import PersonsDatails from './views/PersonsDatails.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MoviesDetails />} />
          <Route path="search/:id" element={<PersonsDatails />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
