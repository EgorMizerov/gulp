# gulp

## Архитектура
<hr>
<a href="https://github.com/EgorMizerov/gulp/app/">app/</a><br>
├── <a href="https://github.com/EgorMizerov/gulp/app/css">css</a> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp| Папка для CSS<br>
├── <a href="https://github.com/EgorMizerov/gulp/app/images">images/</a>&nbsp&nbsp | Папка для изображений<br>
├──── <a href="https://github.com/EgorMizerov/gulp/app/images/dest">dest</a>&nbsp&nbsp | Изоброжения<br>
├──── <a href="https://github.com/EgorMizerov/gulp/app/images/src">src</a>&nbsp&nbsp&nbsp&nbsp | Исходники<br>

├── <a href="https://github.com/EgorMizerov/gulp/app/js">js</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Папка для JS<br>
├── <a href="https://github.com/EgorMizerov/gulp/app/sass">sass</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Папка для Sass<br>

## Установка
<hr>

1. Скачать Git и Node.js<br>
https://git-scm.com/downloads<br>
https://nodejs.org/en/

2. Установить репозиторий
```
git clone https://github.com/EgorMizerov/gulp.git
```
3. Установка необходимых пакетов

```
cd gulp
npm install
```
### Запуск
```
gulp
```

## Комманды
<hr>

```
gulp styles - Сборка sass файлов в app.min.css
gulp scripts - Сборка js файлов в app.min.js
gulp images - Сжатие изображений из src в dest
gulp build - Сборка проекта из app в dist

```

## Интсрукция
<hr>
Всё sass файлы создавать в директории app/sass<br>
Все js файлы создовать в директории app/js<br>
Все картинки создовать в директории app/images/src<br><br>

Комманда "gulp" запукает сборку всех js файлов в app.min.js. Псоле интерпритирует sass файлы css и собирает их в файле app.min.css. Далее запускает локальный сервер для проекта и начинает слушать обновления файлов.

После того, как вы измените какой-то из js, sass или html файлов, они автомотически соберутся в одноимённые сборки и обновят ваш локальный сервер.

Если ваш проект готов и вы хотите получить все сборки в одном месте, то запустите комманду "gulp build" и зайдите в директорию dist
