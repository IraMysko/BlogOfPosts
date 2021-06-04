import styled from 'styled-components';
import { Button } from 'antd';

export const PostContainer = styled.div`
  max-width: 700px;
  padding: 40px;
  margin: 0 auto;
  background: #ffffff;
`;

export const TimefprReading = styled.span`
  font-size: 12px;
  color: gray;
`;

export const TextBody = styled.div`
  font-size: 20px;
  color: #696969;
  margin: 25px 0 20px;
  overflow-wrap: break-word;
`;

export const CommentContainer = styled.div`
  padding-bottom: 20px;
`;

export const Comment = styled.div`
  font-size: 14px;
  margin-bottom: 30px;
  overflow-wrap: break-word;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledButton = styled(Button)`
  margin-left: 130px;
`;
