require('./style.css');
require('./common.css');

function add(x, y) {
  return x + y;
}

const sum = add(1, 2);

// 下面eslint所有规则无效
// eslint-disable-next-line
console.log('我是默认入口文件');
// eslint-disable-next-line
console.log(sum)

// if (module.hot) {
//   module.hot.accept('./print.js', () => {
//     // eslint-disable-next-line
//     console.log('热更新！');
//   });
// }
