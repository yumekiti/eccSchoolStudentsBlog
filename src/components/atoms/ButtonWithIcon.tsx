import React from 'react';

type Props = {
  Icon: React.FC;
};

const Component: React.FC<Props> = ({ Icon }) => (
  <button className="hover:bg-Highlight hover:bg-opacity-30 rounded p-2">
    <Icon />
  </button>
);

export default Component;
