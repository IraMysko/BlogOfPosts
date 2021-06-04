import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { Modal } from 'antd';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import PostForm from '../PostForm';
import { changePost } from '../../store/posts/operations';

type PropsType = {
  id: string;
  resetEditedId: VoidFunction;
};

const EditPost: React.FC<PropsType> = ({ id, resetEditedId }) => {
  const dispatch = useDispatch();

  const posts = useTypedSelector((state) => state.posts.posts);
  const post = posts.find((item) => item.id === id);

  const onFinish = useCallback(
    (values: { title: string; body: string }) => {
      dispatch(changePost(id, values.title, values.body));
      resetEditedId();
    },
    [dispatch, id, resetEditedId],
  );

  if (!post) return null;

  return (
    <Modal title="Basic Modal" visible onCancel={resetEditedId} footer={[]}>
      <PostForm
        initialValues={{
          title: post.title,
          body: post.body,
        }}
        onFinish={onFinish}
      />
    </Modal>
  );
};

export default React.memo(EditPost);
