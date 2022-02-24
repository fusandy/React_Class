// 0224 課堂: 多個表單元素共用一個狀態
import React, { useState } from 'react';

function InputObjectState() {
  // 使用物件當初始值切勿寫: useState({}) or useState(null)
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    agree: false,
    likeList: [],
  });

  // checkbox group
  const musicOptions = ['hiphop', 'jazz', 'R&B'];

  const handleChange = (e) => {
    // 1. 從原本的狀態物件上拷貝出一個新物件
    // 2. 在拷貝的新物件上處理
    console.log('e.target.type:', e.target.type);
    console.log('e.target.name:', e.target.name);
    console.log('e.target.value:', e.target.value);

    // 多選checkbox
    if (e.target.name === 'likeList') {
      const newLikeList = data.likeList.includes(e.target.value)
        ? data.likeList.filter((v, i) => v !== e.target.value)
        : [...data.likeList, e.target.value];

      setData({ ...data, likeList: newLikeList });
      // 跳出handleChange函示
      return;
    }

    // 單選checkbox因為是判斷checked的true/false，故需另外寫e.target.type判斷才能合併應用在handleChange裡面
    const newValue =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    // "合併merge"原有物件值的語法
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    // [e.target.name] => ES6 動態計算屬性名稱
    const newData = { ...data, [e.target.name]: newValue };

    // 3. 設定回狀態
    setData(newData);
  };

  return (
    <>
      <h2>文字輸入框</h2>
      <label>姓名</label>
      <input
        type="text"
        name="fullname"
        value={data.fullname}
        onChange={handleChange}
      />
      <br />
      <label>電話</label>
      <input
        type="text"
        name="phone"
        value={data.phone}
        onChange={handleChange}
      />
      <br />
      <input
        type="checkbox"
        name="agree"
        checked={data.agree}
        onChange={handleChange}
      />
      <label>我同意會員註冊條款</label>
      <br />
      <p>Choose the music style you like.</p>
      {musicOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              name="likeList"
              value={v}
              checked={data.likeList.includes(v)}
              onChange={handleChange}
            />
            <label>{v}</label>
          </div>
        );
      })}
    </>
  );
}

export default InputObjectState;
