
"use strict";

global.$ = {
	gulp: require("gulp"),
	del: require("del"),
	minifyjs: require("gulp-js-minify"),
	gp: require("gulp-load-plugins")(),
	bs: require("browser-sync").create(),
	path: {
		tasks: require("./gulp/config/tasks.js")
	}
}

$.path.tasks.forEach((tasksPath) => {
	require(tasksPath)();
});


$.gulp.task("default", $.gulp.series(
	$.gulp.series("clean"),
	$.gulp.series("copy"),
	$.gulp.parallel("pug", "less", "scripts", "img", "fonts"),
	$.gulp.parallel("css:libs", "scripts:libs"),
	$.gulp.parallel("watch", "serve"),
));
