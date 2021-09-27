const {
  watch,
  parallel,
  series
} = require('gulp');

module.exports = function watching() {
  watch('src/**/*.scss', parallel('style'));
  watch('src/data/*.*', parallel('data'));
  watch('src/*.html', parallel('html'));
  watch('src/img/**/*.*', parallel('rastr'));
  watch('src/img/**/*.+(png|jpg|jpeg|gif)', series('rastr', 'webp'));
}