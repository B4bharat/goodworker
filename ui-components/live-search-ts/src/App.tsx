import React from 'react';
import './App.scss';

import LiveSearch from './components/LiveSearch';
import { ReactComponent as Placeholder } from './assets/placeholder.svg';

import InputCTA from './components/InputCTA';
import { ReactComponent as Icon } from './assets/icon.svg';

function App() {
  const apiURL = `https://api.themoviedb.org/3/search/movie`;
  const params = { query: '', api_key: 'dbc0a6d62448554c27b6167ef7dabb1b' };
  const handleClick = () => {
    console.log('button clicked');
  };

  const onClickHandler = () => {
    console.log('onClickHandler');
  };

  return (
    <div className='App'>
      <LiveSearch url={apiURL} params={params} handleClick={handleClick}>
        <Placeholder />
      </LiveSearch>
      <InputCTA
        className={'inputCTA'}
        hoverClass={'inputCTAhover'}
        text={'add details'}
        onClickHandler={onClickHandler}
      >
        <Icon className='icon' />
      </InputCTA>
    </div>
  );
}

export default App;
