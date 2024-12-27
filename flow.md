# flow

## initial

========================================================================

### 1.install React template

```
/*in R:*/
yarn create vite p4.uazdao --template react
cd p4.uazdao
yarn add react@18.2.0 react-dom@18.2.0
yarn set version stable
yarn config set nodeLinker node-modules
yarn
yarn dev
```

### 2.assign to git

use command "…or create a new repository on the command line" from github

### 3.install other

```
yarn add react-router-dom@5.2.0
yarn add stylelint
yarn add stylelint-selector-bem-pattern
yarn add sass --dev
yarn add normalize.css
```

### 3.1.change vite.config.js

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNormalize from 'postcss-normalize';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        historyApiFallback: true, // for React Router
    },
    css: {
        postcss: {
            plugins: [
                postcssNormalize(), // for normalize.css
            ],
        },
    },
});
```

### 4. no install

                            /*

                            yarn add materialize-css@next
                            yarn add json-server
                            yarn add concurrently --dev

                            */

### 5.clear the template

/_
Remove-Item -Recurse -Force .yarn, .pnp._ , node_modules

Remove-Item — команда для удаления файлов и папок.
-Recurse — рекурсивное удаление всех вложенных файлов и папок.
-Force — принудительное удаление, даже если файлы скрыты или защищены.
\*/

Remove-Item -Recurse -Force ./public/_
Remove-Item -Recurse -Force ./src/assets/_
New-Item -ItemType Directory -Name "./src/assets/image"
New-Item -ItemType Directory -Name "./src/component"  
New-Item -ItemType Directory -Name "./src/components/utils"  
New-Item -ItemType Directory -Name "./src/layout"
New-Item -ItemType Directory -Name "./src/pages"
New-Item -ItemType Directory -Name "./src/services"

/\*
clear file manually:
.\src\App.css
.\src\index.css
.\src\App

add:
.\src\flow.md
.\src\services\api.js
config.js
.\src\component\Preloader
.\src\component\Search
.\src\layout\Footer
.\src\layout\Header
\*/

/\* paste:

function App() {
return <div>Hi</div>;
}

export default App;

function Preloader() {
return <div>Preloader</div>;
}

export {Preloader};

function Search() {
return <div>Search</div>;
}

export {Search}

function Footer() {
return <div>Footer</div>;
}

export {Footer};

function Header() {
return <div>Header</div>;
}

export {Header};
\*/

yarn dev

### 6. push

git add -A
git commit -m "initial"
git push

========================================================================

gif uaz
https://dribbble.com/shots/2606920-UAZ-469

========================================================================

Кодировка UTF-16LE не поддерживается корректно Vite и большинством современных инструментов для веб-разработки, так как они ожидают UTF-8. Это объясняет, почему стили не применялись, даже если файл был технически верным.

я делал очистку через терминал используя команду и файлы оказались UTF 16LE
echo "" > .\src\index.css

и даже если использовать
Set-Content -Path .\src\index.css -Value @""@ -Encoding UTF8
то создается UTF8 with BOM

# по-этому файлы нужно создавать вручную и очищать вручную

ico files
https://icon-icons.com/search/icons/?filtro=car&page=3

---

https://fontawesome.com/

<script src="https://kit.fontawesome.com/bd4e968d26.js" crossorigin="anonymous"></script>

![](_md_img/flow_images/flow%202024-12-15-19-08-23.png)
[3.1] 10 25:35

---

## for start in new note

```
    npm install --global yarn

    --admin:
    corepack enable
    corepack prepare yarn@4.5.3 --activate

    yarn config set nodeLinker node-modules
    yarn
    yarn dev
