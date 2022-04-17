import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔍 All' },
  { url: '/news', text: '📰  News' },
  { url: '/image', text: '📷 Images' },
  { url: '/video', text: '🎥 Videos' },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          key={url}
          to={url}
          //   className={({ isActive }) =>
          //     isActive ?? 'text-blue-700 border-b-2 dark:text-blue-700 pb-2'
          //   }
          className={({ isActive }) => isActive ?? 'bg-green-500 font-bold'}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
