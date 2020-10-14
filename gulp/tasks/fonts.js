module.exports = function () {
	$.gulp.task("fonts", function () {
		return $.gulp.src("src/static/fonts/**/*.{woff,woff2,ttf,eot,}")
			.pipe($.gulp.dest("build/fonts/"))
			.pipe($.bs.reload({
				stream: true
			}))
	});
}