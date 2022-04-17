import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from './Loading';

import { useResultContext } from '../contexts/ResultContextProvider';

const Results = () => {
  const { getResults, results, searchTerm, setSearchTerm, isLoading } =
    useResultContext();
  const location = useLocation(); // /news, /images, /videos

  useEffect(() => {
    getResults(`/search/q=JavaScript Mastery&num=40`);
  }, []);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y- sm:px-56">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>

                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
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