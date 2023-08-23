import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ButtonWithIcon from '../atoms/ButtonWithIcon';
import ContrastButton from '../atoms/ContrastButton';

import SearchBox from '../molecules/SearchBox';
import NavigationMenu from '../molecules/NavigationMenu';

import Logo from '../../assets/elements/Logo';
import CloseIcon from '../../assets/elements/CloseIcon';

import SearchIcon from '../../assets/navigation/SearchIcon';
import HamburgerMenuIcon from '../../assets/navigation/HamburgerMenuIcon';

const Component = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-Main p-1 md:p-2 border-b border-SubHeadline">
      <div className="max-w-7xl mx-auto">
        {!isSearchOpen && (
          <div className="px-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className="block md:hidden">
                <ButtonWithIcon
                  Icon={HamburgerMenuIcon}
                  aria_label="HamburgerMenuButton"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              </div>
              <Link
                to="/"
                className="ml-2 md:m-0 cursor-pointer"
                aria-label="Logo"
              >
                <Logo />
              </Link>
              <div className="hidden md:flex">
                <SearchBox />
              </div>
            </div>
            <div className="flex items-center">
              <div className="block md:hidden">
                <ButtonWithIcon
                  Icon={SearchIcon}
                  aria_label="SearchButton"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                />
              </div>
              <ContrastButton
                text="Go to Wiki"
                onClick={() =>
                  (window.location.href = process.env.REACT_APP_API_URL + '')
                }
              />
            </div>
          </div>
        )}
        {isSearchOpen && (
          <div className="px-2 flex items-center justify-between">
            <div className="flex items-center">
              <ButtonWithIcon
                Icon={CloseIcon}
                aria_label="CloseButton"
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
            <SearchBox />
          </div>
        )}
        {isMenuOpen && (
          <div
            className="fixed w-full top-0 left-0 h-screen z-10 bg-SubHeadline bg-opacity-90"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="animate-slide-in-left w-3/5 bg-Main h-full px-2">
              <NavigationMenu />
            </div>
            <div className="fixed top-0 right-0 w-2/5 h-full" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Component;
