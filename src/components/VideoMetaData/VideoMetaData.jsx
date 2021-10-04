import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import ShowMoreText from 'react-show-more-text';

import './_videoMetaData.scss';

import { MdThumbUp, MdThumbDown } from 'react-icons/md';

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__Top">
        <h5 style={{ color: '#fff' }}>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(viewCount).format('0.a')} Views •
            <span style={{ marginLeft: '5px' }}>
              {moment(publishedAt).fromNow()}
            </span>
          </span>
          <div>
            <span>
              <MdThumbUp size={20} /> {numeral(likeCount).format('0.a')}
            </span>
            <span style={{ marginLeft: '10px' }}>
              <MdThumbDown size={20} /> {numeral(dislikeCount).format('0.a')}
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3 ">
        <div className="d-flex">
          <img
            src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
            alt=""
            className="rounded-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>{numeral(10000).format('0.a')} Subscribers</span>
          </div>
        </div>
        <button className="btn border-0 px-3 py-2 m-2">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          line={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
