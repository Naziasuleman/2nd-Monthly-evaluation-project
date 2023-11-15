/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import viteSass from "vite-plugin-sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSass()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@admin": path.resolve(__dirname, "src/pages/Admin/"),
      "@auth": path.resolve(__dirname, "src/pages/Authentication/"),
      "@user": path.resolve(__dirname, "src/pages/User/"),
      "@layouts": path.resolve(__dirname, "src/layouts/"),
    },
  },
});
