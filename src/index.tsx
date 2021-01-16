import React from 'react';
import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';

const App = () => {
  return (
    <div>
      <h1>Hi There</h1>
      <GuestList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
