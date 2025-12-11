import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router';
// import Example from './s2components/Example';

createRoot(document.getElementById('root')).render(
  // <Example/>
    <BrowserRouter>
      <App></App>
     
    </BrowserRouter>
 
  
)
