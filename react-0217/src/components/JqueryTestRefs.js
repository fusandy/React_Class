// 0302 課堂: JqueryTestRefs
// 讀取狀態
// 設定狀態 : Click Me之後將input的value設定回total狀態
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';

function JqueryTestRefs(props) {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  const [total, setTotal] = useState(0);

  // 讀取狀態
  // didMount+didUpdate
  // addEventListener 是累加機制，而非覆蓋機制
  // didMount時先移除前事件
  //   useEffect(() => {
  //     //jquery code

  //     // 移除事件
  //     // $(buttonRef.current).off('click');

  //     // 加入新事件
  //     // $(buttonRef.current).on('click', () => {
  //     //   return alert(
  //     //     'Hello' + $(titleRef.current).text() + 'Current Total=' + total
  //     //   );
  //     // });

  //     // 設定狀態
  //     $(buttonRef.current).on('click', () => {
  //       alert('目前輸入值' + $(inputRef.current).val());
  //       // input的value是string，要轉number
  //       setTotal(Number($(inputRef.current).val()));
  //     });
  //   }, [total]);

  // 設定狀態
  // didMount
  useEffect(() => {
    //jquery code

    $(buttonRef.current).on('click', () => {
      alert('目前輸入值' + $(inputRef.current).val());
      // input的value是string，要轉number
      setTotal(Number($(inputRef.current).val()));
    });
  }, []);

  return (
    <>
      <h1 ref={titleRef}>React Using Ref</h1>
      {/* 設定狀態，React不可控 */}
      {/* Click Me之後，要設定狀態 */}
      <input type="text" ref={inputRef} defaultValue={total}></input>
      <button ref={buttonRef}>Click Me</button>
      {/* 讀取狀態 */}
      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
    </>
  );
}

export default JqueryTestRefs;
