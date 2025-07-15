
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Create a custom plugin to log the build output directory contents
const logBuildOutputPlugin = () => {
  return {
    name: 'log-build-output',
    closeBundle: {
      sequential: true,
      order: 'post',
      handler() {
        console.log('Build completed. Dist directory contents:')
        try {
          const listDirRecursive = (dir, level = 0) => {
            const indent = ' '.repeat(level * 2)
            const files = fs.readdirSync(dir)
            files.forEach(file => {
              const filePath = path.join(dir, file)
              const stats = fs.statSync(filePath)
              if (stats.isDirectory()) {
                console.log(`${indent}${file}/`)
                listDirRecursive(filePath, level + 1)
              } else {
                console.log(`${indent}${file}`)
              }
            })
          }
          listDirRecursive('./dist')
        } catch (err) {
          console.error('Error listing dist directory:', err)
        }
      }
    }
  }
}

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '')

  const host = env.VITE_HOST || '0.0.0.0'
  const port = parseInt(env.VITE_PORT) || 5000

  // Construct the Replit host URL dynamically
  const replitHost = process.env.REPL_SLUG && process.env.REPL_OWNER
    ? `${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.replit.dev`
    : null

  const allowedHosts = ['.replit.dev']
  if (replitHost) {
    allowedHosts.push(replitHost)
  }

  return {
    plugins: [
      react(), 
      logBuildOutputPlugin()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env': {}
    },
    server: {
      host,
      port,
      hmr: {
        port: 5000,
        host: 'localhost'
      },
      // Dynamically allow the specific Replit host
      allowedHosts,
      cors: true,
      proxy: {
        '/api': {
          target: 'http://0.0.0.0:3000',
          changeOrigin: true
        }
      }
    },
    preview: {
      host: '0.0.0.0',
      port: process.env.PORT ? parseInt(process.env.PORT) : 3000
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom']
          }
        }
      },
      // Ensure public directory files are copied as-is
      copyPublicDir: true
    }
  }
})
