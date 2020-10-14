![gulp4](http://tpverstak.ru/wp-content/uploads/2018/09/7fb34ea5d33344da61d80-2.jpg)

# Сборка Gulp4

## Установка:
1. Скачать файлы с репозитория.
	`git clone adress`
2. Установить необходимые зависимости
	`npm i`

## Сборка включает в себя плагины:
1. browser-sync ("2.26.7");
2. gulp ("4.0.2");
3. gulp-autoprefixer ("7.0.1");
4. gulp-csso ("4.0.1");
5. gulp-less ("4.0.1");
6. gulp-load-plugins ("2.0.1");
7. gulp-notify ("3.2.0");
8. gulp-rename ("2.0.0");
9. gulp-sourcemaps ("2.6.5");
10. gulp-concat ("2.6.1");
11. gulp-js-minify ("0.0.3");
12. gulp-pug ("4.0.1");

## Запуск сборки:
	 `gulp`:
	* Удаление папки **build**, если существует.
	* Создание папки **build**.
	* Запуск задач по компиляции и минификации _less_, копировании и минификации _script_ и компиляция _pug_ в папку **build**.
	* Запуск _watch_ и _browser-sync_.