```

# flow

## initial

========================================================================

### 1.install React template

```
/*in R:*/
yarn create vite p4.uazdao --template react
cd p4.uazdao
yarn add react@18.2.0 react-dom@18.2.0
yarn set version stable
yarn config set nodeLinker node-modules
yarn
yarn dev
```

### 2.assign to git

use command "…or create a new repository on the command line" from github

### 3.install other

```
yarn add react-router-dom@5.2.0
yarn add stylelint
```

### 4. no install

                            /*

                            yarn add materialize-css@next
                            yarn add json-server
                            yarn add concurrently --dev

                            */

### 5.clear the template

/_
Remove-Item -Recurse -Force .yarn, .pnp._ , node_modules

Remove-Item — команда для удаления файлов и папок.
-Recurse — рекурсивное удаление всех вложенных файлов и папок.
-Force — принудительное удаление, даже если файлы скрыты или защищены.
\*/

Remove-Item -Recurse -Force ./public/_
Remove-Item -Recurse -Force ./src/assets/_
New-Item -ItemType Directory -Name "./src/assets/image"
New-Item -ItemType Directory -Name "./src/component"  
New-Item -ItemType Directory -Name "./src/components/utils"  
New-Item -ItemType Directory -Name "./src/layout"
New-Item -ItemType Directory -Name "./src/pages"
New-Item -ItemType Directory -Name "./src/services"

/\*
clear file manually:
.\src\App.css
.\src\index.css
.\src\App

add:
.\src\flow.md
.\src\services\api.js
config.js
.\src\component\Preloader
.\src\component\Search
.\src\layout\Footer
.\src\layout\Header
\*/

/\* paste:

function App() {
return <div>Hi</div>;
}

export default App;

function Preloader() {
return <div>Preloader</div>;
}

export {Preloader};

function Search() {
return <div>Search</div>;
}

export {Search}

function Footer() {
return <div>Footer</div>;
}

export {Footer};

function Header() {
return <div>Header</div>;
}

export {Header};
\*/

yarn dev

### 6. push

git add -A
git commit -m "initial"
git push

========================================================================

gif uaz
https://dribbble.com/shots/2606920-UAZ-469

========================================================================

Кодировка UTF-16LE не поддерживается корректно Vite и большинством современных инструментов для веб-разработки, так как они ожидают UTF-8. Это объясняет, почему стили не применялись, даже если файл был технически верным.

я делал очистку через терминал используя команду и файлы оказались UTF 16LE
echo "" > .\src\index.css

и даже если использовать
Set-Content -Path .\src\index.css -Value @""@ -Encoding UTF8
то создается UTF8 with BOM

# по-этому файлы нужно создавать вручную и очищать вручную

ico files
https://icon-icons.com/search/icons/?filtro=car&page=3

========================================================================

horizontal menu
https://html5book.ru/gorizontalnoe-menu/

========================================================================

typography

[4.2] Dmitrii Fokeev – Теория дизайна - для веб дизайнеров, фотографов и... (https://www.udemy.com/course/cniiaptv/learn/lecture/28968206?start=195#overview)

![](_md_img/flow_images/flow%202024-12-17-14-01-21.png)

30
small 14px - маленокое
base 16px - обычный, параграфы
action 18px - кнопки и меню навигации, bold, semi-boid
header (18-96px) 24px заголовки, bold, extra-bold

межстртрочное обычного - 160% - 180% от base текста = 25.6 - 28.8 px

межстрочное заголовка - уменьшать по мере увеличения шрифта и его толщины

длина строки < 500-800 px максимум

используйте только 2 шрифта, тогда будет гармонично

---

fix error with Link in React Router in Vite:

Если используете Vite, в vite.config.js добавьте - подрлбнее ...

ChatGPT сказал:
ChatGPT
Я понимаю Ваше раздражение, Александр Петрович! Vite может раздражать, особенно когда на первый взгляд всё должно работать. Давайте разберёмся и попробуем упростить задачу.

Почему проблема с Vite?
Vite использует собственный сервер разработки, который, по умолчанию, не настроен для обработки маршрутов в приложении React. Когда Вы кликаете на Link, URL меняется, но сервер не знает, как обработать этот маршрут. В итоге приложение не может правильно рендерить компонент.

Что нужно сделать?
Вам нужно добавить поддержку маршрутов в конфигурацию Vite, чтобы сервер перенаправлял все запросы на главный файл index.html.

Как настроить vite.config.js:
Откройте файл vite.config.js (если его нет, создайте). Внесите следующие изменения:

javascript
Копировать код
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
server: {
historyApiFallback: true, // Включает поддержку маршрутов React
},
});
После изменений:
Сохраните файл vite.config.js.
Перезапустите сервер разработки:
bash
Копировать код
yarn dev
Проверьте, работает ли маршрутизация.
Почему так сложно?
Vite стремится быть максимально быстрым и современным, но из-за этого иногда требует ручной настройки для специфичных задач, таких как маршруты в React. Этот дополнительный шаг необходим для работы с react-router-dom.

========================================================================

compression jpeg https://tinypng.com/

convert jpeg to webp https://image.online-convert.com/convert/jpeg-to-webp

original jpeg 9.27 Mb
compressed jpeg 2.21 MB
converted webp 2.22 Mb
compressed webp 1.51 Mb
========================================================================

refactoring CSS:
Михаил Непомнящий: CSS-модули, SASS/SCSS и сброс стилей в React-приложении
https://www.youtube.com/watch?v=oYnyQ47BUSo&t=705s&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9

========================================================================

## add scss:

```
https://vite.dev/guide/features.html#css-pre-processors

