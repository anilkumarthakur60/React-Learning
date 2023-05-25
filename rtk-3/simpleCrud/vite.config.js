import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  if (mode === "development") {
    return {
      plugins: [react()],
      server: {
        port: 3000,
      },
      define: {
        __APP_ENV__: env.APP_ENV,
      },
    };
  }
  if (mode === "production") {
    return {
      plugins: [react()],
      server: {
        port: 3000,
      },
      define: {
        __APP_ENV__: env.APP_ENV,
      },
    };
  }

  // return {
  //   plugins: [react()],
  //   server: {
  //     port: 3000,
  //   },
  // };
});
