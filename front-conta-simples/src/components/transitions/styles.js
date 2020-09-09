import styled from 'styled-components';

export const Container  = styled.div `
width: 100vw;
height: 100%;
font-family: Open Sans;
font-weight: normal;
background: #F4FCF5;

nav {
  background-color: #fff;
  height: 52px;
  width: 220px;
}
#navinfos{
  width: 220px;
  height: 52px;
  position: absolute;
  margin-left: 80px;
  display: flex;
  align-items: center;
  button#sino{
    border: none;
    background: none;
    margin-left: 50px;
  }
  button:hover{
    cursor: pointer;
  }
}


#menuToggle {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 17px;
  left: 15px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;

}

#menuToggle input
{
  display: flex;
  width: 40px;
  height: 32px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

#menuToggle span
{
  display: flex;
  width: 29px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: #45B54A;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 5px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
  opacity 0.55s ease;

}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-3px, -1px);
  background: #45B54A;
}
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
  position: absolute;
  width: 255px;

  margin: 35px 0 0 -50px;
  padding: 50px;
  padding-top: 40px;
  background-color: #fff;
  transform-origin: 0% 0%;
  transform: translate(-120%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

}

#menu li
{
  width: 220px;
  padding: 7px 0;
  list-style: none;
  transition-delay: 2s;
}

#menu li a {
  width: 220px;
  text-decoration: none;
  font-size: 12px;
  color: #333333;
}
#menu li a:hover{
  color: #45B54A;
}
#menu li a img {
  margin-right: 10px;
  margin-bottom: -2px
}

#menuToggle input:checked ~ ul
{
  transform: none;
}

div#wellcomediv{
  height: 175px;
  background: #45B54A;
  box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.06);
  border-radius: 0px 0px 94.5px 0px;
    h2{
      font-weight: 600;
      font-size: 25px;
      color: #FFFFFF;
    }
    h3 {
      font-weight: normal;
      font-size: 18px;
      line-height: 18px;
      color: #FFFFFF;
    }
    h4{
      font-weight: normal;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
    }
    h5{
    font-size: 12px;
    font-weight: normal;
    margin-left: 80px;
    color: rgba(255, 255, 255, 0.5);
    }
    div#logoenome{
      display: flex;
      align-items: center;
    }
    div#logoenome img{
      width: 26.5px;
      height: 26.5px;
      margin:8px 6px -5px 8px;
    }


.buttondiv{
      margin-left: 60px
    }
}
    .mostrarsaldo{
      margin: 10px 0px 0px 80px;
      h2#mask{
        display: none;

      }
      h2#saldo {
        display: block;
      }
       button{
        border: none;
        background:none;
        position: absolute;
        margin-left: 170px;
      }
      button:hover{
        cursor: pointer;
      }
    }
    .nao-mostrarsaldo{
      h2#saldo{
        display: none
      }
      h2#mask {
        display: block
      }
    }

    section#informacoesconta{
      display: flex;
      flex-direction: column;
      width: 100vw;
      align-items: center;
      margin-top: 35px;
    }
    div.containfos{
      background: #EFF8F0;
      border: 1px solid #F0F0F0;
      box-sizing: border-box;
      border-radius: 10px;
      width: 300px;
      min-width: 300px;
      height: 116px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

      #saldoconta{
        margin-left: 0px;
      }
      h2{
        font-weight: 600;
        color: #45B34A;
      }
      h4{
        font-size: 14px;
        font-weight: normal;
      }
      p{
      font-size: 13px;
      text-align: start;
      margin-left: -110px;
      }
      p#tempoatualizacao{
        position: absolute;
        font-size: 10px;
        width: 50px;
        margin-top:50px;
        margin-left: 230px;
        text-align:end ;
        color: rgba(0, 0, 0, 0.5);
      }

      button#compartilhardados{
        position: absolute;
        width: 81.39px;
        height: 24px;
        background: #45B54A;
        border: none;
        border-radius:  4px;
        color: #fff;
        font-size: 10px;
        margin-left: 100px;
      }
      button#compartilhardados:hover{
        cursor: pointer;
      }
      }
    }
    div#cardsdiv{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 340px;
      align-items: center;
      margin: auto;
    }
    div#chart{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 340px;
    align-items: center;
    margin: auto;
    }

    button#cadastracartao{
      width: 200px;
      height: 50px;
      background: linear-gradient(270deg, rgba(2,0,36,1) 0%, #45B54A 0%, rgba(48,156,8,1) 100%);
      border: 0.5px solid #FFFFFF;
      border-radius: 4px;
      margin: 20px auto;
      display: flex;
      align-items: center;
      transition: .3s ease-in ;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 15px;
        padding:13px 40px;
        &:hover {
          color: #45B54A;
        }
      }

      &:hover {
        cursor: pointer;
        border: 0.5px solid #45B54A;
        background: #FFFFFF;

      }

    }
    div#ultimastransacoes{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      width: 80%;
      margin: 0px auto 100px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
      div#transacoestitulo{
        display: flex;
        position: relative ;
        flex-direction: row;
        align-content: space-between;
        justify-content: space-between;
        margin:  50px auto 10px;
        width: 80%;
        overflow: hidden;
      }

      button#mostrartransacoes{
        width: 127px;
        height: 22px;
        background: #45B54A;
        border-radius: 4px;
        border: none;
        font-family: Niveau Grotesk;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
        text-transform: uppercase;
        color: #FFFFFF;


        &:hover{
          cursor: pointer;
        }
      }

      table{
      background: #FDFDFD;
      border: 1px solid #F0F0F0;
      box-sizing: border-box;
      border-radius: 10px;
      margin: auto;
      width: 953px;
      height: auto;
      padding-top: 20px
      }

      th{
        font-family: Niveau Grotesk;
        font-style: normal;
        font-weight: normal;
        line-height: 10px;
        letter-spacing: 0.03em;
        color: rgba(0, 0, 0, 0.5);
        font-family: Niveau Grotesk;
        font-size: 15px;
        line-height: 20px;
        border: 5px solid #FDFDFD;
        border-top: 1px solid #45B54A;
        padding: 20px;
        margin:0px;

      }
      td{
        text-align: center;
      }
    }

    #footerConta {
  position: absolute;
  margin-top: -90px;
  background-color: #45B54A;
  width: 100%;
  height: 129px;
  text-align: center;

}

#footerConta h4 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;

  margin-top: 20px;
  padding-left: 20px;
  padding-bottom:10px;
  color: #FFFFFF;
}
#footerConta p {
  padding-left: 20px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  color: rgba(255, 255, 255, 0.5);
}

#footer {
  display: none;
}


@media (min-width:600px){
  nav {
    margin:0px;
    min-width: 220px;
    width: 220px;
    height: 175px;
    display: flex;
    align-items: center;

    #menu
  { border-top:1px solid #707070 ;
    margin: 80px 0 0 -50px;}
  }
  #navinfos{
    position: absolute;
    margin-left: 10px;
      button{
        margin-left: 10px;
      }

    }
  div#wellcomediv{
    margin-left: 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 40px;

    div#logoenome{
      margin-top: 35px;
      h3{
        font-size: 30px;
        }
      }
      .buttondiv{
        margin-top: 35px
      }
    }

    section#informacoesconta{
      display: flex;
      flex-direction: row;
      width: 100vw;
      justify-content: center;
      justify-items: center;
      align-items: center;
      margin-top: 35px;
    }
    div.containfos{
      margin: 13px
    }
    div#transacoestitulo{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 950px;
    }
    div#chart{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 954px;
    margin-top: 50px;
    }

    #chart h3 {
      margin-top: -40px;
      padding-right:790px;
    }

    button#cadastracartao{
      margin: auto;
      margin-top: 100px
    }


  @media (min-width:1250px){
    #menuToggle span:first-child
{
  transform-origin: none;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: none;
}

  #menuToggle input:checked ~ span
{
  opacity: 0;
  transform: none;
  background: #45B54A;
}
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: none;
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: none;
}

#menuToggle span {
  opacity: 0;
}

#menu
{
  position: absolute;
  width: 255px;
  height: 1555px;

  margin: 35px 0 0 -50px;
  padding: 50px;
  padding-top: 40px;
  background-color: #fff;
  transform-origin: none;
  transform: none;
  transition: none;
}
div#ultimastransacoes{
      width: 953px;

  }

#footerConta {
  position: absolute;
  margin-top: 72px;
  background-color: #45B54A;
  width: 220px;
  height: 129px;
  z-index: 1;

}

#footerConta h4 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;

  margin-top: 20px;
  padding-left: 20px;
  padding-bottom:10px;
  color: #FFFFFF;

  text-align: left;
}
#footerConta p {
  padding-left: 20px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  color: rgba(255, 255, 255, 0.5);

  text-align: left;
}

#footer {
  position: absolute;
  margin-top: -100px;
  margin-left: 220px;
  background: #F4FCF5;
  width: 85%;
  height: 300px;
  display: block;

}

#footer h5 {
  font-family: Niveau Grotesk;
  font-style: normal;
  font-size: 8px;
  letter-spacing: 0.35em;

  color: rgba(0, 0, 0, 0.5);

  padding-top: 180px;
  padding-left: 435px;

}

#autorFrase {
padding-top: 3px;

font-family: Niveau Grotesk;
font-style: normal;
font-weight: 300;
font-size: 11px;
line-height: 13px;


padding-left: 425px;

color: rgba(0, 0, 0, 0.5);

}

#frase {
  padding-top: 10px;
  font-family: Niveau Grotesk;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

padding-left: 115px;

color: #000000;
}

#equipeB {
  padding-top: 45px;
  font-family: Niveau Grotesk;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

padding-left: 405px;

color: rgba(0, 0, 0, 0.5);

}

}





`;
