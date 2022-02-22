// 父元件傳遞props給子元件
function Child0222A(props) {
  return (
    <>
      <h2>ChildA子元件</h2>
      <p>來自Parent的資料: {props.pData}</p>
      {/* 子元件間透過父元件傳遞資料 */}
      {/* <p>來自ChildB的資料: {props.data}</p> */}
    </>
  );
}

export default Child0222A;