CSS Pre-processors
Because Vite targets modern browsers only, it is recommended to use native CSS variables with PostCSS plugins that implement CSSWG drafts (e.g. postcss-nesting) and author plain, future-standards-compliant CSS.

That said, Vite does provide built-in support for .scss, .sass, .less, .styl and .stylus files. There is no need to install Vite-specific plugins for them, but the corresponding pre-processor itself must be installed:
...

You can also use CSS modules combined with pre-processors by prepending .module to the file extension, for example style.module.scss.

```

и выполнил команду:

```
yarn add sass --dev
```

## CSS normalize for Vite:

1. install normalize.css:

```
yarn add normalize.css
```

2. index.scss в начало:

```
@import 'normalize.css';
```

3. vite.config.js:

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNormalize from 'postcss-normalize';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        historyApiFallback: true, // for React Router
    },
    css: {
        postcss: {
            plugins: [
                postcssNormalize(), // for normalize.css
            ],
        },
    },
});
```

=====================================================================

https://classic.yarnpkg.com/en/package/stylelint

yarn add stylelint --dev

https://github.com/stylelint/stylelint/blob/main/docs/user-guide/get-started.md

yarn add stylelint stylelint-config-standard-scss --dev

Create a .stylelintrc.json configuration file in the root of your project with the following content:
{
"extends": "stylelint-config-standard-scss"
}

add to package.json in scripts:

```json
 "stylelint": "stylelint \"**/*.scss\"",
```

yarn stylelint

=====================================================================
https://gist.github.com/jonlabelle/c082700c1c249d986faecbd5abf7d65b

npm vs Yarn Command Translation Cheat Sheet
npm Yarn
npm init yarn init
npm install yarn install
(N/A) yarn install --flat
(N/A) yarn install --har
(N/A) yarn install --no-lockfile
(N/A) yarn install --pure-lockfile
npm install [package] (N/A)
npm install --save [package] yarn add [package]
npm install --save-dev [package] yarn add [package] --dev
(N/A) yarn add [package] --peer
npm install --save-optional [package] yarn add [package] --optional
npm install --save-exact [package] yarn add [package] --exact
(N/A) yarn add [package] --tilde
npm install --global [package] yarn global add [package]
npm update --global yarn global upgrade
npm rebuild yarn add --force
npm uninstall [package] (N/A)
npm uninstall --save [package] yarn remove [package]
npm uninstall --save-dev [package] yarn remove [package]
npm uninstall --save-optional [package] yarn remove [package]
npm cache clean yarn cache clean
rm -rf node_modules && npm install yarn upgrade
npm version major yarn version --major
npm version minor yarn version --minor
npm version patch yarn version --patch

=====================================================================
https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
Install the PostCSS syntax for the language you want to validate into your workspace, e.g. postcss-scss.
yarn add postcss-scss

Configure Stylelint to use the syntax by providing the module name in the customSyntax option using overrides (or use the corresponding option in this extension's settings).

Example Stylelint config:

module.exports = {
overrides: [
{
files: ["**/*.scss"],
customSyntax: "postcss-scss"
}
]
};
--- пока не получилось

---

проверка кода с Eslint

```
yarn lint
```

D:\R\p4.uazdao\src\components\BookMultiverse\BookMultiverse.jsx
68:29 error Irregular whitespace not allowed no-irregular-whitespace
84:40 error Irregular whitespace not allowed no-irregular-whitespace
132:57 error Irregular whitespace not allowed no-irregular-whitespace

Искин:  
Используйте автоматическую очистку кода:

Настройте ESLint, чтобы он автоматически исправлял такие проблемы при сохранении. Добавьте в settings.json вашего VS Code:

Добавить настройки в settings.json в Visual Studio Code можно следующим образом:

Откройте настройки VS Code:

Нажмите Ctrl+, (или Cmd+, на Mac).
В правом верхнем углу окна нажмите на значок с изображением файла (Open Settings (JSON)).
Откройте файл settings.json:

Нажав на значок, вы откроете файл settings.json, где хранятся настройки редактора.
Добавьте нужные настройки: Вставьте следующий блок в файл settings.json:

json
Копировать код
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
}
Сохраните файл:

## Нажмите Ctrl+S (или Cmd+S), чтобы сохранить изменения.

D:\R\p4.uazdao\src\components\BookMultiverse\BookMultiverse.jsx
68:29 error Irregular whitespace not allowed no-irregular-whitespace

Искин:
Найдите и удалите неправильные пробелы:

В VS Code выполните поиск по регулярному выражению:
css
Копировать код
[^\S\r\n\u0020]
Это выделит все пробелы, отличные от стандартного.

---

