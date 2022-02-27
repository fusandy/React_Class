// 0224 課堂: 表單驗證完成版
import { useState } from 'react';
import CheckBox from './CheckBox';
import RadioButton from './RadioButton';

function FormValidate() {
  const genderOptions = ['male', 'female'];
  const colorOptions = ['white', 'black', 'blue', 'red', 'yellow', 'green'];

  // Input State
  const [fields, setFields] = useState({
    account: '',
    password: '',
    email: '',
    gender: '',
    likeList: [],
  });

  // Error Message State
  const [fieldsError, setFieldsErrors] = useState({
    account: '',
    password: '',
    email: '',
  });

  // 表單發生改變時，改變fields的state
  const handleFieldChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const value = e.target.value;

    let newValue = value;
    if (type === 'checkbox') {
      newValue = fields[name].includes(value)
        ? fields[name].filter((v, i) => v !== value)
        : [...fields[name], value];
    }

    const updatedFields = { ...fields, [name]: newValue };
    setFields(updatedFields);
  };

  // 當account, password, email三欄檢查時有不合規的值時，改變fieldsError的state
  const handleFormInvalid = (e) => {
    e.preventDefault();

    const updatedFieldErrors = {
      ...fieldsError,
      [e.target.name]: e.target.validationMessage,
    };
    console.log(updatedFieldErrors);
    setFieldsErrors(updatedFieldErrors);
  };

  // 當使用者在更改表單的輸入時，改變fieldsError的state
  const handleFormChange = (e) => {
    const updatedFieldErrors = { ...fieldsError, [e.target.name]: '' };
    setFieldsErrors(updatedFieldErrors);
  };

  // 表單符合HTML5驗證案出提交時
  const handleSubmit = (e) => {
    e.preventDafault();

    const formData = new FormData(e.target);
    console.log(formData.get('username'));
    console.log(formData.get('email'));
    console.log(formData.get('password'));
    console.log(formData.get('gender'));
    // 獲取同名稱的checkbox
    console.log(formData.getAll('likeList'));

    // 作驗証

    // 驗証成功，用fetch或ajax送到伺服器
  };

  return (
    <>
      <h1>HTML5 表單驗證</h1>
      <form
        onSubmit={handleSubmit}
        onInvalid={handleFormInvalid}
        onChange={handleFormChange}
      >
        <label>Account:</label>
        <input
          type="text"
          name="account"
          value={fields.account}
          onChange={handleFieldChange}
          required
        />
        {fieldsError.account !== '' && (
          <div className="error">{fieldsError.account}</div>
        )}
        <br />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="8"
        />
        {fieldsError.password !== '' && (
          <div className="error">{fieldsError.password}</div>
        )}
        <br />

        {/* ToDo : 0225 確認密碼欄位 */}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        {fieldsError.email !== '' && (
          <div className="error">{fieldsError.email}</div>
        )}
        <br />
        <label>Gender:</label>
        {genderOptions.map((v, i) => {
          return (
            <RadioButton
              key={i}
              name="gender"
              value={v}
              checkedValue={fields.gender}
              handleFieldChange={handleFieldChange}
            />
          );
        })}
        <br />
        <label>Favorite Color:</label>
        {colorOptions.map((v, i) => {
          return (
            <CheckBox
              key={i}
              name="likeList"
              value={v}
              onChange={handleFieldChange}
              checked={fields.likeList.includes(v)}
            />
          );
        })}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormValidate;
