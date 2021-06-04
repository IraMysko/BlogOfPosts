import { Dispatch } from 'redux';

import axios from '../../axios';
import { loadPosts, addPost, deletePost, editPost } from './actions';

export const getPosts = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios('/posts');
    const posts = response.data;

    dispatch(loadPosts(posts));
  };
};

export const addNewPost = (title: string, body: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post('/posts', {
      title,
      body,
    });

    dispatch(addPost(response.data));
  };
};

export const removePost = (id: string) => {
  return async (dispatch: Dispatch) => {
    await axios.delete(`/posts/${id}`);

    dispatch(deletePost(id));
  };
};

export const changePost = (id: string, title: string, body: string) => {
  return async (dispatch: Dispatch) => {
    await axios.put(`/posts/${id}`, {
      title,
      body,
    });

    dispatch(editPost({ id, title, body }));
  };
};
