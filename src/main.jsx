import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import MainContext from './MainContext/MainContext'



createRoot(document.getElementById('root')).render(
  <MainContext>
 <App/>
  </MainContext>
   
 
)
