import React from 'react';
import './_comments.scss';

// Components
import Comment from '../Comment/Comment';

const Comments = () => {
  const handleComment = () => {};

  return (
    <div className="comments">
      <p>1234 comments</p>
      <div className="comments__form d-flex w-100 my2">
        <img
          src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
          alt=""
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Add a comment..."
          />
          <button className="border-0 px-3 py-2">Comment</button>
        </form>
      </div>
      <div className="commenst__list mt-3">
        {[...Array(15)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
