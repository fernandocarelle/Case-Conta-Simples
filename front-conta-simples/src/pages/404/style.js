import styled from 'styled-components';

export const PageTitle = styled.h2`
  font-family: 'Niveau Grotesk';
  font-size: 50px;
  font-weight: normal;
`;

export const Container = styled.div`
  margin: 0px;
  padding: 0px;
  outline:0px;
  height:100vh;
  width:100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction:column;
  background-color: #45B54A;
  align-items: center;
  justify-content: center;

  button{
    width: 140px;
    height: 40px;
    border: 1px solid #F0F0F0;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 30px;

    border: 1.5px solid #fff;
    color:#fff;
    background-color: #45B54A;
    transition: 0.3s;
  }

  button:focus {
	outline: none;
  border-bottom: 2px solid #45B54A;
  }

  button:hover{

    border: 1.5px solid #45B54A;
    background-color: #fff;
    color:#45B54A;
    cursor: pointer;
  }

  img{

    width: 300px;
    height: 300px;
  }

  h3{
    font-family: 'Niveau Grotesk';
    font-weight: normal;
  }
  a{
    text-decoration: none;
    color: #fff;
    margin: auto ;
    line-height: 40px;
    &:hover{
      color: #45B34A;
    }
  }
`;
