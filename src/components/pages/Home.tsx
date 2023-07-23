import React from 'react';

import Logo from '../../assets/elements/Logo';
import SearchIcon from '../../assets/elements/SearchIcon';
import SearchIconFocus from '../../assets/elements/SearchIconFocus';

import HomeIcon from '../../assets/navigation/HomeIcon';
import HelpIcon from '../../assets/navigation/HelpIcon';
import PersonSearchIcon from '../../assets/navigation/PersonSearchIcon';
import BookmarkIcon from '../../assets/navigation/BookmarkIcon';
import InfoIcon from '../../assets/navigation/InfoIcon';

const Home = () => {
  return (
    <div className="App h-screen flex flex-col bg-Background">
      <header className="bg-Main p-2 border-b border-Headline">
        <div className="container mx-auto flex items-center justify-between px-2">
          <div className="flex items-center space-x-4">
            <Logo />
            <div className="flex items-center rounded border border-Headline group">
              {/* icon */}
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
          </div>
          <button className="border border-Highlight text-Highlight px-4 py-2 rounded hover:bg-Highlight hover:text-Main hover:underline">
            Create Post
          </button>
        </div>
      </header>

      <main className="flex-grow bg-gray-100 p-2">
        <div className="container mx-auto grid grid-cols-12 gap-4">
          {/* フィルタリング */}
          <nav className="col-span-12 lg:col-span-3 bg-white p-2">
            <ul>
              <li className="flex items-center group">
                <button className="flex items-center pr-4 py-2 w-full text-Headline rounded group-hover:bg-Highlight group-hover:bg-opacity-30">
                  <div className="px-2">
                    <HomeIcon />
                  </div>
                  <p className="font-bold group-hover:text-Highlight group-hover:underline">
                    ホーム
                  </p>
                </button>
              </li>
              <li className="flex items-center group">
                <button className="flex items-center pr-4 py-2 w-full text-Headline rounded group-hover:bg-Highlight group-hover:bg-opacity-30">
                  <div className="px-2">
                    <HelpIcon />
                  </div>
                  <p className="font-bold group-hover:text-Highlight group-hover:underline">
                    質問
                  </p>
                </button>
              </li>
              <li className="flex items-center group">
                <button className="flex items-center pr-4 py-2 w-full text-Headline rounded group-hover:bg-Highlight group-hover:bg-opacity-30">
                  <div className="px-2">
                    <PersonSearchIcon />
                  </div>
                  <p className="font-bold group-hover:text-Highlight group-hover:underline">
                    募集
                  </p>
                </button>
              </li>
              <li className="flex items-center group">
                <button className="flex items-center pr-4 py-2 w-full text-Headline rounded group-hover:bg-Highlight group-hover:bg-opacity-30">
                  <div className="px-2">
                    <BookmarkIcon />
                  </div>
                  <p className="font-bold group-hover:text-Highlight group-hover:underline">
                    ブックマーク
                  </p>
                </button>
              </li>
              <li className="flex items-center group">
                <button className="flex items-center pr-4 py-2 w-full text-Headline rounded group-hover:bg-Highlight group-hover:bg-opacity-30">
                  <div className="px-2">
                    <InfoIcon />
                  </div>
                  <p className="font-bold group-hover:text-Highlight group-hover:underline">
                    Info
                  </p>
                </button>
              </li>
            </ul>
          </nav>
          {/* ブログリスト */}
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-white p-4 rounded">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-200 w-10 h-10 rounded-full"></div>
                  <div className="font-bold">Username</div>
                </div>
                <div className="text-gray-500">1 hour ago</div>
              </div>
              <div className="text-xl font-bold mt-2">Title</div>
              {/* Favorite border & Tags & Bookmark border */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-start flex-col">
                  {/* Favorite */}
                  <div className="text-gray-500">10 likes</div>
                  {/* Tags */}
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-200 px-2 py-1 rounded">Tag 1</div>
                    <div className="bg-gray-200 px-2 py-1 rounded">Tag 2</div>
                    <div className="bg-gray-200 px-2 py-1 rounded">Tag 3</div>
                  </div>
                </div>
                {/* Bookmark */}
                <div className="text-gray-500">Bookmark</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:col-span-3 lg:block">
            {/* このサイトについて */}
            <div className="bg-white p-4 rounded">
              <div className="text-xl font-bold">About</div>
              <div className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </div>
            </div>
            {/* 関連リンク */}
            <div className="bg-white p-4 rounded mt-4">
              <div className="text-xl font-bold">Related Links</div>
              <ul className="mt-2">
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Link 1
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Link 2
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Link 3
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 p-2">
        <div className="container mx-auto">
          &copy; 2023 Your Blog Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
