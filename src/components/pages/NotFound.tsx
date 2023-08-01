import React from 'react';
import NotFoundIcon from './../../assets/elements/NotFoundIcon';

const Component = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
      <h1 className="text-blue-500 text-5xl font-bold mb-4">404: Not Found</h1>
      <div className="flex items-center justify-center">
        <NotFoundIcon />
      </div>
    </div>
  );
};

export default Component;
