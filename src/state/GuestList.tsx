import React, { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const handleClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div className='form-control mb-3'>
      <h3>All Guests</h3>
      <input
        className='form-control mb-3'
        type='text'
        placeholder='add new guest'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button className='btn btn-primary' onClick={handleClick}>
        ADD
      </button>
      <div className='mt-3'>
        <ul className='list-group'>
          {guests.map(guest => (
            <li className='list-group-item' key={guest}>
              {guest}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GuestList;
