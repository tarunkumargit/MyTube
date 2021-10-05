import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillEye } from 'react-icons/ai';

import moment from 'moment';
import numeral from 'numeral';

import './_videoHorizontal.scss';
import { Col, Row } from 'react-bootstrap';

const VideoHorizontal = () => {
  const seconds = moment.duration('100').asSeconds();
  const _duration = moment.utc(seconds * 1000).format('mm:ss');

  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center ">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
          alt=""
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>

      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">
          Be a Full Stack developer in 1 month
        </p>
        <div className="videoHorizontal__details">
          <AiFillEye />
          <span style={{ marginLeft: '5px' }}>
            {numeral('100000').format('0.a')} Views •
          </span>
          <span style={{ marginLeft: '5px' }}>
            {moment('2020-09-14').fromNow()}
          </span>
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          <p>Backbench coder</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
