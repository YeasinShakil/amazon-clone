import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import reducer, { initialState } from './reducer'
import { StateProvider } from './StateProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />

      </StateProvider>
    </React.StrictMode>,
  </BrowserRouter>
)
