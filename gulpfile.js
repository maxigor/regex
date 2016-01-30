var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

    //static server
gulp.task('server', function(){
      browserSync.init({
         server: {
            baseDir: "./"
         }
      });
      gulp.watch('**/*').on('change', browserSync.reload);
});
