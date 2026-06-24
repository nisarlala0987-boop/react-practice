import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Themechange from './Themechange/Themechange.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
<Themechange>

    <App />
</Themechange>
  // </StrictMode>,
)