stylelint БЭМ

https://www.npmjs.com/package/stylelint-selector-bem-pattern

Искин:
Установите пакет: Выполните установку через Yarn:

bash
Копировать код
yarn add stylelint-selector-bem-pattern --dev
Обновите ваш .stylelintrc.json: Внесите изменения в файл .stylelintrc.json, добавив настройки для плагина:

json
Копировать код
{
"extends": "stylelint-config-standard-scss",
"plugins": [
"stylelint-selector-bem-pattern"
],
"rules": {
"plugin/selector-bem-pattern": {
"preset": "bem",
"componentSelectors": {
"initial": "^\\.{component}(?:\_\_[-\\w]+)?(?:--\\w+)?$",
                "combined": "^\\.combined-{component}-[a-z]+$"
}
}
}
}

---

не срабатывает автоформатирование при сохранении scss.
как настроить?

Искин:
Для настройки автоформатирования SCSS при сохранении в Visual Studio Code, выполните следующие шаги:

1. Установите необходимые расширения
   Установите расширение Prettier - Code formatter:
   Откройте Extensions (Ctrl+Shift+X), найдите Prettier и установите.
   (Опционально) Установите stylelint и его интеграцию с VS Code, если хотите lint-ить SCSS.
2. Настройте автоформатирование SCSS
   Откройте файл настроек VS Code (Ctrl+,) и перейдите в settings.json через значок файла в правом верхнем углу.
   Добавьте настройки для автоформатирования SCSS:
   json
   Копировать код
   {
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   "[scss]": {
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   "editor.formatOnSave": true
   },
   "editor.formatOnSave": true
   }

---

variables in scss:

