import { LOAD_POSTS, ADD_POST, DELETE_POST, EDIT_POST } from './constants';
import { PostsType, ActionsPostsTypes } from './types';

const initialState: PostsType = {
  posts: [],
};

export const postsReducer = (
  state = initialState,
  action: ActionsPostsTypes,
): PostsType => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { ...action.payload }],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(({ id }) => id !== action.payload),
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post,
        ),
      };

    default:
      return state;
  }
};

export default postsReducer;
