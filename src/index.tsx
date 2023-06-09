

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import {BrowserRouter} from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  </BrowserRouter>,
)
