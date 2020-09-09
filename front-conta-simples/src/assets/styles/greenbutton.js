import styled from 'styled-components';

export const GreenButton = styled.button`
  width: 104px;
  height: 33px;
  background: linear-gradient(270deg, rgba(2,0,36,1) 0%, #45B54A 0%, rgba(48,156,8,1) 100%);
  border: 0.5px solid #FFFFFF;
  border-radius: 4px;
  margin: 5px;
  transition: ease-in .2s;

  a {
    text-decoration: none;
    color: #fff;
    padding:13px 24px;
    &:hover {
      color: #45B54A;
    }
  }

  &:hover {
    cursor: pointer;
    border: 0.5px solid #45B54A;
    background: #FFFFFF;

  }
`;
