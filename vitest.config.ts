import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path';


export default defineConfig({
    resolve:{
    alias: {
        '@': path.resolve(__dirname, './')
    }
    },
    plugins: [react()],
    test: {
        globals:true,
        environment: 'jsdom',
    },
})