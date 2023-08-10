import React from 'react';

type Props = {
  Icon: React.FC;
  AriaLabel: string;
};

const Component: React.FC<Props> = ({ Icon, AriaLabel }) => (
  <button
    className="hover:bg-Highlight hover:bg-opacity-30 rounded p-2"
    aria-label={AriaLabel}
  >
    <Icon />
  </button>
);

export default Component;
