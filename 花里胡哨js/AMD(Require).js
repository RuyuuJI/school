require.js: js文件和模块加载器
提供require()方法
{
    防止明明冲突
    声明不同js间的以来
    模块化组织
}
AMD -->Require.js
入口文件main.js->计算图形面积s.js ->Math.js
<script src="js/require.js" data-main="./js/main.js">  //入口js-->main.js
(function(){  //立即函数
require(['模块一','模块二'],function(){
})
})("勿忘此处")


CommonJS-->Node.js
module.exports = {
    分享接口1：1，
    分享接口2：2
}
//导入某块
var m = require('./js/math.js')

GULP:{
    1.安装node.js
    2.安装GULP-CLI
    3.创建package.json
    4.局部安装gulp
    5. 创建gulp.js
}
gulp.task()
gulp.src()
gulp.dest()
gulp.watch()


//-----------------------------------
webpack--->打包模块成一个