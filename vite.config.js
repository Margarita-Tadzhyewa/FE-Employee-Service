import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    root: './',
    publicDir: 'public',
    assetsDir: 'assets',
    server: {
        port: 5000,
        open: true, //automatically openbrowser
    },
    plugins: [react()],
    build: {
        outDir: 'build',
        emptyOutDir: true,
        rollupOptions: {
            input: ['index.html'],
        },
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.scss'],
    },
})
