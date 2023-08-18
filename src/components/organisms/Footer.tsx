import React from 'react';
import { footerText } from '../../constants/text';

const Component: React.FC = () => (
  <footer className="bg-Main p-1 md:p-2">
    <div className="max-w-7xl mx-auto text-SubHeadline">
      <span
        className="px-2 text-xs md:text-sm"
        dangerouslySetInnerHTML={{ __html: footerText }}
      />
    </div>
  </footer>
);

export default Component;
