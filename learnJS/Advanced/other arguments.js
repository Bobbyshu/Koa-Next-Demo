/*
 * @Author: Bobby Shu shu.yun@northeastern.edu
 * @Date: 2023-05-18 13:51:18
 * @LastEditors: Bobby Shu shu.yun@northeastern.edu
 * @LastEditTime: 2023-05-18 13:54:15
 * @FilePath: \learnJS\Advanced\destructuring.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function config(baseURL, ...other) {
  console.log(baseURL); // get baidu.com
  // will get a real array
  console.log(other); // get ['get', 'json']
}
config('baidu.com', 'get', 'json')
