
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['framer-motion', 'recharts'],
          ui: ['@radix-ui/react-toast', '@radix-ui/react-dialog'],
          // Split router separately for better caching
          router: ['react-router-dom'],
          // Components by feature area
          home: ['./src/components/home/Hero.tsx', './src/components/home/Features.tsx'],
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    },
    // Target modern browsers for smaller bundle sizes
    target: 'es2018',
    // Improve chunk loading
    chunkSizeWarningLimit: 1000,
  },
}));
