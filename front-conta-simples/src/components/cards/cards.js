/* eslint-disable react/jsx-filename-extension */
import React, { useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './cards.css';
import './tab.css';
import Imglogo from '../../assets/images/logobranco.svg';


const styles = {
  fontWeight: 'bold',
  backgroundColor: '#45B54A',
  borderBottom: '1px solid #aaa',
  width: '100%',
};

function Cards() {

  const [infos] = useState([]);
  console.log(infos)


  return (
    <div className="card">
      <Tabs forceRenderTabPanel defaultIndex={0}>
        <div>
          <TabList>
            <Tab style={styles}>Cartões</Tab>
          </TabList>
        </div>
        <TabPanel>
          <Tabs forceRenderTabPanel>

            <TabList id="titulocartoes">
              <Tab id="listandocartoes"> Cartão Dropshipping</Tab>
              <Tab id="listandocartoes"> Cartão Afiliados</Tab>
              <Tab id="listandocartoes"> Cartão Fornecedor</Tab>
              <Tab id="listandocartoes"> Cartão Escritório</Tab>
            </TabList>

            <TabPanel>
              <div className="cardImg">
                <div className="cartaoficticio">
                  <img src={Imglogo} className="logobranco" alt="cartão" />
                  <div>
                    <p className="textocartao "> Dropshipping</p>
                  </div>
                  <div>
                    <p className="textocartao numero">
                      **** **** **** 4492
                        </p>
                    <p className="textocartao validade">12/2024</p>
                  </div>
                </div>
              </div>
              <div>
              <div className="tab" id="all-transaxtio">
                <table>
                  <tr>
                    <th className="tab-title">Data da transação</th>
                    <th className="tab-title">Origem/Favorecido</th>
                    <th className="tab-title">Tipo de Operação</th>
                    <th className="tab-title">Valor</th>
                  </tr>
                  <tr>
                    <td className="tab-title">01/08/2020</td>
                    <td className="tab-title">Facebook Ads</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 6.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">05/08/2020</td>
                    <td className="tab-title">Google Ads</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 2.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">12/08/2020</td>
                    <td className="tab-title">Facebook Ads</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 6.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">19/08/2020</td>
                    <td className="tab-title">Shopify</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 2.000,00</td>
                  </tr>
                  <div id='transactions'></div>
                </table>
              </div>
            </div>
            </TabPanel>



            <TabPanel>
              <div className="cardImg">
                <div className="cartaoficticio">
                  <img src={Imglogo} className="logobranco" alt="cartão" />
                  <div>
                    <p className="textocartao "> Afiliados</p>
                  </div>
                  <div>
                    <p className="textocartao numero">
                      **** **** **** 4493
                        </p>
                    <p className="textocartao validade">01/2025</p>
                  </div>
                </div>
              </div>
              <div>
              <div className="tab" id="all-transaxtio">
                <table>
                  <tr>
                    <th className="tab-title">Data da transação</th>
                    <th className="tab-title">Origem/Favorecido</th>
                    <th className="tab-title">Tipo de Operação</th>
                    <th className="tab-title">Valor</th>
                  </tr>
                  <tr>
                    <td className="tab-title">11/08/2020</td>
                    <td className="tab-title">Facebook Ads</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 2.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">15/08/2020</td>
                    <td className="tab-title">Google Ads</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 2.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">17/08/2020</td>
                    <td className="tab-title">Email Mkt</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 2.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">25/08/2020</td>
                    <td className="tab-title">Facebook Ads</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 5.000,00</td>
                  </tr>
                  <div id='transactions'></div>
                </table>
              </div>
            </div>
            </TabPanel>
            <TabPanel>
              <div className="cardImg">
                <div className="cartaoficticio">
                  <img src={Imglogo} className="logobranco" alt="cartão" />
                  <div>
                    <p className="textocartao "> Fornecedores</p>
                  </div>
                  <div>
                    <p className="textocartao numero">
                      **** **** **** 4494
                        </p>
                    <p className="textocartao validade">02/2025</p>
                  </div>
                </div>
              </div>
              <div>
              <div className="tab" id="all-transaxtio">
                <table>
                  <tr>
                    <th className="tab-title">Data da transação</th>
                    <th className="tab-title">Origem/Favorecido</th>
                    <th className="tab-title">Tipo de Operação</th>
                    <th className="tab-title">Valor</th>
                  </tr>
                  <tr>
                    <td className="tab-title">07/08/2020</td>
                    <td className="tab-title">AliExpress</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 5.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">11/08/2020</td>
                    <td className="tab-title">AliExpress</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 7.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">16/08/2020</td>
                    <td className="tab-title">AliExpress</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 6.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">21/08/2020</td>
                    <td className="tab-title">AliExpress</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 8.000,00</td>
                  </tr>
                  <div id='transactions'></div>
                </table>
              </div>
            </div>
            </TabPanel>
            <TabPanel>
              <div className="cardImg">
                <div className="cartaoficticio">
                  <img src={Imglogo} className="logobranco" alt="cartão" />
                  <div>
                    <p className="textocartao "> Escritório</p>
                  </div>
                  <div>
                    <p className="textocartao numero">
                      **** **** **** 4495
                        </p>
                    <p className="textocartao validade">03/2025</p>
                  </div>
                </div>
              </div>
              <div>
              <div className="tab" id="all-transaxtio">
                <table>
                  <tr>
                    <th className="tab-title">Data da transação</th>
                    <th className="tab-title">Origem/Favorecido</th>
                    <th className="tab-title">Tipo de Operação</th>
                    <th className="tab-title">Valor</th>
                  </tr>
                  <tr>
                    <td className="tab-title">11/08/2020</td>
                    <td className="tab-title">Mercado Pago</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 2.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">14/08/2020</td>
                    <td className="tab-title">Loja Matrix</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 1.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">19/08/2020</td>
                    <td className="tab-title">Mercado Pago</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 2.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">22/08/2020</td>
                    <td className="tab-title">Papelaria</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 1.000,00</td>
                  </tr>
                  <div id='transactions'></div>
                </table>
              </div>
            </div>
            </TabPanel>



          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Cards;
