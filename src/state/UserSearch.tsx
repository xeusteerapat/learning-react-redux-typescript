import React, { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 23 },
  { name: 'Mike', age: 21 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  /*
  There are 2 possible types of user we can found in users array

  - if that user exists, we return the user object

  -  if not, we return undefinded
  */
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const handleClick = () => {
    const foundedUser = users.find(user => user.name === name);

    setUser(foundedUser);
  };

  return (
    <div className='form-control mb-3'>
      <h3>Find user</h3>
      <input
        type='text'
        placeholder='find user'
        className='form-control mb-3'
        onChange={e => setName(e.target.value)}
      />
      <button className='btn btn-primary' onClick={handleClick}>
        Find
      </button>
      <div className='mt-3'>
        Name: {user && user.name}
        <br />
        Age: {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
