import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src/"),
      'api': path.resolve(__dirname, "./src/api/"),
      'assets': path.resolve(__dirname, "./src/assets/"),
      'classes': path.resolve(__dirname, "./src/classes/"),
      'components': path.resolve(__dirname, "./src/components/"),
      'config': path.resolve(__dirname, "./src/config/"),
      'hooks': path.resolve(__dirname, "./src/hooks/"),
      'models': path.resolve(__dirname, "./src/models/"),
      'pages': path.resolve(__dirname, "./src/pages/"),
      'store': path.resolve(__dirname, "./src/redux/")
    },
  }
})
