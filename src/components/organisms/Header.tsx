import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ButtonWithIcon from '../atoms/ButtonWithIcon';
import ContrastButton from '../atoms/ContrastButton';

import SearchBox from '../molecules/SearchBox';
import NavigationList from '../molecules/NavigationList';
import CategoryList from '../molecules/CategoryList';

import Logo from '../../assets/elements/Logo';

import SearchIcon from '../../assets/navigation/SearchIcon';
import HamburgerMenuIcon from '../../assets/navigation/HamburgerMenuIcon';

const Component = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-Main p-1 md:p-2 border-b border-SubHeadline">
      <div className="max-w-7xl mx-auto">
        <div className="px-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="block md:hidden">
              <ButtonWithIcon
                Icon={HamburgerMenuIcon}
                aria_label="HamburgerMenuButton"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              onClick={() =>
                (window.location.href = process.env.REACT_APP_API_URL + '/Blog')
              }
            />
          </div>
        </div>
        {isMenuOpen && (
          <div className="fixed w-full top-0 left-0 h-screen z-10">
            <div className="w-3/5 bg-Main h-full px-2">
              <NavigationList />
              <CategoryList />
            </div>
            <div
              className="fixed top-0 right-0 w-2/5 h-full bg-SubHeadline bg-opacity-90"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Component;
