import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Card, Avatar } from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';

import EditPost from '../EditPost';
import { getPosts, removePost } from '../../store/posts/operations';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Wrapper } from './StyledPosts';

const { Meta } = Card;

const Posts: React.FC = () => {
  const posts = useTypedSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const [editedId, setEditedId] = useState<string | undefined>();

  const makeHandleDeletePost = (id: string) => () => {
    dispatch(removePost(id));
  };

  const makeHandleEditPost = (id: string) => () => {
    setEditedId(id);
  };

  const resetEditedId = useCallback(() => {
    setEditedId(undefined);
  }, []);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Wrapper>
      {posts.map(({ id, title, body }) => {
        return (
          <Card
            key={id}
            style={{ width: 300 }}
            actions={[
              <EditOutlined key="edit" onClick={makeHandleEditPost(id)} />,
              <DeleteOutlined key="delete" onClick={makeHandleDeletePost(id)} />,
              <Link href={`/posts/${id}`}>
                <EyeOutlined key="ellipsis" />
              </Link>,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={title}
              description={body.length > 150 ? `${body.substring(0, 150)}...` : body}
            />
          </Card>
        );
      })}

      {editedId && <EditPost id={editedId} resetEditedId={resetEditedId} />}
    </Wrapper>
  );
};

export default Posts;
