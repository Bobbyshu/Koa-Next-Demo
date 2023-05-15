<!--
 * @Author: Bobby Shu shu.yun@northeastern.edu
 * @Date: 2023-05-15 11:11:21
 * @LastEditors: Bobby Shu shu.yun@northeastern.edu
 * @LastEditTime: 2023-05-15 11:11:54
 * @FilePath: \Project-Web\nextjs-blog\posts\pre-rendering.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: Bobby Shu shu.yun@northeastern.edu
 * @Date: 2023-05-15 11:11:21
 * @LastEditors: Bobby Shu shu.yun@northeastern.edu
 * @LastEditTime: 2023-05-15 11:11:51
 * @FilePath: \Project-Web\nextjs-blog\posts\pre-rendering.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.