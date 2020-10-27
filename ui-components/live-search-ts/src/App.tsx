import React from 'react';
import './App.scss';
import Button from './components/Button/index';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <button className='btn' onClick={() => alert('I am globally styled')}>
          I am button 1 - Press Me
        </button>
        <Button />
      </header>
    </div>
  );
}

export default App;
