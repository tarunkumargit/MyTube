import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getPopularVideos,
  getVideosByCategory,
} from '../../redux/actions/videos.action';
import './_categoriesBar.scss';

const keywords = [
  'All',
  'React js',
  'Angular js',
  'Angular cli',
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
  'Gatsby',
  'Next js',
  'Nuxt js',
  'Python',
  'C#',
  'C++',
  'Java',
  'AWS',
  'API',
  'Firebase',
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All');

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if (value === 'All') {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
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
