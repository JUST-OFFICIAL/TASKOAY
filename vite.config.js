import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/TASKOAY/",

  build: {
    rollupOptions: {
      input: {
        index: resolve("index.html"),
        login: resolve("login.html"),
        register: resolve("register.html"),
        start: resolve("start.html"),
        tasks: resolve("tasks.html"),
        wallet: resolve("wallet.html"),
        withdraw: resolve("withdraw.html"),
        profile: resolve("profile.html"),
        referrals: resolve("referrals.html"),
        activate: resolve("activate.html"),
        admin: resolve("admin.html"),
        resetPassword: resolve("reset-password.html")
      }
    }
  }
});
