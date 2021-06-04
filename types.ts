export type CommentType = {
  id: string;
  postId: string;
  body: string;
};

export type PostType = {
  id: string;
  title: string;
  body: string;
};

export type PostInfoType = {
  id: string;
  title: string;
  body: string;
  comments: CommentType[];
};
