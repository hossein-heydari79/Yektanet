import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.js'
import store from './redux/store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

