import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';

import PostForm from '../PostForm';
import { addNewPost } from '../../store/posts/operations';
import { WrapperForm, StyledTitle } from './StyledAddPost';

type FormProps = {
  title: string;
  body: string;
};

const AddPost: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onFinish = useCallback(
    (values: FormProps) => {
      dispatch(addNewPost(values.title, values.body));

      router.push('/');
    },
    [dispatch, router],
  );

  return (
    <WrapperForm>
      <Head>
        <title>Create Post</title>
      </Head>
      <StyledTitle level={3}>Create new post</StyledTitle>
      <PostForm onFinish={onFinish} />
    </WrapperForm>
  );
};

export default React.memo(AddPost);
