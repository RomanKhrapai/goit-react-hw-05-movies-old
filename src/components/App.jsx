import { Route, Routes, Outlet } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import MovieDetailsPage from './MovieDetailsPage';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:postId" element={<Outlet />}>
            <Route index element={<MovieDetailsPage />} />
            <Route
              path="cast"
              element={
                <MovieDetailsPage>
                  <Cast />
                </MovieDetailsPage>
              }
            />
            <Route
              path="reviews"
              element={
                <MovieDetailsPage>
                  <Reviews />
                </MovieDetailsPage>
              }
            />
          </Route>
          {/* <Route path="*" element={<HomePage />} /> */}
        </Route>
      </Routes>
    </>
  );
};
