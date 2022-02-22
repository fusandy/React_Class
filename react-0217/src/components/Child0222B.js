// 子元件的內部狀態如何傳給父元件
import { useState } from 'react';

function Child0222B(props) {
  // 驗證Parent0222傳來的setData是什麼
  console.log(props);
  // ChildB的內部狀態
  // Parent傳過來的props為一個setData function
  const [childBData, setChildBData] = useState('ChildB Data');

  return (
    <>
      <h2>ChildB子元件</h2>
      <button
        onClick={() => {
          props.setData(childBData);
        }}
      >
        送資料回Parent
      </button>
    </>
  );
}

export default Child0222B;
