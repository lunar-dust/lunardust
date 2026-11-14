// @ts-check
import { defineConfig } from "astro/config";

// GitHub Actions에서 Pages 설정값(SITE_URL, BASE_PATH)을 넘겨준다. 로컬에서는 루트 경로.
export default defineConfig({
  site: process.env.SITE_URL || "https://lunar-dust.github.io",
  base: process.env.BASE_PATH || "/",
});
