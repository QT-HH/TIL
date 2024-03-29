import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
console.log('after import at index.js')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log('after return?')
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// porcess.env.NODE_ENV
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)