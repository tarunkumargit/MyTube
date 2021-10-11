import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer';
import { homeVideoReducer } from './reducers/video.reducer';
import { selectedVideoReducer } from './reducers/video.reducer';
import { relatedVideoReducer } from './reducers/video.reducer';
import { searchedVideosReducer } from './reducers/video.reducer';
import { subscriptionsChannelReducer } from './reducers/video.reducer';
import { channelDetailsReducer } from './reducers/channel.reducer';
import { commentListReducer } from './reducers/comments.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideoReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
