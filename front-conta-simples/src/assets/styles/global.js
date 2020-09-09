import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing: border-box;
}
body{
  -webkit-font-smoothing: antialiased;
}
::-webkit-scrollbar {
  width: 6px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #F9F9F9;
  border-radius: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background:#E2E2E2;;
  border-radius: 3px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #45B54A;
}

`
