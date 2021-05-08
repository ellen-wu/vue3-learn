let name = 'zhangsan';
let age = 22;

function add(x, y) {
    return x + y;
}

// 缺省导出 一个模块中，只能有一个
export default function (args) {
    console.log(args)
}

export {name, age, add};
