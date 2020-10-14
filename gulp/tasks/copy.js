module.exports = function () {
	$.gulp.task("copy", function () {
		return $.gulp.src(["src/static/.htaccess"])
			.pipe($.gulp.dest("build"))
	});
}