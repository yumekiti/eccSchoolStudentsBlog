import React from 'react';

type Props = {
  Icon: React.FC;
  aria_label: string;
  onClick: () => void;
};

const Component: React.FC<Props> = ({ Icon, aria_label, onClick }) => (
  <button
    className="hover:bg-Highlight hover:bg-opacity-30 rounded p-2"
    aria-label={aria_label}
    onClick={onClick}
  >
    <Icon />
  </button>
);

export default Component;
