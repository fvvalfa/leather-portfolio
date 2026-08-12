import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://fvvalfa.github.io',  // ваш GitHub-логин
  // base пока не указываем, если репозиторий будет на корне
  integrations: [tailwind()],
});