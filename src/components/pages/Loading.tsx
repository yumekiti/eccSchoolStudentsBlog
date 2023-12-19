import React from 'react';

import Layout from '../templates/Layout';

const Component: React.FC = () => {
  return (
    <Layout>
      <div className="p-0 md:p-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 px-2 md:p-0">
          <div className="col-span-12 md:col-span-9 lg:col-span-7 mb-12">
            <div className="fixed top-1/3 left-1/2 transform -translate-x-2/3 -translate-y-1/2">
              <div className="flex flex-col justify-center">
                <div aria-label="Loading..." role="status">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-spin w-12 h-12 stroke-slate-500"
                  >
                    <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-500">
                  Loading...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Component;
