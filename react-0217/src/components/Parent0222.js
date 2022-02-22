// 父元件與子元件的三種資料傳遞方式
import { useState } from 'react';
import Child0222A from './Child0222A';
import Child0222B from './Child0222B';

function Parent0222() {
  // 傳遞父元件內部狀態給ChildA
  const [pData, setPData] = useState('Parent Data');
  // callback function取得ChildB內部的資料狀態
  const [data, setData] = useState('');

  return (
    <>
      <h2>Parent</h2>
      <p>來自ChildB資料:{data}</p>
      <Child0222B setData={setData} />
      <Child0222A pData={pData} />
      
      {/* 子元件間透過父元件傳遞資料 */}
      {/* <Child0222A data={data} /> */}
    </>
  );
}

export default Parent0222;
