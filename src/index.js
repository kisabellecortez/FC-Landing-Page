import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Load Facebook SDK
(function (d, s, id) {
  const fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  const js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="fb-root"></div>
<script async defer crossorigin="anonymous" 
  src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0" 
  nonce="FbNonce"></script>

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
