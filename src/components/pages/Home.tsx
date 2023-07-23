import React from 'react';

import Logo from '../../assets/elements/Logo';
import SearchIcon from '../../assets/elements/SearchIcon';
import SearchIconFocus from '../../assets/elements/SearchIconFocus';

import HomeIcon from '../../assets/navigation/HomeIcon';
import HelpIcon from '../../assets/navigation/HelpIcon';
import PersonSearchIcon from '../../assets/navigation/PersonSearchIcon';
import BookmarkIcon from '../../assets/navigation/BookmarkIcon';
import InfoIcon from '../../assets/navigation/InfoIcon';

import TagIcon from '../../assets/elements/TagIcon';
import LikeIcon from '../../assets/elements/LikeIcon';
import BookmarkBorderIcon from '../../assets/elements/BookmarkBorderIcon';
// import BookmarkIcon from '../../assets/elements/BookmarkIcon';

const Home = () => {
  return (
    <div className="App h-screen flex flex-col bg-Background">
      <header className="bg-Main p-2 border-b border-Headline">
        <div className="container mx-auto">
          <div className="px-2 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo />
              <div className="items-center rounded border border-Headline group hidden lg:flex">
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
        </div>
      </header>

      <main className="flex-grow bg-gray-100 p-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 px-2">
            <div className="col-span-12 lg:col-span-2">
              <nav className="py-2">
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
              <nav className="py-2">
                <h2 className="text-Headline font-bold p-2">分野</h2>
                <ul>
                  <li className="flex items-center group">
                    <button className="flex items-center pr-4 py-2 w-full text-Headline rounded group-hover:bg-Highlight group-hover:bg-opacity-30">
                      <div className="px-2">
                        <InfoIcon />
                      </div>
                      <p className="group-hover:text-Highlight group-hover:underline">
                        IoT
                      </p>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            {/* ブログリスト */}
            <div className="col-span-12 lg:col-span-7 py-2 hover:cursor-pointer">
              <div className="bg-Main p-4 rounded">
                {/* ユーザー */}
                <div className="flex items-center space-x-1">
                  <div className="bg-Highlight w-8 h-8 rounded-full"></div>
                  <div className="flex flex-col text-SubHeadline text-sm">
                    <p className="px-1 w-fit font-bold tracking-wide hover:text-Headline hover:bg-SubHeadline hover:bg-opacity-20 rounded">
                      @user_id
                    </p>
                    <p className="px-1">2023/07/15</p>
                  </div>
                </div>
                <div className="mt-2 px-10">
                  {/* タイトル */}
                  <p className="text-xl text-Headline break-all text-justify font-bold line-clamp-3 hover:text-Highlight">
                    ECCコンピュータ専門学校っていうコンピュータ学校なのに、学生用ブログ無いってよwwwしゃーないから作ってやったわwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                  </p>
                  {/* Favorite border & Tags & Bookmark border */}
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      {/* Tags */}
                      <div className="flex items-center">
                        <TagIcon />
                        <ul className="text-SubHeadline flex items-center space-x-1">
                          <li className="hover:underline hover:bg-SubHeadline hover:bg-opacity-20 rounded p-1 text-sm hover:outline outline-1 outline-SubHeadline">
                            #Tag 1
                          </li>
                          <li className="hover:underline hover:bg-SubHeadline hover:bg-opacity-20 rounded p-1 text-sm hover:outline outline-1 outline-SubHeadline">
                            #Tag 2
                          </li>
                          <li className="hover:underline hover:bg-SubHeadline hover:bg-opacity-20 rounded p-1 text-sm hover:outline outline-1 outline-SubHeadline">
                            #Tag 3
                          </li>
                        </ul>
                      </div>
                      {/* Favorite */}
                      <div className="mt-2 flex space-x-1">
                        <LikeIcon />
                        <span className="text-SubHeadline text-sm">10</span>
                      </div>
                    </div>
                    {/* Bookmark */}
                    <div className="flex items-end">
                      <button className="hover:bg-Highlight hover:bg-opacity-30 rounded p-1">
                        <BookmarkBorderIcon />
                      </button>
                      {/* <BookmarkIcon /> */}
                    </div>
                  </div>
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
        </div>
      </main>

      <footer className="bg-Main p-2">
        <div className="container mx-auto">
          &copy; 2023 - Copyright Yumekiti.
        </div>
      </footer>
    </div>
  );
};

export default Home;
