import { defineConfig } from "vitest/dist/config"
import Vue from '@vitejs/plugin-vue'
export default {
    plugins: [Vue()],
    test: {
        coverage: {
          reporter: ['text', 'json', 'html'],
        },
      },
}