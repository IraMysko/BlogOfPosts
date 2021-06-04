import { LOAD_POSTS, ADD_POST, DELETE_POST, EDIT_POST } from './constants';
import {
  LoadPostsAction,
  AddPostAction,
  DeletePostAction,
  EditPostAction,
} from './types';
import { PostType } from '../../types';

export const loadPosts = (posts: PostType[]): LoadPostsAction => ({
  type: LOAD_POSTS,
  payload: posts,
});

export const addPost = (post: PostType): AddPostAction => ({
  type: ADD_POST,
  payload: post,
});

export const deletePost = (id: string): DeletePostAction => ({
  type: DELETE_POST,
  payload: id,
});

export const editPost = (post: PostType): EditPostAction => ({
  type: EDIT_POST,
  payload: post,
});
