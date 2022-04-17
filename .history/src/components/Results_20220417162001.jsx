import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from './Loading';

import { useResultContext } from '../contexts/ResultContextProvider';

const Results = () => {
  const { results, getResults, searchTerm, loading } = useResultContext();
  const location = useLocation(); // /news, /images, /videos

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/videos') {
        getResults(`/search/${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map(({ link, title }, index) => (
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

    case '/image':
      console.log('RETURN IMAGE>>>', results);
      return (
        <div className="flex flex-wrap justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT403DxmNII0mpUrWZ3zMMob3pzpw4WmV7LpbICsfLR65GymOWO54EOpp3BEw&s"
            loading="lazy"
          />
          {results?.map(({ image, link: { href, title } }, index) => {
            <a
              className="sm:p-3 p-5"
              href={href}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT403DxmNII0mpUrWZ3zMMob3pzpw4WmV7LpbICsfLR65GymOWO54EOpp3BEw&s"
                alt={title}
                loading="lazy"
                className="w-full"
              />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>;
          })}
        </div>
      );

    case '/news':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg  dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4 ">
                <a href={source?.href} arget="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );

    case '/videos':
      return (
        <div className="flex flex-wrap">
          {results.map((video, index) => {
            <div key={index} className="p-2">
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            </div>;
          })}
        </div>
      );

    default:
      return 'ERROR';
  }
};

export default Results;
