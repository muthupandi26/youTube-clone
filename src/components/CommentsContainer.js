import React from "react";

const commentsData = [
  {
    name: "Muthupandi",
    comment: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Muthupandi",
    comment: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Muthupandi",
        comment: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Muthupandi",
        comment: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Muthupandi",
            comment: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
      {
        name: "Muthupandi",
        comment: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Muthupandi",
            comment: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Muthupandi",
            comment: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Muthupandi",
    comment: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Muthupandi",
    comment: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Muthupandi",
    comment: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded m-2">
      <img
        className="w-12 h-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user_avatar"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-back ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
