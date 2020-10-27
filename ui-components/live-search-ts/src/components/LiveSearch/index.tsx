import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import SearchListing from './SearchListing';

function LiveSearch() {
  const [query, setQuery] = useState('');
  const [jokes, setJokes] = useState([]);
  const focusSearch = useRef(null);

  useEffect(() => {
    focusSearch.current.focus();
  }, []);

  const getJokes = async (query: string, controller?: AbortController) => {
    const res = await axios(`https://icanhazdadjoke.com/search?term=${query}`);
    const jokesData = await res.data.results;
    return jokesData;
  };

  const sleep = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  useEffect(() => {
    let currentQuery = true;
    const abortController = new AbortController();

    const loadJokes = async () => {
      if (!query) return setJokes([]);

      await sleep(350);
      if (currentQuery) {
        const jokes = await getJokes(query, abortController);
        setJokes(jokes);
      }
    };
    loadJokes();

    return () => {
      currentQuery = false;
      abortController.abort();
    };
  }, [query]);
}

export default LiveSearch;
