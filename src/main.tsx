
import { createRoot } from 'react-dom/client'
import { StrictMode, lazy, Suspense } from 'react'
import './index.css'

// Create root outside of any function for better performance
const rootElement = document.getElementById("root");
const root = rootElement ? createRoot(rootElement) : null;

// Add font preconnect links
const addPreconnect = () => {
  const links = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: "anonymous" },
    { rel: 'preload', href: '/sitemap.xml', as: 'fetch', crossOrigin: "anonymous" }
  ];
  
  links.forEach(linkData => {
    const link = document.createElement('link');
    Object.entries(linkData).forEach(([key, value]) => {
      if (value !== undefined) {
        link[key] = value;
      }
    });
    document.head.appendChild(link);
  });
};

// Add preconnect links immediately
addPreconnect();

// Helper function to detect and log direct navigation to specific routes
const logDirectNavigation = () => {
  const path = window.location.pathname;
  const isDirectNavigation = document.referrer === '';
  
  if (isDirectNavigation && path !== '/') {
    console.log(`Direct navigation detected to: ${path}`);
    
    // Clear any existing canonical URLs that might be in the static HTML
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }
  }
  
  // Pre-warm route data for known direct paths
  if (path.startsWith('/guides/') || path.startsWith('/exams/') || path.startsWith('/blog/')) {
    const id = path.split('/').pop();
    if (id) {
      console.log(`Pre-warming data for ${path}`);
      // This would be a good place to prefetch data if needed
    }
  }
};

// Call immediately
logDirectNavigation();

// Dynamically import App for better chunking
const App = lazy(() => import('./App.tsx'));

// Add idle callback for non-critical operations
const idleCallback = () => {
  // Report web vitals or perform other non-critical init tasks
  console.log("App fully initialized");
};

// Check if browser supports requestIdleCallback
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(idleCallback);
} else {
  setTimeout(idleCallback, 2000);
}

// Detect connection speed for adaptive loading
let connectionSpeed = 'high';
if ('connection' in navigator && navigator.connection) {
  if (navigator.connection.saveData || 
      navigator.connection.effectiveType === '2g' || 
      navigator.connection.effectiveType === 'slow-2g') {
    connectionSpeed = 'low';
    document.documentElement.classList.add('slow-connection');
  }
}

// Render app when DOM is fully loaded
if (root) {
  root.render(
    <StrictMode>
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-white">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-slate-600">Loading...</p>
          </div>
        </div>
      }>
        <App />
      </Suspense>
    </StrictMode>
  );
}
