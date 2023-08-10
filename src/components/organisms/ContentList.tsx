import React from 'react';

const Component: React.FC = () => (
  <div className="py-2">
    <div className="bg-Main p-4 rounded">
      <div className="mt-2 text-justify whitespace-pre-wrap text-SubHeadline px-4">
        <ul>
          <li>
            見出し１
            <ul>
              <li>見出し１−１</li>
            </ul>
          </li>
          <li>見出し２</li>
          <li>見出し３</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Component;
