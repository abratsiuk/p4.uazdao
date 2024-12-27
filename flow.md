
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

/*
Remove-Item -Recurse -Force .yarn, .pnp.* , node_modules

Remove-Item — команда для удаления файлов и папок.
-Recurse — рекурсивное удаление всех вложенных файлов и папок.
-Force — принудительное удаление, даже если файлы скрыты или защищены.
*/

 Remove-Item -Recurse -Force ./public/*
 Remove-Item -Recurse -Force ./src/assets/*
New-Item -ItemType Directory -Name "./src/assets/image"
New-Item -ItemType Directory -Name "./src/component"        
New-Item -ItemType Directory -Name "./src/components/utils"                                             
New-Item -ItemType Directory -Name "./src/layout"
New-Item -ItemType Directory -Name "./src/pages" 
New-Item -ItemType Directory -Name "./src/services"

/*
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
*/

/* paste:

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
*/


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

по-этому файлы нужно создавать вручную и очищать вручную
========================================================================

ico files
https://icon-icons.com/search/icons/?filtro=car&page=3

---------------------

https://fontawesome.com/

<script src="https://kit.fontawesome.com/bd4e968d26.js" crossorigin="anonymous"></script>

![](_md_img/flow_images/flow%202024-12-15-19-08-23.png)
[3.1] 10 25:35

-----------------

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

/*
Remove-Item -Recurse -Force .yarn, .pnp.* , node_modules

Remove-Item — команда для удаления файлов и папок.
-Recurse — рекурсивное удаление всех вложенных файлов и папок.
-Force — принудительное удаление, даже если файлы скрыты или защищены.
*/

 Remove-Item -Recurse -Force ./public/*
 Remove-Item -Recurse -Force ./src/assets/*
New-Item -ItemType Directory -Name "./src/assets/image"
New-Item -ItemType Directory -Name "./src/component"        
New-Item -ItemType Directory -Name "./src/components/utils"                                             
New-Item -ItemType Directory -Name "./src/layout"
New-Item -ItemType Directory -Name "./src/pages" 
New-Item -ItemType Directory -Name "./src/services"

/*
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
*/

/* paste:

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
*/


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

по-этому файлы нужно создавать вручную и очищать вручную
========================================================================

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

---------------------

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

1) install normalize.css:
```
yarn add normalize.css
```
2) index.scss в начало:
```
@import 'normalize.css';
```

3) vite.config.js:
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

yarn add stylelint  --dev

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
---------------------------------------
проверка кода с Eslint
```
yarn lint
```
D:\R\p4.uazdao\src\components\BookMultiverse\BookMultiverse.jsx
   68:29  error  Irregular whitespace not allowed  no-irregular-whitespace
   84:40  error  Irregular whitespace not allowed  no-irregular-whitespace
  132:57  error  Irregular whitespace not allowed  no-irregular-whitespace

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

Нажмите Ctrl+S (или Cmd+S), чтобы сохранить изменения.
---------------------------------------

D:\R\p4.uazdao\src\components\BookMultiverse\BookMultiverse.jsx
   68:29  error  Irregular whitespace not allowed  no-irregular-whitespace

Искин:
Найдите и удалите неправильные пробелы:

В VS Code выполните поиск по регулярному выражению:
css
Копировать код
[^\S\r\n\u0020]
Это выделит все пробелы, отличные от стандартного.
---------------------------------------------   

