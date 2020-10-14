module.exports = function () {
	$.gulp.task("watch", function () {
		$.gulp.watch("src/pug/**/*.pug", $.gulp.series("pug"));
		$.gulp.watch("src/static/css/**/*.less", $.gulp.series("less"));
		$.gulp.watch("src/static/js/scripts.js", $.gulp.series("scripts"));
		$.gulp.watch("src/static/img/**/*.{png,jpg,jpeg,svg,webp,ico,gif}", $.gulp.series("img"));
		$.gulp.watch("src/static/fonts/**", $.gulp.series("fonts"));
	});
}