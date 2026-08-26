import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, host: true },
  preview: { port: 5173, host: true },
  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("shaders") || id.includes("three") || id.includes("typegpu") || id.includes("wgpu")) {
              return "vendor-shaders"
            }
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router")) {
              return "vendor-react"
            }
            if (id.includes("gsap") || id.includes("lenis")) {
              return "vendor-animation"
            }
            return "vendor-libs"
          }
        },
      },
    },
  },
})
