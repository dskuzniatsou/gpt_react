import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,              // позволяет использовать describe/it/expect без импорта
    environment: "jsdom",       // эмулируем браузер
    setupFiles: "./src/setupTests.ts", // глобальные настройки
    css: true,                  // поддержка css модулей
  },
})
