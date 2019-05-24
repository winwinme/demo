import $ from 'jquery';
import '../css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'


class Person {
  // static info = { name: 'win', age: '31'};// 定义静态属性
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  toString() {
    return `${this.name}:${this.age}`;
  }
}


var pp = new Person('win', '31');
console.log('静态属性：',pp.toString())

$(function() {
  $('#list li:even').css('backgroundColor','hotpink');
  $('#list li:odd').css('background', 'pink');

  let a = 'hello webpack';
  document.getElementById('myDiv').innerText = a;
  console.log('这是webpack打包的入口文件');

  if (module.hot) {
    // 实现热更新
    module.hot.accept();
  }
});
