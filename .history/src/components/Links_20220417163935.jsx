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
      Links
    </div>
  );
};

export default Links;
