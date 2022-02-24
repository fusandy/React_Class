// 0224 課堂: 表單驗證完成版

function CheckBox(props) {
  const { value } = props;
  return (
    <>
      <input type="checkbox" value={value} />
      <label>{value}</label>
    </>
  );
}
export default CheckBox;
