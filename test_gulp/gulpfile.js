
var gulp = require('gulp')

var sass = require('gulp-sass')

gulp.task('sass' , function() {
    return gulp.src('app/scss/**/*.scss') // get all files ending with scss or scss in child dir
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
})

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
    // Other watchers
  })


// gulp.task('hello', function() {
//     console.log('HEllpw')
// })

// function defaultTask(cb) {
//     //place code for your task here
   
// }
// exports.default = defaultTask