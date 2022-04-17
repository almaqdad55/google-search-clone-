import React from 'react';
import Links from './Links';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';

const Search = () => {
  const [text, setText] = useState('Elon Musk');
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  return (
    <div>
      Search
      <Links />
    </div>
  );
};

export default Search;
