import React, { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <h3>All Guests</h3>
      <input
        type='text'
        placeholder='add new guest'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button>ADD</button>
    </div>
  );
};

export default GuestList;
