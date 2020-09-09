import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import GlobalStyle from '../../assets/styles/global';
import Imagemcartao from '../../assets/images/cadastrarcartao.svg'
import Img from '../../assets/images/logo 01 mobile.svg';
import api from '../../services/api';

function Criarcartao() {
  const token = localStorage.getItem('@conta-simples/token');

  if (!token) {
    window.location.href = `/login`;
  };

  const [infoId, setInfoId] = useState({
    account_id: '',
  });

  const [infos, setInfos] = useState({
    cardName: '',
    password: '',
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    // const accountId = localStorage.getItem('Aconta-simples/accountid');

    const { account_id } = infoId;

    const { cardName, password } = infos;

    const infosToApi = {
      account_id,
      cardName,
      password,
    };

    const response = await api.post('/card', infosToApi);

    localStorage.setItem('@conta-simples/cardid', response.data.id);

    window.location.href = `/home`;
  };

  const handleInputChanges = async (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    async function loadAccId() {
      const accId = localStorage.getItem('@conta-simples/accountid');
      setInfoId({ account_id: accId.toString() });
    }
    loadAccId();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="Criarcartao" >
      <>
        <GlobalStyle />
        <Container>
          <img
            id="imglogin"
            src={Imagemcartao}
            alt="Ilustração de mulher com cartão"
          />
          <div id="loginform">
            <form onSubmit={onFormSubmit}>
              <img id="imglogo" src={Img} alt="Logo da conta simples" />
              <h4>Preencha para cadastrar um novo cartão </h4>
              <label htmlFor="cardName" className="labellogin">
                {' '}
                Nome do Cartão: <br />
                <input
                  placeholder="Insira o nome do cartão"
                  type="text"
                  id="cardName"
                  name="cardName"
                  onChange={handleInputChanges}
                />
              </label>
              <label htmlFor="senha" className="labellogin">
                {' '}
                Senha: <br />{' '}
                {/* Irá fazer um get pro backend para validação */}
                <input
                  placeholder="Insira sua senha"
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleInputChanges}
                />
              </label>
              <input value="CADASTRAR" type="submit" />
            </form>
          </div>
        </Container>
      </>
    </div>
  );
}

export default Criarcartao;
