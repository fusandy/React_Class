// 0225 課堂: 函式型元件生命週期方法
import { useEffect, useState, useRef } from 'react';

// 函式型元件如何取得previosProps
// 官方函式
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function FCLifeCycle() {
  const [total, setTotal] = useState(0);
  // Version 3: 用didMount狀態來來記錄元件從無到有
  const [didMount, setDidMount] = useState(false);
  // Version 4: 利用useRef()內的有值的時候，代表已經渲染到真實的DOM的特性，來記錄元件從無到有
  const didMountRef = useRef(false);
  // Hook: How to get previos props
  // https://zh-hant.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state

  // 得到前一個total
  const prevTotal = usePrevious(total);

  // DidMount
  // 空陣列 => 元件初次render執行一次
  useEffect(() => {
    console.log('DidMount');
  }, []);

  // DidUpdate + DidMount
  // 初始化的時候也會執行一次(相依性陣列)
  useEffect(() => {
    console.log('DidMount+DidUpdate V1');
  }, [total]);

  // WillUnMount
  useEffect(() => {
    return () => {
      console.log('WillUnMount');
    };
  }, []);

  //-----Version 2------
  // 用初始值0判斷(前提是:total一旦開始不會回到初始狀態)
  // 如果有button，過程中進行加加減減，用total去判斷生命週期是不適合的
  //   useEffect(() => {
  //     if (total !== 0) console.log('DidUpdate V2');
  //     // 小心無窮迴圈
  //     //setTotal(total + 1)
  //   }, [total]);

  //-----Version 3------
  // 用didMount旗標判斷元件從無到有
  //   useEffect(() => {
  //     setDidMount(true);
  //     console.log('DidMount');
  //     console.log('didMount:', didMount);
  //   }, []);

  //   useEffect(() => {
  //     if (didMount) console.log('DidUpdate V3');
  //   }, [total]);

  //-----Version 4------
  // 利用useRef()內的有值的時候，代表已經渲染到真實的DOM的特性，來記錄元件從無到有
  useEffect(() => {
    console.log('didMountRef.current:', didMountRef.current);
    if (didMountRef.current) {
      // didUpdate
      console.log('didUpdate v4');
      // 得到前一個狀態值
      console.log('total=', total, ' previous total=', prevTotal);
    } else {
      didMountRef.current = true;
      console.log('total=', total, ' previous total=', prevTotal);
    }
  }, [total]);

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          const newTotal = total + 1;
          setTotal(newTotal);
          console.log('newTotal=', newTotal);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          const newTotal = total - 1;
          setTotal(newTotal);
          console.log('newTotal=', newTotal);
        }}
      >
        -1
      </button>
    </>
  );
}

export default FCLifeCycle;
