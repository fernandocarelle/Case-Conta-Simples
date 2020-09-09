import React from 'react';
import GlobalStyle from '../../assets/styles/global';
import { Link } from 'react-router-dom';
import { Container } from './style';
import { PageTitle } from './style';
import problem_solving from '../../assets/images/problem_solving.svg';

function NotFound() {
  return (
    <div className="App">
      <>
        <Container>
          <img src={problem_solving} alt="problem solving" />
          <PageTitle>404 NOT FOUND</PageTitle><br/>
          <h3> Clique no Botão Abaixo para Voltar a Tela de Login</h3><br/><br/>
          <button>
            <Link to="/login"><h3>Voltar</h3></Link>
          </button>
        </Container>
        <GlobalStyle />
      </>
    </div>
  );
}

export default NotFound;
