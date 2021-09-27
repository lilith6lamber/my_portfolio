const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.libs_style = tasks.libs_style;
exports.style = tasks.style;
exports.modules = tasks.modules;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.bs_html = tasks.bs_html;
exports.html = tasks.html;
exports.watch = tasks.watch;
exports.data = tasks.data;
exports.favicon = tasks.favicon;

exports.default = gulp.parallel(
  exports.libs_style,
  exports.modules,
  exports.style,
  exports.rastr,
  exports.webp,
  exports.bs_html,
  exports.data,
  exports.watch,
  exports.favicon,
  exports.html
)
