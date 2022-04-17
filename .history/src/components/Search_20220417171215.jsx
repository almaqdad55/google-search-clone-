import React from 'react';
import Links from './Links';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';

const Search = () => {
  return (
    <div>
      Search
      <Links />
    </div>
  );
};

export default Search;
