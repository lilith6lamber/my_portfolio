const {
    src,
    dest
} = require('gulp');
const bs = require('browser-sync');

module.exports = function data() {
    return src('src/data/**.*')
        .pipe(dest('build/data'))
        .pipe(bs.stream())
}