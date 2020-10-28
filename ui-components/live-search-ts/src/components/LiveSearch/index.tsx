import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import SearchListing from './SearchListing';
import styles from './index.module.scss';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';

interface Props {
  url: string;
  params: any;
  handleClick: () => any;
  children?: any;
}

function LiveSearch(props: Props) {
  const { url, params, handleClick, children } = props;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const focusSearch = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusSearch.current?.focus();
  }, []);

  const getResults = async (query: string) => {
    props.params.query = query;
    const res = await axios(url, {
      params: params,
    });
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

      await sleep(250);
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
    <div className={styles.searchContainer}>
      <SearchIcon className={styles.searchIcon} />
      <input
        value={query}
        ref={focusSearch}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchText}
      />
      <SearchListing results={results} children={children} handleClick={handleClick} />
    </div>
  );
}

export default LiveSearch;
