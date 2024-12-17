
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

