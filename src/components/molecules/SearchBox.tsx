import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchIcon from './../../assets/elements/SearchIcon';
import SearchIconFocus from './../../assets/elements/SearchIconFocus';

const Component: React.FC = () => {
  const userNavigate = useNavigate();
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
    if (searchText === '') return;
    userNavigate(`/search?q=${searchText}`);
  };

  return (
    <div className="flex items-center rounded border border-Headline group ml-4 border-opacity-30 w-full md:w-96">
      <input
        type="text"
        placeholder="Search"
        className="px-2 placeholder-SubHeadline outline-none leading-3 w-full"
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
      />
      <button
        className="p-2 flex items-center justify-center bg-Main group-hover:bg-Headline"
        aria-label="SearchButton"
        onClick={handleSearch}
      >
        <div className="hidden group-hover:block">
          <SearchIcon />
        </div>
        <div className="group-hover:hidden">
          <SearchIconFocus />
        </div>
      </button>
    </div>
  );
};

export default Component;
