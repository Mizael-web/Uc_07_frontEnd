import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Button from './Button.jsx'
import Button2 from './Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Button/>  
    <Button2/>
  </StrictMode>,
)
