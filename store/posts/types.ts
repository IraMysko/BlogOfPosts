import { LOAD_POSTS, ADD_POST, DELETE_POST, EDIT_POST } from './constants';
import { PostType } from '../../types';

export type PostsType = {
  posts: PostType[];
};

export type LoadPostsAction = {
  type: typeof LOAD_POSTS;
  payload: PostType[];
};

export type AddPostAction = {
  type: typeof ADD_POST;
  payload: PostType;
};

export type DeletePostAction = {
  type: typeof DELETE_POST;
  payload: string;
};

export type EditPostAction = {
  type: typeof EDIT_POST;
  payload: PostType;
};

export type ActionsPostsTypes =
  | LoadPostsAction
  | AddPostAction
  | DeletePostAction
  | EditPostAction;
