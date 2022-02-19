import { Route, Routes } from 'react-router-dom';
import MovieDetailsPage from './MovieDetailsPage';
import HomePage from './HomePage';

import Header from './Header';
import MoviesPage from './MoviesPage';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:postId" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
};
