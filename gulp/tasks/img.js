module.exports = function () {
	$.gulp.task("img", function () {
		return $.gulp.src("src/static/img/**/*.{png,jpg,jpeg,svg,webp,ico,gif}")
			.pipe($.gulp.dest("build/img/"))
			.pipe($.bs.reload({
				stream: true
			}))
	});
}