vite.config.js:

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNormalize from 'postcss-normalize';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        historyApiFallback: true, // for React Router
    },
    css: {
        postcss: {
            plugins: [
                postcssNormalize(), // for normalize.css
            ],
        },
        preprocessorOptions: {
            scss: {
                additionalData: `@use '/src/styles/variables.scss' as *;`,
            },
        },
    },
});
```

---

перевести на typescript

https://ru.legacy.reactjs.org/docs/static-type-checking.html

Искин:
yarn add -D typescript @types/react @types/react-dom

Отредактируйте tsconfig.json, добавив минимальные настройки для React:

json
Копировать код
{
"compilerOptions": {
"strict": true,
"jsx": "react-jsx",
"moduleResolution": "node",
"target": "esnext",
"module": "esnext",
"esModuleInterop": true
},
"include": ["src"],
"exclude": ["node_modules"]
}

---

yarn add -D prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-config-prettier

Вот обновлённый файл eslint.config.js с интеграцией Prettier:

javascript
Копировать код
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
{ ignores: ['dist'] },
{
files: ['**/*.{js,jsx,ts,tsx}'],
languageOptions: {
ecmaVersion: 2020,
globals: globals.browser,
parserOptions: {
ecmaVersion: 'latest',
ecmaFeatures: { jsx: true },
sourceType: 'module',
},
},
settings: { react: { version: '18.3' } },
plugins: {
react,
'react-hooks': reactHooks,
'react-refresh': reactRefresh,
prettier: prettierPlugin,
},
rules: {
...js.configs.recommended.rules,
...react.configs.recommended.rules,
...react.configs['jsx-runtime'].rules,
...reactHooks.configs.recommended.rules,
...prettier.rules, // Отключение конфликтующих правил ESLint
'prettier/prettier': 'error', // Включение проверки Prettier как ошибки
'react/jsx-no-target-blank': 'off',
'react-refresh/only-export-components': [
'warn',
{ allowConstantExport: true },
],
},
},
];

Изменения:
Добавлены Prettier конфигурации:

eslint-config-prettier отключает конфликтующие правила ESLint.
eslint-plugin-prettier добавляет проверку Prettier.
Обновлены files:

Теперь ESLint проверяет .ts и .tsx файлы.
Правило prettier/prettier:

Добавляет проверку форматирования Prettier как правило ESLint.
Установка новых зависимостей: Выполните команду для установки зависимостей:

bash
Копировать код
yarn add -D eslint-config-prettier eslint-plugin-prettier
Теперь ваш ESLint настроен для работы с Prettier и TypeScript.


----
Remove-Item -Recurse -Force .\node_modules\.vite
yarn dev
---
Перезапустите TypeScript сервер в VS Code Иногда проблемы вызваны кешированием. Чтобы перезапустить сервер TypeScript в VS Code:

Нажмите Ctrl+Shift+P → Введите TypeScript: Restart TS Server.
-------------------------


Ошибка Parsing error: The keyword 'interface' is reserved возникает из-за конфликта конфигурации ESLint. В данном случае проблема, скорее всего, связана с тем, что ESLint настроен на работу с JavaScript, но не с TypeScript.

Решение:
Убедитесь, что ESLint поддерживает TypeScript Проверьте, что установлены необходимые зависимости:

bash
Копировать код
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
Обновите конфигурацию ESLint В файле eslint.config.js добавьте поддержку TypeScript. Вот пример:

javascript
Копировать код
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
    },
  },
];
Перезапустите ESLint После обновления конфигурации перезапустите ESLint, чтобы он применил новые настройки:

bash
Копировать код
yarn eslint .
Перезапустите сервер TypeScript В VS Code выполните команду:

Нажмите Ctrl+Shift+P → Введите TypeScript: Restart TS Server.

--------------

Ошибка Cannot find module './SentenceItem.module.scss' возникает, потому что TypeScript не знает, как интерпретировать файлы .scss. Чтобы исправить это, необходимо создать декларацию типов для .scss файлов.


Я добавлю декларацию для .scss модулей и внесу необходимые изменения в вашем проекте. Вот обновлённые файлы и настройки:

1. Создание декларации для SCSS модулей
Добавьте файл global.d.ts в папку src. Его содержимое:

typescript
Копировать код
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const content: { [key: string]: any };
  export default content;
}
2. Обновление tsconfig.json
Ваш файл tsconfig.json уже настроен почти корректно. Я просто убедился, что он поддерживает декларации типов. Вот исправленный файл:

json
Копировать код
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./src"],
    "moduleResolution": "node",
    "baseUrl": "./src",
    "strict": true,
    "jsx": "react-jsx",
    "target": "esnext",
    "module": "esnext",
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
3. Перезапуск TypeScript сервера
Перезапустите TypeScript сервер в VS Code:

Нажмите Ctrl+Shift+P → Введите TypeScript: Restart TS Server.

------------------------
проблема с дексларацией типов для React Router:

yarn add -D @types/react-router-dom

Когда вы устанавливаете @types/react-router-dom через yarn add -D, система автоматически подбирает версию типов, соответствующую установленной версии react-router-dom. 

--------------------------------
2. Как выглядит aria-label
Атрибут aria-label используется для описания назначения интерактивного элемента (например, ссылки) для пользователей, использующих вспомогательные технологии (экранные дикторы).

Ваш пример:

tsx
Копировать код
<a
  href="https://author.today/u/semiurg/works"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Перейти на страницу автора Павла Иевлева на сайте Author.today"
>
  Павел Иевлев
</a>
Визуально для обычных пользователей:

Текст ссылки "Павел Иевлев" будет виден на странице.
aria-label не отображается визуально, но экранные дикторы прочитают его вместо содержимого ссылки, что делает навигацию более понятной для людей с ограниченными возможностями.
С технической точки зрения:

Если текст внутри тега <a> и aria-label отличаются, экранный диктор использует именно текст из aria-label. Например, если текст ссылки был бы просто "Автор", но с aria-label он бы описывался как "Перейти на страницу автора Павла Иевлева на сайте Author.today", то диктор прочитал бы полное описание.
Проверка работы:

Вы можете протестировать aria-label с помощью инструментов для тестирования доступности, например:
Lighthouse в Google Chrome.
Экранный диктор в Windows (NVDA) или VoiceOver на macOS.
Итог: aria-label значительно улучшает доступность вашего приложения, делая интерфейс понятным для всех пользователей.

-------------------
![](_md_img/flow_images/flow%202024-12-27-15-25-54.png)
На изображении видно, что Prettier/Eslint выдает предупреждение о лишнем символе переноса строки (CR, Carriage Return). Это может произойти, если файл использует неподходящий формат окончания строк.
Искин:
Решение
Исправление через Prettier:

В файле .prettierrc или в настройках Prettier укажите:
json
Копировать код
{
  "endOfLine": "lf"
}
Сохраните файл. Prettier автоматически преобразует окончания строк в LF.
Исправление вручную в VSCode:

В нижнем правом углу VSCode найдите статус окончания строк (обычно CRLF).
Нажмите на него и выберите LF.
Сохраните файл.
----
 так я пишу на виндовс и все так и должно быть
Искин:
Вы правы, Windows по умолчанию использует CRLF (Carriage Return и Line Feed) для окончания строк, и это нормально. Однако в большинстве современных проектов, особенно если они ориентированы на совместимость с Unix-системами (например, Linux-серверами или macOS), часто используется формат LF (только Line Feed). Проблема возникает, потому что Prettier или ESLint настроены на ожидание LF, а ваш файл использует CRLF.
=========================================

