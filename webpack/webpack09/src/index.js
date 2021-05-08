require('./style.css');
require('./common.css');


require('./print');

console.log("我是默认入口文件")


// 热更新
if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log("热更新");
    })
}
