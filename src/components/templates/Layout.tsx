import React, { memo } from 'react';

import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

type Props = {
  children: React.ReactNode;
};

const Component: React.FC<Props> = ({ children }) => {
  return (
    <div className="App h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default memo(Component);
