import liff from '@line/liff'
import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import App from './App'
import RegisterForm from './RegisterForm'

liff
  .init({ liffId: import.meta.env.VITE_LIFF_ID || '' })
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
        <RegisterForm />
      </React.StrictMode>,
      document.getElementById('root')
    )
  })
  .catch((e) => {
    alert(`LIFF error: ${e.message}`)
  })
