/*
 * @Author: Bobby Shu shu.yun@northeastern.edu
 * @Date: 2023-05-18 13:46:25
 * @LastEditors: Bobby Shu shu.yun@northeastern.edu
 * @LastEditTime: 2023-05-18 13:49:11
 * @FilePath: \learnJS\Advanced\arguments.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
1. arguments 是一个伪数组，只存在于函数中
2. arguments 的作用是动态获取函数的实参
3. 可以通过for循环依次得到传递过来的实参
 

*/
function getSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; ++i) {
    sum += arguments[i];
  }
  return sum;
}

getSum(1, 2);
getSum(1, 2, 3);
getSum(1, 2, 3, 4);
