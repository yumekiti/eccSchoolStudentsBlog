import React from 'react';

import SearchIcon from './../../assets/elements/SearchIcon';
import SearchIconFocus from './../../assets/elements/SearchIconFocus';

const Component: React.FC = () => (
  <div className="flex items-center rounded border border-Headline group ml-4 border-opacity-30">
    <input
      type="text"
      placeholder="Search"
      className="px-2 placeholder-SubHeadline outline-none w-96 leading-3"
    />
    <button className="p-2 flex items-center justify-center bg-Main group-hover:bg-Headline">
      <div className="hidden group-hover:block">
        <SearchIcon />
      </div>
      <div className="group-hover:hidden">
        <SearchIconFocus />
      </div>
    </button>
  </div>
);

export default Component;
