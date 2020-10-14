module.exports = function () {
	$.gulp.task("scripts:libs", function () {
		return $.gulp.src(["node_modules/jquery/dist/jquery.min.js", "node_modules/swiper/swiper-bundle.min.js", "src/static/js/lazysizes.min.js"])
			.pipe($.gp.concat("libs-min.js"))
			.pipe($.gulp.dest("build/js/"))
			.pipe($.bs.reload({
				stream: true
			}))
	});

	$.gulp.task("scripts", function () {
		return $.gulp.src("src/static/js/scripts.js")
			.pipe($.gulp.dest("build/js/"))
			.pipe($.minifyjs())
			.pipe($.gp.rename('scripts-min.js'))
			.pipe($.gulp.dest("build/js/"))
			.pipe($.bs.reload({
				stream: true
			}))
	});
}