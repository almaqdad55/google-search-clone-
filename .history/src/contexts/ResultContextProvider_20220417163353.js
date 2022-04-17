import React, { createContext, useContext, useState, useEffect } from 'react';

const ResultContext = createContext();

const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResutls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Elon Musk');

  const getResults = async (url) => {
    setLoading(true);

    const response = await fetch(`${baseURL}${url}`, {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': 'b65777db27msha2a2e5ffb41a5dfp1c5857jsn7c2a0d4305f0',
      },
    });

    const data = await response.json();
    console.log('DATA>>>>, ', data);

    if (url.includes('/news')) {
      setResutls(data.entries);
    } else if (url.includes('/image')) {
      setResutls(data.image_results);
    } else {
      setResutls(data.results);
    }

    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
