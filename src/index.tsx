import React from 'react';
import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent';
import UserSearchRef from './refs/UserSearchRef';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div className='container'>
      <h1>Hi There</h1>
      <GuestList />
      <UserSearch />
      <EventComponent />
      <UserSearchRef />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
