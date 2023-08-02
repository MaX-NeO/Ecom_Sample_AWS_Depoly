import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './assets/Style.css'
import './assets/Colors.css'
import './assets/Layout.css'
import 'react-toastify/dist/ReactToastify.min.css';
import { Provider } from 'react-redux'
import store from './redux/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
