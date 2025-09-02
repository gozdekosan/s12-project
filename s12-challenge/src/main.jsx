import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';



createRoot(document.getElementById('root')).render(
   <LanguageProvider>
      <ThemeProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </ThemeProvider>
  </LanguageProvider>

)
