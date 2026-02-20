import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// Disable F12, Ctrl+Shift+I, Ctrl+U, Right-click
import disableDevtool from 'disable-devtool';

function isDevUser() {
  // Allow access if URL has devAccess=true (e.g. ?devAccess=true)
  if (window.location.search.includes('k=nk!@3$%')) {
    sessionStorage.setItem('k', 'nk!@3$%');
    return true;
  }
  // Allow if localStorage has saved the dev flag
  return sessionStorage.getItem('k') === 'nk!@3$%';
}

if(window.location.hostname === "naveensarraf.vercel.app" && window.top === window.self && !isDevUser()){
  disableDevtool(); // <-- Block DevTools here
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
