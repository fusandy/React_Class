// 0224 課堂: 關閉HTML5預設錯誤訊息，搜尋自訂錯誤訊息，並展示在指定位置
import React, { useState } from 'react';

function HTML5FormValidate(props) {
  const [fields, setFields] = useState({
    username: '',
    password: '',
    email: '',
  });

  // 利用狀態來存取錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleFieldChange = (e) => {
    // 1. 從原本的狀態物件上拷貝出一個新物件
    // 2. 在拷貝的新物件上處理

    // "合併"原有物件值的語法
    const newData = { ...fields, [e.target.name]: e.target.value };

    // 3. 設定回狀態
    setFields(newData);
  };

  const handleSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault();

    // 作驗証
    const formData = new FormData(e.target);
    console.log(formData.get('username'));
    console.log(formData.get('email'));
    console.log(formData.get('password'));

    // 獲取同名稱的checkbox
    //console.log(formData.getAll('likeList'))

    // 驗証成功，用fetch或ajax送到伺服器
  };

  const handleInvalid = (e) => {
    // 阻擋form的預設送出行為(錯誤泡泡訊息)
    e.preventDefault();

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    };

    // 3. 設定回錯誤訊息狀態
    setFieldErrors(updatedFieldErrors);
  };

  // 當整個表單每次有更動時會觸發
  // 認定使用者輸入某個欄位(更正某個有錯誤的欄位)
  // 清空某個欄位錯誤訊息
  const handleFormChange = (e) => {
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    };

    // 3. 設定回錯誤訊息狀態
    setFieldErrors(updatedFieldErrors);
  };

  return (
    <>
      <h1>HTML5 表單驗証</h1>
      <form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        onInvalid={handleInvalid}
      >
        <label>帳號</label>
        <input
          type="text"
          value={fields.username}
          name="username"
          onChange={handleFieldChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={fields.email}
          name="email"
          onChange={handleFieldChange}
          required
        />
        <label>密碼</label>
        <input
          type="text"
          value={fields.password}
          name="password"
          onChange={handleFieldChange}
          required
          minLength="6"
        />

        <button type="submit">提交</button>
      </form>
    </>
  );
}

export default HTML5FormValidate;
