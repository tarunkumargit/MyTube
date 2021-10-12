import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Video } from '../../components';
import { getChannelDetails } from '../../redux/actions/channel.action';
import { getVideosByChannel } from '../../redux/actions/videos.action';
import numeral from 'numeral';

import './_channelScreen.scss';

const ChannelScreen = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
    dispatch(getChannelDetails(channelId));
  }, [dispatch, channelId]);

  const { loading, videos } = useSelector((state) => state.channelVideos);
  const { snippet, statistics } = useSelector(
    (state) => state.channelDetails.channel
  );
  return (
    <>
      <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader">
        <div className="d-flex align-items-center">
          <img
            style={{ borderRadius: '50%' }}
            src={snippet?.thumbnails?.default?.url}
            alt=""
          />

          <div className="mx-3 channelHeader__details">
            <h3>{snippet?.title}</h3>
            <span>
              {numeral(statistics?.subscriberCount).format('0.a')} subscribers
            </span>
          </div>
        </div>

        <button>Subscribed</button>
      </div>

      <Container>
        <Row className="mt-2">
          {!loading
            ? videos?.map((video) => (
                <Col md={4} lg={3}>
                  <Video video={video} channelScreen />
                </Col>
              ))
            : [...Array(15)].map(() => (
                <Col md={4} lg={3}>
                  <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                    <Skeleton width="100%" height="140px" />
                  </SkeletonTheme>
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
};

export default ChannelScreen;
