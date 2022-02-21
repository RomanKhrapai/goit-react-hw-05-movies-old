import { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

import { fetchTrendingMovie } from 'services/api';

import List from 'components/List';

export default function HomePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetch = async () => {
    try {
      const data = await fetchTrendingMovie();
      setData([...data.results]);
    } catch (error) {
      setData(null);
      setError('Error server!!!');
    }
  };

  // const navigate = useNavigate();
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   if (pathname !== '/') {
  //     navigate('/', { replace: true });
  //   } else {
  //     fetch();
  //   }
  // }, [pathname, navigate]);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <h1> Trending today</h1>
      {data && <List data={data} />}
      {error && <h2>{error}</h2>}
    </>
  );
}
