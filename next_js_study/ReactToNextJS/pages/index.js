/*
 * @Author: Bobby Shu shu.yun@northeastern.edu
 * @Date: 2023-05-11 14:16:05
 * @LastEditors: Bobby Shu shu.yun@northeastern.edu
 * @LastEditTime: 2023-05-11 14:33:31
 * @FilePath: \Project-Web\next_js_study\ReactToNextJS\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
function Header({ title }) {
  return <h1>{title ? title : "Default title(without inputting)"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <Header title="React 💙" />
      <Header title="A new title" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
