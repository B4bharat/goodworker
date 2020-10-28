import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import SearchListing from './SearchListing';
import styles from './index.module.scss'

function LiveSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const focusSearch = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusSearch.current?.focus();
  }, []);

  const getResults = async (query: string) => {
    const res = await axios(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
    );
    const resultData = await res.data.results;
    return resultData;
  };

  const sleep = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  useEffect(() => {
    let currentQuery = true;
    const abortController = new AbortController();

    const loadResults = async () => {
      if (!query) return setResults([]);

      await sleep(350);
      if (currentQuery) {
        const results = await getResults(query);
        setResults(results);
      }
    };
    loadResults();

    return () => {
      currentQuery = false;
      abortController.abort();
    };
  }, [query]);

  return (
    <div className='search-container'>
      <input
        value={query}
        ref={focusSearch}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchText}
      />
      <SearchListing results={results} />
    </div>
  );
}

export default LiveSearch;
