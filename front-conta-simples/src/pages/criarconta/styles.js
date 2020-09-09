import styled from 'styled-components';

export const Container = styled.div `
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

  h4 {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: normal;
    color: #8A8A8A;
  }

  a{
    display: flex;
    font-family: Open Sans;
    font-weight: normal;
    font-size: 11px;
    color: #45B54A;
    text-decoration: none;
    align-content: center;
    justify-content: center;

  }
  img#imglogin{
    display:none;
  }
  label{
    color: #8A8A8A;
    text-align: start;
    font-family: 'Niveau Grotesk', 'Open Sans', sans-serif;
    font-size: 12px;
  }

  img#imglogo{
    width: 134px;
    height: 32px;
    margin-bottom: 10px
  }

  #loginform{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    height: 650px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 10px 10px 14px rgba(0, 0, 0, 0.25);
  }

  #tituloform{
    margin-bottom: 35px
  }
  form{
    display: flex;
    flex-direction: column;
    align-content: center
  }


  input{
    width: 263px;
    height: 43px;
    border: 1px solid #F0F0F0;
    box-sizing: border-box;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 20px;
    padding: 5px
  }

  input:focus {
	outline: none;
  border-bottom: 2px solid #45B54A;
  }

  input[type='submit']{
    border: 1.5px solid #45B54A;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #fff;
    color:#45B54A;
    transition: 0.3s;
  }
  input[type='submit']:hover{
    border: 1.5px solid #fff;
    color:#fff;
    background-color: #45B54A;
    cursor: pointer;
  }




  @media (min-width:600px){
    width: 100%;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;

    img#imglogin{
      display: block ;
      width: 500px;
      height: 500px;
      margin-right: 45px;
    }
    form{
      display:flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      align-content: center;
    }
    a{
    display: flex;
    font-family: Open Sans;
    font-weight: normal;
    font-size: 11px;
    color: #45B54A;
    text-decoration: none;
    align-content: center;
    justify-content: center;
    }}`
