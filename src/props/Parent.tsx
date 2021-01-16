import React from 'react';
import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <div>
      <ChildAsFC color='red' onClick={() => console.log('click')}>
        This is not a test
      </ChildAsFC>
    </div>
  );
};

export default Parent;
