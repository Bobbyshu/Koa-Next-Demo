/*
 * @Author: BobbyShu shu.yun@northeastern.edu
 * @Date: 2023-05-09 14:26:15
 * @LastEditors: Bobby Shu shu.yun@northeastern.edu
 * @LastEditTime: 2023-05-09 17:53:06
 * @FilePath: \Project-Web\learn.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// let a = 10;
// console.info(typeof a)
// a = 'Hello World'
// console.info(typeof a)

// console.info('10' == 10)
// console.info('10' === 10)

// all true
// console.info(!undefined)
// console.info(!null)
// console.info(!NaN)

// function f(test) {
//     test();
// }

// f(function () {
//     console.info("这是一个匿名函数")
// })

// function f(test) {
//     test("这个是回调参数");
// }

// f(param => {
//     console.info("接受到回调参数："+param)
// })

// let arr = [1, "lbwnb", false, undefined, NaN]
// arr.push("bbb")
// arr.push("ccc")
// console.info(arr)
// console.info(arr.pop())

// let arr2 = [1, "lbwnb", false, undefined, NaN]
// arr2.fill(1)
// console.info(arr2.map(o => {
//     return 'xxx'+o
// }))

// let name = "outer variable"
// let obj = {}
// obj.name = "inner variable"
// obj.f = function () {
//     console.info("attribute of name is：" + this.name)
// }
// obj.f()

function f() {
  window.alert("You are typing!");
}

let a = document.getElementById("pwd");
window.alert(a);

// limit length of password should longer than 6
function checkIllegal(e) {
  if (e.value.length < 6) {
    e.setAttribute("class", "illegal-pwd");
  } else {
    e.removeAttribute("class");
  }
}

// XHR request
// error in cross site
function http() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.baidu.com");
  xhr.send();
}
