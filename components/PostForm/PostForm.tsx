import React from 'react';
import { Form, Input, Button } from 'antd';

type FormProps = {
  title: string;
  body: string;
};

type PropsType = {
  initialValues?: FormProps;
  onFinish: (values: FormProps) => void;
};

const { TextArea } = Input;

const PostForm: React.FC<PropsType> = ({ initialValues, onFinish }) => {
  return (
    <Form name="post" initialValues={initialValues} onFinish={onFinish}>
      <Form.Item
        label="Post title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input title of post!',
          },
        ]}
      >
        <Input placeholder="Enter post title" />
      </Form.Item>

      <Form.Item
        label="Post text"
        name="body"
        rules={[
          {
            required: true,
            message: 'Please input body of post!',
          },
        ]}
      >
        <TextArea
          placeholder="Enter post body"
          autoSize={{
            minRows: 3,
            maxRows: 5,
          }}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </Form>
  );
};

export default React.memo(PostForm);
