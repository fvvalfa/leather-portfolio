# Leather Portfolio

Портфолио изделий из кожи ручной работы.

Сайт: [leather.f-v-v.ru](https://leather.f-v-v.ru)

## Стек

- [Astro](https://astro.build) 7
- [Tailwind CSS](https://tailwindcss.com) 4
- Content Collections (Markdown)

## Структура проекта

```
/
├── public/                 # Статика (favicon, robots.txt, изображения)
├── src/
│   ├── assets/             # Изображения, импортируемые в код
│   ├── components/         # Компоненты (галерея и др.)
│   ├── content/works/      # Работы (Markdown + изображения)
│   ├── layouts/            # Базовый layout
│   ├── lib/                # Категории и вспомогательные функции
│   ├── pages/              # Страницы и маршруты
│   └── styles/             # Глобальные стили
├── astro.config.mjs
└── package.json
```

## Команды

| Команда           | Действие                                      |
|-------------------|-----------------------------------------------|
| `npm install`     | Установка зависимостей                        |
| `npm run dev`     | Локальный сервер разработки (`localhost:4321`) |
| `npm run build`   | Сборка в `./dist/`                            |
| `npm run preview` | Просмотр production-сборки                    |

## Как добавить работу

1. Создайте папку в нужной категории:

```
src/content/works/<категория>/<slug>/
```

2. Положите туда `index.md` и изображения (`cover.jpg` и др.).

3. Пример frontmatter:

```md
---
title: Классический бумажник
description: Кожаный бумажник ручной работы
date: 2025-06-12
category: bumazhniki
materials:
  - Натуральная кожа
  - Фурнитура латунь
techniques:
  - Ручная строчка
cover: ./cover.jpg
images:
  - ./photo-2.jpg
featured: true
draft: false
---

Текст описания изделия.
```

### Категории

| ID           | Название        |
|--------------|-----------------|
| `bumazhniki` | Бумажники       |
| `accessories`| Аксессуары      |
| `cover`      | Чехлы, папки    |
| `sumki`      | Сумки женские   |
| `ryukzaki`   | Рюкзаки         |

Категории задаются в `src/lib/categories.ts`.

## Основные страницы

- `/` — главная (hero, категории, избранные работы)
- `/works` — все работы с фильтрами и сортировкой
- `/works/<category>` — работы категории
- `/works/<category>/<slug>` — страница изделия (галерея, материалы, похожие)
- `/about` — о мастере
- `/contacts` — контакты и форма обратной связи

## Особенности

- Lightbox-просмотр фото на страницах работ
- Фильтрация по категориям и сортировка на `/works`
- Адаптивная вёрстка, активный пункт меню, кнопка «Наверх»
- Форма на Formspree (`/contacts`)

## Деплой

Сайт собирается в статику (`npm run build`).  
Готовый результат — папка `dist/`.

Для GitHub Pages уже есть workflow в `.github/workflows/`.  
Домен задаётся в `astro.config.mjs` через `site`.

## Лицензия

Личный проект. Код и контент принадлежат автору.
