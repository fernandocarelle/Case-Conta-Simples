/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalStyle from '../../assets/styles/global';

import { Container } from './styles';
import { Headerdiv } from '../../assets/styles/headerdiv';
import { GreenButton } from '../../assets/styles/greenbutton';
import Imglogo from '../../assets/images/logo 01 mobile.svg';
import Sino from '../../assets/images/iconesino.svg';
import Logobranco from '../../assets/images/logobranco.svg';
import Olhoapagado from '../../assets/images/olhoapagado.svg';
import Olhoaceso from '../../assets/images/olhoaceso.svg';
import Iconeinicio from '../../assets/images/iconesul/iconeinicio.svg';
import IconeDepositar from '../../assets/images/iconesul/iconedepositar.svg';
import Iconeextratodaconta from '../../assets/images/iconesul/iconeextratodaconta.svg';
import IconeCartoes from '../../assets/images/iconesul/iconecartoes.svg';
import Iconeemitircobranca from '../../assets/images/iconesul/iconeemitircobranca.svg';
import IconeGestaodecobranca from '../../assets/images/iconesul/iconegestãodecobrança.svg';
import Iconetransferencia from '../../assets/images/iconesul/Grupo 2863.svg';
import Iconepagamentos from '../../assets/images/iconesul/iconeagendamentos.svg';
import Iconeusuarios from '../../assets/images/iconesul/iconeusuários.svg';
import IconeAgendamentos from '../../assets/images/iconesul/iconepagamentos.svg';
import IconesComprovantes from '../../assets/images/iconesul/iconecomprovantes.svg';
import IconeTarifas from '../../assets/images/iconesul/iconetarifas.svg';
import IconeFaleConosco from '../../assets/images/iconesul/iconefaleconosco.svg';
import IconeBeneficios from '../../assets/images/iconesul/iconebenefícios.svg';


import Cards from '../../components/cards/cards';

import Grafico from '../../components/chart/chart';

import Transitions from '../../components/transitions/transitions';


const Saldo = (props) => {
  const [checked, setChecked] = useState(false);
  const style = checked ? 'mostrarsaldo' : 'mostrarsaldo nao-mostrarsaldo';
  const vizualizacao = checked ? Olhoaceso : Olhoapagado;
  return (
    <div id="saldoconta" className={style}>
      <h4>Saldo da Conta</h4>
      <button onClick={() => setChecked(!checked)}>
        <img src={vizualizacao} id="botaosaldo" alt="mostrar/esconder saldo" />
      </button>
      <h2 id="mask" className="borrao">
        R$ ****,00
      </h2>
      <h2 id="saldo">R$ 25.000,00</h2>
    </div>
  );
};


function Home() {
  const accountId = localStorage.getItem('@conta-simples/accountid');

  return (
    <div className="Home">
      <>
        <GlobalStyle />
        <Container>
          <Headerdiv>
            <nav role="navigation">
              <div id="navinfos">
                <img src={Imglogo} alt="logo da empresa" />
                <button id="sino">
                  <img id="logo" src={Sino} alt="ativar notificações" />
                </button>
              </div>

              <div id="menuToggle">
                <input type="checkbox" />
                <span />
                <span />
                <span />

                <ul id="menu">
                  <li>
                    <a href="/">
                      <img src={Iconeinicio} alt="inicio" /> Início
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeDepositar} alt="inicio" />
                      Depositar
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Iconeextratodaconta} alt="inicio" />
                      Extrato da Conta
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeCartoes} alt="inicio" />
                      Cartões
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Iconeemitircobranca} alt="inicio" />
                      Emitir Cobrança
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeGestaodecobranca} alt="inicio" />
                      Gestão de Cobrança
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Iconetransferencia} alt="inicio" />
                      Transferência
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Iconepagamentos} alt="inicio" />
                      Pagamentos
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Iconeusuarios} alt="inicio" />
                      Usuários
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeAgendamentos} alt="inicio" />
                      Agendamentos
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconesComprovantes} alt="inicio" />
                      Comprovantes
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeTarifas} alt="inicio" />
                      Tarifas
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeFaleConosco} alt="inicio" />
                      Fale Conosco
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeBeneficios} alt="inicio" />
                      Beneficios
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div id="wellcomediv">
              <section id="sectioninfos">
                <div id="logoenome">
                  <h3>
                    <img src={Logobranco} id="logobranco" alt="ff" />
                    Bem-vindo à conta{' '}
                    <strong>Fernando{/* Será trazido pelo backend */}</strong>
                  </h3>
                </div>
                <h5>Sessão ativa há 00:00</h5>
                <Saldo />
              </section>

              <div className="buttondiv">
                <GreenButton>
                  <a href="/">Depositar</a>
                </GreenButton>
                <GreenButton>
                  <a href="/">Trasferir</a>
                </GreenButton>
              </div>
            </div>
          </Headerdiv>
          <section id="informacoesconta">
            <div className="containfos">
              <Saldo />
            </div>

            <div className="containfos">
              <h4>Rentabilidade</h4>
              <h2>R$ 222,00</h2>
              <p id="tempoatualizacao">Atualizado ontem às 15:00hrs</p>
            </div>

            <div className="containfos">
              <div id="dadosconta">
                <p>Nooma Design</p> {/* Será trazido pelo backend */}
                <p>81.809.187/0001-70</p> {/* Será trazido pelo backend */}
                <p>Banco Votorantim: 655</p>
                <p>Agência: 1111</p>
                <p>Conta: 62264022-7</p> {/* Será trazido pelo backend */}
              </div>
              <button id="compartilhardados">COMPARTILHAR</button>
            </div>
          </section>
          <div id="chart">
            <h3>Entrada vs saída</h3>
            <div className='canvas-container'>
              <Grafico />
            </div>
          </div>
          <div id="cardsdiv">
            <Cards />
          </div>
          <button id="cadastracartao">
            <Link to={`/cadastrarcartao/${accountId}`}>Cadastrar Cartão </Link>
          </button>

          <Transitions />
          <span id="footerConta">
            <h4>Nooma Design</h4>
            <p>Agência 0001</p>
            <p>Conta 443322-1</p>
            <p>CNPJ <b>81.809.187/0001-70</b></p>
          </span>
          <span id="footer">
            <h5>Frase do dia</h5>
            <p id="frase">Eles vão invejá-lo pelo seu sucesso, sua riqueza, sua inteligência, sua aparência, seu estatuto - mas raramente pela sua sabedoria.</p>
            <p id="autorFrase">Nassim Nicholas Taleb</p>
            <p id="equipeB">Com carinho, Equipe B ♥</p>
          </span>
        </Container>
      </>
    </div>
  );
}

export default Home;
