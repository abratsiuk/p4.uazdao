
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
New-Item -ItemType Directory -Name "./src/component/utils"                                             
New-Item -ItemType Directory -Name "./src/layout"
New-Item -ItemType Directory -Name "./src/pages" 
New-Item -ItemType Directory -Name "./src/services"

/*
clear file manually:
.\src\App.css
.\src\index.css
.\src\App.jsx

add:
.\src\flow.md
.\src\services\api.js
config.js
.\src\component\Preloader.jsx
.\src\component\Search.jsx
.\src\layout\Footer.jsx
.\src\layout\Header.jsx
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
New-Item -ItemType Directory -Name "./src/component/utils"                                             
New-Item -ItemType Directory -Name "./src/layout"
New-Item -ItemType Directory -Name "./src/pages" 
New-Item -ItemType Directory -Name "./src/services"

/*
clear file manually:
.\src\App.css
.\src\index.css
.\src\App.jsx

add:
.\src\flow.md
.\src\services\api.js
config.js
.\src\component\Preloader.jsx
.\src\component\Search.jsx
.\src\layout\Footer.jsx
.\src\layout\Header.jsx
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