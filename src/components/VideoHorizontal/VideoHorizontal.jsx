import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillEye } from 'react-icons/ai';
import { Col, Row } from 'react-bootstrap';

import moment from 'moment';
import numeral from 'numeral';

import './_videoHorizontal.scss';
import request from '../../api';
import { useHistory } from 'react-router';

const VideoHorizontal = ({ video, searchScreen, subScreen }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      resourceId,
      thumbnails: { medium },
    },
  } = video;

  const isVideo = !(id.kind === 'youtube#channel' || subScreen);
  const thumbnail = !isVideo && 'videoHorizontal__thumbnail-channel';
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  // To get videos details
  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request('/videos', {
        params: {
          part: 'contentDetails, statistics',
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    if (isVideo) get_video_details();
  }, [id, isVideo]);

  // To get channel icon
  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request('/channels', {
        params: {
          part: 'snippet',
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };

    get_channel_icon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format('mm:ss');

  const history = useHistory();

  const _channelId = resourceId?.channelId || id.channelId;

  const handleClick = () => {
    isVideo
      ? history.push(`/watch/${id.videoId}`)
      : history.push(`/channel/${_channelId}`);
  };

  return (
    <Row
      className="videoHorizontal m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      <Col
        xs={6}
        md={searchScreen || subScreen ? 4 : 6}
        className="videoHorizontal__left"
      >
        <LazyLoadImage
          src={medium.url}
          alt=""
          effect="blur"
          className={`videoHorizontal__thumbnail ${thumbnail}`}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        {isVideo && (
          <span className="videoHorizontal__duration">{_duration}</span>
        )}
      </Col>

      <Col
        xs={6}
        md={searchScreen || subScreen ? 8 : 6}
        className="videoHorizontal__right p-0"
      >
        <p className="videoHorizontal__title mb-1">{title}</p>
        {isVideo && (
          <div className="videoHorizontal__details">
            <AiFillEye />
            <span style={{ marginLeft: '5px' }}>
              {numeral(views).format('0.a')} Views •
            </span>
            <span style={{ marginLeft: '5px' }}>
              {moment(publishedAt).fromNow()}
            </span>
          </div>
        )}
        {(searchScreen || subScreen) && (
          <p className="mt-1 videoHorizontal__desc">{description}</p>
        )}
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {isVideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />}
          <p className="mb-0">{channelTitle}</p>
        </div>
        {subScreen && (
          <p className="mt-2"> {video.contentDetails.totalItemCount} videos</p>
        )}
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
