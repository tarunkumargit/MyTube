import React, { useState } from 'react';
import './_categories.scss';

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
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All');

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
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
  );
};

export default CategoriesBar;
