var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var shell = require("gulp-shell");
var runSequence = require("run-sequence");

gulp.task("serve", function(cb){
    runSequence('nodemon', cb);   
});



gulp.task("nodemon", function(){
    return nodemon({ script: 'server.js'
          , ext: 'html js'})
    .on('restart', function () {
      console.log('restarted!')
    })
})

gulp.task('mongod', shell.task([
  'mongod'
]))