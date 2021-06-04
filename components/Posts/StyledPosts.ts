import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding-left: 100px;

  .ant-card {
    display: flex;
    flex-direction: column;
  }

  .ant-card-body {
    height: 100%;
  }
`;
