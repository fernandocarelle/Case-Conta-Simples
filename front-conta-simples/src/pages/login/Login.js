import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask'
import { Container } from './styles';
import ImgLogin from '../../assets/images/login-image.svg';
import Img from '../../assets/images/logo 01 mobile.svg';
import GlobalStyle from '../../assets/styles/global';
import api from '../../services/api';

function Login() {
  const token = localStorage.getItem('@conta-simples/token');

  if (token) {
    window.location.href = `/home`;
  }

  const [infos, setInfos] = useState({
    enterpriseID: '',
    password: '',
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const { enterpriseID, password } = infos;


    const infosToApi = {
      enterpriseID,
      password,
    };


    const response = await api.post('/login', infosToApi);


    if (response.status !== 200) {

      return alert('Houve um erro no login');
    }

    localStorage.setItem('@conta-simples/token', response.data.token);
    localStorage.setItem('@conta-simples/accountid', response.data.id);
    const accId = localStorage.getItem('@conta-simples/accountid');

    alert('Usuário autenticado com sucesso');

    window.location.href = `/home/${accId}`;
  };

  const handleInputChanges = async (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Login">
      <>
        <GlobalStyle />
        <Container>

          <img
            id="imglogin"
            src={ImgLogin}
            alt="Ilustração de mulher com cartão"
          />
          <div id="loginform">
            <div id='tituloform'>
              <img id="imglogo" src={Img} alt="Logo da conta simples" />
              <h4>Preencha os campos abaixo para fazer login </h4>
            </div>
            <form onSubmit={onFormSubmit}>
              <label htmlFor="enterpriseID" className="labellogin">
                {' '}
                CNPJ: <br />
                <MaskedInput
                  mask={[
                    /[0-9]/,
                    /\d/,
                    '.',
                    /\d/,
                    /\d/,
                    /\d/,
                    '.',
                    /\d/,
                    /\d/,
                    /\d/,
                    '/',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                  ]}
                  placeholder="Insira seu CNPJ"
                  type="text"
                  id="enterpriseID"
                  name="enterpriseID"
                  onChange={handleInputChanges}
                />
              </label>
              <label htmlFor="senha" className="labellogin">
                {' '}
                Senha: <br />{' '}
                {/* Irá fazer um post pro backend para validação */}
                <input
                  placeholder="Insira sua senha"
                  type="password"
                  name='password'
                  id="senha"
                  onChange={handleInputChanges}
                />
              </label>
              <input value="LOGIN" type="submit" />
            </form>
             <a href="/">Esqueci minha senha {'>'}</a> <br />
            <Link to="/criarconta">Ainda não sou cliente {'>'}</ Link >{' '}
          </div>
        </Container>
      </>
    </div>
  );
}

export default Login;
