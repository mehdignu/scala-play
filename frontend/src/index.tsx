import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.sass'
import { BrowserRouter } from 'react-router-dom'
import { BooksProvider } from './components/contexts/BooksContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <BooksProvider>
        <App />
      </BooksProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
