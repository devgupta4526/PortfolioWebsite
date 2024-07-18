import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { MobileProvider } from './Utils/Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MobileProvider>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </MobileProvider>
  </BrowserRouter>
)
