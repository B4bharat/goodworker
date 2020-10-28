import React from 'react';
import './App.scss';

import LiveSearch from './components/LiveSearch';
import { ReactComponent as Placeholder } from './assets/placeholder.svg';

function App() {
  const apiURL = `https://api.themoviedb.org/3/search/movie`;
  const params = { query: '', api_key: 'dbc0a6d62448554c27b6167ef7dabb1b' };

  return (
    <div className='App'>
      <LiveSearch url={apiURL} params={params}>
        <Placeholder />
      </LiveSearch>
    </div>
  );
}

export default App;
