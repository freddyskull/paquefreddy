import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ui/theme-provider'
import { ThemeToggle } from './components/themeToggle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="ligth" storageKey="vite-ui-theme">
      <App />
      <div className='right-5 bottom-5 fixed'>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  </StrictMode>,
)
