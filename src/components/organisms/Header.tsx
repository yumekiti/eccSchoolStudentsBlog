import React from 'react';

import ButtonWithIcon from '../atoms/ButtonWithIcon';
import HighlightButton from '../atoms/HighlightButton';

import SearchBox from '../molecules/SearchBox';

import Logo from '../../assets/elements/Logo';

import SearchIcon from '../../assets/navigation/SearchIcon';
import HamburgerMenuIcon from '../../assets/navigation/HamburgerMenuIcon';

const Component = () => (
  <header className="bg-Main p-1 md:p-2 border-b border-SubHeadline">
    <div className="max-w-7xl mx-auto">
      <div className="px-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="block md:hidden">
            <ButtonWithIcon
              Icon={HamburgerMenuIcon}
              AriaLabel="HamburgerMenuButton"
            />
          </div>
          <div className="ml-2 md:m-0 cursor-pointer">
            <Logo />
          </div>
          <div className="hidden md:flex">
            <SearchBox />
          </div>
        </div>
        <div className="flex items-center">
          <div className="block md:hidden">
            <ButtonWithIcon Icon={SearchIcon} AriaLabel="SearchButton" />
          </div>
          <HighlightButton Text="Create Post" />
        </div>
      </div>
    </div>
  </header>
);

export default Component;
