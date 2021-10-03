import React, { useState } from 'react';
import './_categoriesBar.scss';

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'Algo',
  'Redux',
  'Coding',
  'Loofy beats',
  'Node Js',
  'Redux',
  'Firebase',
  'Yarn',
  'Scss',
  'Freecodecamp',
  'Traversy Media',
  'Javascript',
  'Docker',
  'Socket.io',
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All');

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <div>
      <hr style={{ marginTop: '0' }} />
      <div className="categoriesBar">
        {keywords.map((value, i) => (
          <span
            key={i}
            onClick={() => handleClick(value)}
            className={activeElement === value ? 'active' : ''}
          >
            {value}
          </span>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default CategoriesBar;
