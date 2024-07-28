import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:{
  //   proxy:{
  //     "/api":{
  //       target:"https://github.com/thakurcoder/Portfolio/blob/main/src/constants/constantParagraph.js",
  //       changeOrigin: false,
  //     }
  //   }
  // }
})
