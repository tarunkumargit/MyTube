import React from 'react';
import moment from 'moment';

import './_comment.scss';

const Comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
        alt=""
        className="rounded-circle mr-3"
      />
      <div className="comment__body mx-2">
        <p className="comment__header mb-1">
          Tarun Kumar • {moment('2020-08-21').fromNow()}
        </p>
        <p className="mb-0">Amazing Video!!</p>
      </div>
    </div>
  );
};

export default Comment;
