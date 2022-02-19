import { useEffect, useState } from 'react';
//import { fetchTrendingMovie } from '../../services/api';
import { fetchTrendingMovie } from 'services/api';

import List from 'components/List';

function HomePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  //console.log(fetchTrendingMovie);

  const fetch = async page => {
    try {
      const data = await fetchTrendingMovie(page);
      setData([...data.results]);
    } catch (error) {
      console.log(2);
      setData(null);
      setError('Error server!!!');
    }
  };

  useEffect(() => {
    fetch(1);
  }, []);

  return (
    <>
      <h1> Trending today</h1>
      {data && <List data={data} />}
      {error ?? <h2>{error}</h2>}
    </>
  );
}

export default HomePage;
