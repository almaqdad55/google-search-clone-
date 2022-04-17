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
  return <div>Results</div>;
};

export default Results;
