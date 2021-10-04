import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  getPopularVideos,
  getVideosByCategory,
} from '../../redux/actions/videos.action';

import './_HomeScreen.scss';

// Components
import { CategoriesBar, Video } from '../../components';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory } = useSelector((state) => state.homeVideos);

  const fetchData = () => {
    if (activeCategory === 'All') {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        Loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        style={{ overflowX: 'hidden' }}
      >
        <Row style={{ overflowX: 'hidden' }}>
          {videos.map((video) => (
            <Col lg={3} md={4} key={video.id}>
              <Video video={video} />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
