// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'index.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if(document.documentElement.clientWidth>500){
  window.alert('请使用手机浏览，以保证显示效果');
  // const img = window.document.createElement('img');
  // //img.src='/bookkeeping/qrcode.png';
  // img.src='qrcode.png';
  // document.body.append(img);
  // img.style.position='fixed';
  // img.style.left='50%';
  // img.style.top='50%';
  // img.style.transform='translate(-50%,-50%)';
  // img.style.boxShadow='0 0 5px rgb(0,0,0,0.3)'
}