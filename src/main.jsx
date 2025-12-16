import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router';
import SvContext from './SvContext';
// import Example from './s2components/Example';

createRoot(document.getElementById('root')).render(
  // <Example/>
    <BrowserRouter>
    <SvContext>
      <App></App>
    </SvContext>
     
    </BrowserRouter>
 
  
)
