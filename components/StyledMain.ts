import styled from 'styled-components';

export const HeaderLogo = styled.div`
  font-family: Helvetica;
  color: black;
  font-size: 46px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const LinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  padding: 20px 30px 20px;
  text-align: center;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const Section = styled.section`
  padding: 10px;
  box-sizing: border-box;
`;

export const Paragraph = styled.p`
  font-family: Helvetica;
  letter-spacing: 0.4em;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  color: #202125;
  cursor: pointer;
  max-width: 300px;
  width: 100%;
  outline: 3px solid;
  outline-color: rgba(71, 126, 232, 0.5);
  outline-offset: 30px;
  transition: all 600ms cubic-bezier(0.2, 0, 0, 0.8);
  &:hover {
    color: rgba(71, 126, 232, 0.7);
    outline-color: rgba(71, 126, 232, 0);
    outline-offset: 100px;
  }
`;
