/*
 * @Author: Bobby Shu shu.yun@northeastern.edu
 * @Date: 2023-05-18 14:20:34
 * @LastEditors: Bobby Shu shu.yun@northeastern.edu
 * @LastEditTime: 2023-05-18 14:20:50
 * @FilePath: \learnJS\Advanced\forEach.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const arr = ["red", "green", "pink"];
const result = arr.forEach(function (item, index) {
  console.log(item); // 数组元素 red  green pink
  console.log(index); // 索引号
});
