import React from 'react';

const EventComponent: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.movementX);
  };

  return (
    <div>
      <input type='text' onChange={handleChange} />
      <div draggable onDragStart={handleDrag}>
        Drag Me
      </div>
    </div>
  );
};

export default EventComponent;
