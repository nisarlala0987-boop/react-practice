import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Themechange from './component/themechange.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Themechange>

    <App />
  </Themechange>
  // </StrictMode>,
)
