/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Container } from './styles';



function Transitions() {


  return (
    <Container>
    <div id="transacoestitulo">
            <h3>Últimas Transações</h3>
            <button id="mostrartransacoes">Mostrar todas</button>
          </div>
        <div id="ultimastransacoes">
          <table>
            <tr>
              <th>Data da transação</th>
              <th>Origem/favorecido</th>
              <th>Tipo de operação</th>
              <th>Final do cartão</th>
              <th>Valor</th>
            </tr>
            <tr>
              <td>01/08/2020</td>
              <td>Facebook Ads</td>
              <td>Débito</td>
              <td>*****4492</td>
              <td>R$ 6.000,00</td>
            </tr>
            <tr>
              <td>05/08/2020</td>
              <td>Google Ads</td>
              <td>Débito</td>
              <td>*****4492</td>
              <td>R$ 2.000,00</td>
            </tr>
            <tr>
              <td>07/08/2020</td>
              <td>AliExpress</td>
              <td>Débito</td>
              <td>*****4494</td>
              <td>R$ 5.000,00</td>
            </tr>
            <tr>
              <td>11/08/2020</td>
              <td>Facebook Ads</td>
              <td>Débito</td>
              <td>*****4493</td>
              <td>R$ 2.000,00</td>
            </tr>
            <tr>
              <td>11/08/2020</td>
              <td>AliExpress</td>
              <td>Débito</td>
              <td>*****4494</td>
              <td>R$ 7.000,00</td>
            </tr>
            <tr>
              <td>11/08/2020</td>
              <td>Mercado Pago</td>
              <td>Débito</td>
              <td>*****4495</td>
              <td>R$ 2.000,00</td>
            </tr>
            <tr>
              <td>12/08/2020</td>
              <td>Facebook Ads</td>
              <td>Débito</td>
              <td>*****4492</td>
              <td>R$ 6.000,00</td>
            </tr>
            <tr>
              <td>14/08/2020</td>
              <td>Loja Matrix</td>
              <td>Débito</td>
              <td>*****4495</td>
              <td>R$ 1.000,00</td>
            </tr>
            <tr>
              <td>15/08/2020</td>
              <td>Google Ads</td>
              <td>Débito</td>
              <td>*****4493</td>
              <td>R$ 2.000,00</td>
            </tr>
          </table>
        </div>
  </Container>
  )

}

export default Transitions;
