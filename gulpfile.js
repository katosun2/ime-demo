/*!
* 配置0.0.1
*
* Creator: Ryu
* https://www.npmjs.com/package/
*/

/*node_modules 目录*/
var nodeModules = './node_modules/';

/*备用插件列表*/
var gulp = require(nodeModules + 'gulp');
var sass = require(nodeModules + 'gulp-sass');
/*出错终断处理补丁*/
var plumber = require(nodeModules + 'gulp-plumber');
var notify = require(nodeModules + 'gulp-notify');

/*默认任务*/
gulp.task('default', ['debug-build'], function() {
	gulp.watch(['sass/ime.scss']).on('change', function(){
		gulp.run('debug-build');
	});
});

gulp.task('debug-build', function(){
	return gulp.src(['./sass/ime.scss'])
		.pipe(plumber({
			errorHandler: notify.onError({
				title: 'gulp sass error',
				message: 'Error: <%= error.message %>'
			})
		}))
		.pipe(sass({
			outputStyle: 'expanded'
			/*outputStyle: 'compressed'*/
		}))
		.pipe(gulp.dest('./css'));
});
