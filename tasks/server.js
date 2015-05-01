module.exports = function(gulp, $, config, browserSync, runSequence) {

  var reload = browserSync.reload;

 /**
  * Serve
  */
  gulp.task('serve', ['default'], function () {
    browserSync({
      server: {
        baseDir: [config.app.basedir],
      },
      open: false,
      notify: false
    });
    gulp.watch([
      config.assets + '**/*.html',
    ], function() {
      runSequence(reload);
    });
  });

}
