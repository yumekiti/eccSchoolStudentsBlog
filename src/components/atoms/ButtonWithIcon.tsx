import React from 'react';

type Props = {
  Icon: React.FC;
  aria_label: string;
};

const Component: React.FC<Props> = ({ Icon, aria_label }) => (
  <button
    className="hover:bg-Highlight hover:bg-opacity-30 rounded p-2"
    aria-label={aria_label}
  >
    <Icon />
  </button>
);

export default Component;
