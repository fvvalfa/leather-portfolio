import { defineConfig } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  // ваш GitHub-логин
  // base пока не указываем, если репозиторий будет на корне
  site: 'https://fvvalfa.github.io',

  vite: {
    plugins: [tailwindcss()]
  }
});