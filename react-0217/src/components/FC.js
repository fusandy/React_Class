// 0221 課堂: 邏輯判斷流程控制
import { useState } from 'react';

// FC = Functional Component
function FC() {
  // useState使用狀態(起始值=total), setTotal為控制total的function
  const [total, setTotal] = useState(0);

  const checkAndOutput = (value) => {
    if (value > 10) {
      return <p>Total is greater than ten.</p>;
    } else {
      return <p>Total is less than ten.</p>;
    }
  };

  return (
    <>
      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
      {total > 10 ? (
        <p>Total is greater than ten.</p>
      ) : (
        <p>Total is less than ten.</p>
      )}
      {/* {total > 0 && <div>總數大於0</div>} */}
    </>
  );
}

export default FC;
