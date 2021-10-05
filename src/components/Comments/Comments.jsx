import React, { useEffect, useState } from 'react';
import './_comments.scss';

// Components
import Comment from '../Comment/Comment';
import { useDispatch } from 'react-redux';
import {
  addComment,
  getCommentsOfVideoById,
} from '../../redux/actions/comments.action';
import { useSelector } from 'react-redux';

const Comments = ({ videoId, totalComments }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [videoId, dispatch]);

  const comments = useSelector((state) => state.commentList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    dispatch(addComment(videoId, text));
    setText('');
  };

  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="comments__form d-flex w-100 my2">
        <img
          src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
          alt=""
          className="rounded-circle mr-3"
        />
        <form
          onSubmit={handleComment}
          className="d-flex flex-grow-1 commentbar"
        >
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Add a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="commentBtn">
            <button className="border-0">Comment</button>
          </div>
        </form>
      </div>
      <div className="commenst__list mt-3">
        {_comments?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
