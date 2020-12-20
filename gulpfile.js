const { src, dest, parallel, series, watch } = require('gulp'); // Gulp
const browserSync = require('browser-sync').create();           // Brosersync
const concat = require('gulp-concat');                          // Concat
const uglify = require('gulp-uglify-es').default;               // Uglify
const autoprefixer = require('gulp-autoprefixer');              // Autoprefixer
const sass = require('gulp-sass');                              // Sass
const cleanCSS = require('gulp-clean-css');                     // CleanCSS
const imagemin = require('gulp-imagemin');                      // Imgaemin
const newer = require('gulp-newer');                            // Newer
const del = require('del');                                     // Del


// Запуск проекта
function browsersync() {
    browserSync.init({
        server: { baseDir: 'app/' },
        notify: false, // Выключает уведомления
        online: true, // Включает локальную сеть
    })
}

// Сборка JS файлов
function scripts() {
    return src([    // Компоненты
//         'node_modules/vue/dist/vue.min.js', // Vue.js
        'app/js/**/*.js',
        '!app/js/app.min.js',
    ])
    .pipe(concat('app.min.js')) // Конкатонация
    .pipe(uglify())             // Сжатие
    .pipe(dest('app/js/'))      // Директория выгрзуки
    .pipe(browserSync.stream()) // Перезапускает сервер
}

// Сборка Sass
function styles() {
    return src('app/scss/**/*.scss')                                                    // Исходники
    .pipe(sass())                                                                       // Интерпритирование в CSS
    .pipe(concat('app.min.css'))                                                        // Конкатонация
    .pipe(autoprefixer({ overrideBrowserslist: [' last 10 versions'], grid: true }))    // Аутопрефиксы
    .pipe(cleanCSS(({ level: {1: { specialComments: 0 }} })))                           // Отчистка CSS
    .pipe(dest('app/css/'))                                                             // Директория выгрузки
    .pipe(browserSync.stream())                                                         // Перезапускает сервер
}

// Сборка изображений
function images() {
    return src('app/images/src/**/*')   // Исходники
    .pipe(newer('app/images/dest/'))    // Проверка
    .pipe(imagemin())                   // Сжатие
    .pipe(dest('app/images/dest/'))     // Директория выгрузки
}

// Сборка приложения
function buildcopy() {
    return src([
        'app/css/**/*.min.css',
        'app/js/**/*.min.js',
        'app/images/dest/**/*',
        'app/*.html',
    ], { base: 'app' })
    .pipe(dest('dist'))
}

function cleandist() {
    return del('dist/**/*', { force: true })
}

// Обновление
function startwatch() {
    watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
    watch(['app/**/*.scss', '!app/**/*.min.css'], styles);
    watch('app/**/*.html').on('change', browserSync.reload);
    watch('app/images/src/**/*', images);
}

exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.styles      = styles;
exports.images      = images;
exports.build       = series(cleandist, styles, scripts, images, buildcopy);

// gulp
exports.default     = parallel(scripts, styles, browsersync, startwatch);
