module.exports = function () {

	$.gulp.task("css:libs", function () {
		return $.gulp.src(["node_modules/swiper/swiper-bundle.min.css"])
			.pipe($.gp.concat("libs-min.css"))
			.pipe($.gulp.dest("build/css/"))
			.pipe($.bs.reload({
				stream: true
			}))
	});

	$.gulp.task("less", function () {
		return $.gulp.src("src/static/css/main.less")
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.less())
			.pipe($.gp.autoprefixer({
				browsers: ["last 10 versions"]
			}))
			.on("error", $.gp.notify.onError({
				message: "Error: <%= error.message %>",
				title: "Less"
			}))
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest("build/css/"))
			.pipe($.gp.csso())
			.pipe($.gp.rename("main-min.css"))
			.pipe($.gulp.dest("build/css/"))
			.pipe($.bs.reload({
				stream: true
			}))
	});
}