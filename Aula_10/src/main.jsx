import { StrictMode } from 'react'// serve para mostrar os erro
import { createRoot } from 'react-dom/client'// criando as rotas
import './index.css' // importa o arquivo index.css


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
