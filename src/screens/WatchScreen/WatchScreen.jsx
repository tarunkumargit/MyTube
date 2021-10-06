import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import './_watchScreen.scss';

// Components
import { Comments, VideoHorizontal, VideoMetaData } from '../../components';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  getRelatedVideos,
  getVideoById,
} from '../../redux/actions/videos.action';
import { useSelector } from 'react-redux';

const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));

    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);

  const { videos, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideos
  );

  const { video, loading } = useSelector((state) => state.selectedVideo);

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>loading.....</h6>
        )}
        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {!relatedVideosLoading &&
          videos
            ?.filter((video) => video.snippet)
            .map((video) => (
              <VideoHorizontal video={video} key={video.id.videoId} />
            ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
