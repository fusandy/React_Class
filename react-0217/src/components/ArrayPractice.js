import { useState } from 'react';

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
];

function ArrayPractice() {
  const [data, setData] = useState(objArray);

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <p>呈現資料</p>
      <table border="1">
        {data.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.text}</td>
            </tr>
          );
        })}
      </table>
      <hr />
      <button
        onClick={() => {
          setData(objArray);
        }}
      >
        回到預設值
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中
          const newObj = { id: 99, text: 'xxx' };

          //1 //2
          const newData = [newObj, ...data];

          //3
          setData(newData);
        }}
      >
        陣列最前面新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' };

          //1 //2
          const newData = [...data, newObj];

          //3
          setData(newData);
        }}
      >
        陣列最後面新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newArray = objArray.filter((v, i) => {
            return v.text.includes('a');
          });
          console.log(newArray);

          setData(newArray);
        }}
      >
        尋找(過濾)只呈現所有文字有a字母的
      </button>
      <br />
      <button
        onClick={() => {
          const newArray = objArray.filter((v, i) => {
            return v.text !== 'b';
          });
          console.log(newArray);

          setData(newArray);
        }}
      >
        刪除文字為b的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newArray = objArray.filter((v, i) => {
            return v.id !== 99;
          });
          console.log(newArray);
          setData(newArray);
        }}
      >
        刪除id為99的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 先尋找條件有沒有存在
          const index = data.findIndex((v, i) => {
            return v.id === 2;
          });
          if (index > -1) {
            const newObj = { id: 5, text: 'bbb' };
            const newArray = [
              ...data.slice(0, index + 1),
              newObj,
              ...data.slice(index + 1),
            ];
            setData(newArray);
          }

          //   const ObjArray1 = objArray.slice(0, 2);
          //   const ObjArray2 = objArray.slice(2);
          //   console.log(ObjArray1);
          //   console.log(ObjArray2);

          //   const newArray = [...ObjArray1, newObj, ...ObjArray2];
          //   console.log(newArray);
        }}
      >
        在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 先尋找條件有沒有存在
          const index = data.findIndex((v, i) => {
            return v.id === 3;
          });
          if (index > -1) {
            // 尋找到後進行三步驟
            const newArray = [...data];
            newArray[index].text = 'cccc';
            setData(newArray);
          }
        }}
      >
        取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          // 拉出所有的id值，找出其中的最大值Math.max()
          // 也可以用uuid函式庫 or 時間毫秒值
          const ids = data.map((v, i) => {
            return v.id;
          });
          console.log(ids);
          const newID = Math.max(...ids) + 1;
          const newObj = { id: newID, text: 'xxx' };
          const newArray = [newObj, ...data];
          console.log(newArray);
          setData(newArray);
        }}
      >
        陣列最前面新增一個物件值id不重覆與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const ids = data.map((v, i) => {
            return v.id;
          });
          console.log(ids);
          const newID = Math.max(...ids) + 1;
          const newObj = { id: newID, text: 'yyy' };
          const newArray = [...data, newObj];
          console.log(newArray);
          setData(newArray);
        }}
      >
        陣列最後面新增一個物件值id不重覆與文字為yyy的物件
      </button>
    </>
  );
}

export default ArrayPractice;
