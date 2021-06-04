import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form, Input, Typography } from 'antd';
import Head from 'next/head';

import axios from '../../axios';
import { PostInfoType } from '../../types';
import { getTimeForReading } from '../../utils';
import {
  PostContainer,
  TimefprReading,
  TextBody,
  CommentContainer,
  Comment,
  StyledButton,
} from './StyledPostInfo';

const { TextArea } = Input;
const { Title } = Typography;
const { useForm } = Form;

const PostInfo: React.FC = () => {
  const {
    query: { postId },
  } = useRouter();

  const [post, setPost] = useState<PostInfoType | undefined>();

  const [form] = useForm();

  const handleAddComment = async (values: { comment: string }) => {
    if (!post) return;

    const response = await axios.post(`/comments`, {
      postId,
      body: values.comment,
    });

    const newPost = {
      ...post,
      comments: [...post.comments, response.data],
    };
    setPost(newPost);
    form.resetFields();
  };

  useEffect(() => {
    if (!postId) return;

    const fetchData = async () => {
      const result = await axios(`/posts/${postId}?_embed=comments`);
      setPost(result.data);
    };
    fetchData();
  }, [postId]);

  if (post) {
    return (
      <PostContainer>
        <Head>
          <title>Post</title>
        </Head>
        <Title level={3}>{post.title}</Title>
        <TimefprReading>{getTimeForReading(post.body)} minute read</TimefprReading>
        <TextBody>{post.body}</TextBody>

        <Title level={5}>Comments ({post.comments.length})</Title>

        <CommentContainer>
          {post.comments.map(({ id, body }) => {
            return <Comment key={id}>{body}</Comment>;
          })}
        </CommentContainer>

        <Form form={form} onFinish={handleAddComment}>
          <Form.Item
            label="New comment"
            name="comment"
            rules={[
              {
                required: true,
                message: 'Please input comment for post!',
              },
            ]}
          >
            <TextArea
              placeholder="Enter your comment"
              autoSize={{
                minRows: 3,
                maxRows: 5,
              }}
            />
          </Form.Item>
          <StyledButton type="primary" htmlType="submit">
            Add comment
          </StyledButton>
        </Form>
      </PostContainer>
    );
  }
  return <div>Post is loading</div>;
};

export default PostInfo;
