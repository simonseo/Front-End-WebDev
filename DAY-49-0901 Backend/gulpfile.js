var gulp = require("gulp");
var uglify = require("gulp-uglify");



gulp.task("hello", function() {
	return console.log("hello gulpworld");
});

gulp.task("gulpworld", ["hello"], function() {
	return console.log("gulpworld");
});

gulp.task("uglify", function() {
	return gulp.src("public/src/*.js").pipe(uglify()).pipe(gulp.dest("/public/dist/"));
});

gulp.task("watch", function() {
	gulp.watch("public/src/*.js", ["uglify"]);
});


gulp.task("default", ["uglify"], function() {
	return
});
