import React from 'react';
import './_video.scss';

import { AiFillEye } from 'react-icons/ai';

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/DaFgHivBbBo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOYf7HLgghXrE5oU3Ax_wIGny4OA"
          alt="video thumbnail"
        />
        <span>05:43</span>
      </div>

      <div className="video__title">
        Create app in 5 minutes #made by Chintu
      </div>

      <div className="video__details">
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span>5 days ago</span>
      </div>

      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLQ2BILkH6zZdQLVMwiUtY9ejAOHBiTOnlANQ-jSZA=s68-c-k-c0x00ffffff-no-rj"
          alt="Channel logo"
        />
        <p>Rainbow hat jr</p>
      </div>
    </div>
  );
};

export default Video;
