
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

// Create root outside of any function for better performance
const rootElement = document.getElementById("root");
const root = rootElement ? createRoot(rootElement) : null;

// Render app when DOM is fully loaded
if (root) {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
