// 0221 課堂: homework1
import { useState } from 'react';

function Menu() {
  // 將選單項目建立成array
  const menuItems = ['首頁', '關於我們', '產品'];

  // -1 代表最初的狀態，陣列中沒有任何一個被選中
  // useState()中的初始狀態內容，會依據資料型態不同而不同
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <ul>
      {menuItems.map((value, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              setActiveIndex(index);
            }}
          >
            <a href="#" className={activeIndex === index ? 'active' : ''}>
              {value}
            </a>
          </li>
        );
      })}
    </ul>
  )
}

export default Menu;
