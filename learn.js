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
    window.alert("You are typing!")
}

let a = document.getElementById("pwd")
window.alert(a)

// limit length of password should longer than 6
function checkIllegal(e) {
    if (e.value.length < 6) {
        e.setAttribute("class", "illegal-pwd")
    } else {
        e.removeAttribute("class")
    }
}

// XHR request
// error in cross site
function http() {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://www.baidu.com')
    xhr.send()
}