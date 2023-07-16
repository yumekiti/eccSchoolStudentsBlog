import React from 'react';

const App = () => {
  return (
    <div className="App h-screen flex flex-col">
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-white font-bold text-lg">Logo</div>
              <input type="text" placeholder="Search" className="bg-gray-200 px-2 py-1 rounded" />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Create Post</button>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-100 p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            {/* フィルタリング */}
            <div className="col-span-12 lg:col-span-3">
              <nav className="bg-white p-4 rounded">
                <ul>
                  <li className="mb-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">All</button>
                  </li>
                  <li className="mb-2">
                    <button className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded w-full">Technology</button>
                  </li>
                  <li className="mb-2">
                    <button className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded w-full">Business</button>
                  </li>
                  <li className="mb-2">
                    <button className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded w-full">Politics</button>
                  </li>
                  <li className="mb-2">
                    <button className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded w-full">Sports</button>
                  </li>
                </ul>
              </nav>
            </div>
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
                <div className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
              </div>
              {/* 関連リンク */}
              <div className="bg-white p-4 rounded mt-4">
                <div className="text-xl font-bold">Related Links</div>
                <ul className="mt-2">
                  <li className="mb-2">
                    <a href="#" className="text-blue-500 hover:underline">Link 1</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-blue-500 hover:underline">Link 2</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-blue-500 hover:underline">Link 3</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-blue-500 hover:underline">Link 4</a>
                  </li>
                </ul>
              </div>
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
}

export default App;
