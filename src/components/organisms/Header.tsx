import React from 'react';
import { Link } from 'react-router-dom';

import ButtonWithIcon from '../atoms/ButtonWithIcon';
import ContrastButton from '../atoms/ContrastButton';

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
              aria_label="HamburgerMenuButton"
            />
          </div>
          <Link to="/" className="ml-2 md:m-0 cursor-pointer">
            <Logo />
          </Link>
          <div className="hidden md:flex">
            <SearchBox />
          </div>
        </div>
        <div className="flex items-center">
          <div className="block md:hidden">
            <ButtonWithIcon Icon={SearchIcon} aria_label="SearchButton" />
          </div>
          <ContrastButton
            text="Create Post"
            onClick={() => {
              console.log('Create Post');
            }}
          />
        </div>
      </div>
    </div>
  </header>
);

export default Component;
