import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from './Loading';

import { useResultContext } from '../contexts/ResultContextProvider';

const Results = () => {
  const { getResults, results, searchTerm, setSearchTerm, isLoading } =
    useResultContext();
  const location = useLocation(); // /news, /images, /videos

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y- sm:px-56">
          {/* {results?.results?.map(({link, title})=>(
                  
              ))} */}
        </div>
      );

    case '/news':
      return 'SEARCH';

    case '/images':
      return 'SEARCH';

    case '/videos':
      return 'SEARCH';

    default:
      return 'ERROR';
  }
};

export default Results;
