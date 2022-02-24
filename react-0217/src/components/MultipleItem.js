// 0222 課堂: 多樣商品的狀態使用陣列作處理
// 多樣商品的狀態使用陣列作處理
import { array } from 'prop-types';
import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Brown T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: 'White T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: 'Black T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 500,
  },
  {
    id: 4,
    name: 'Black T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 100,
  },
  {
    id: 5,
    name: 'White T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 600,
  },
];

// 動態設置初始化狀態
const initState = (array) => {
  const state = [];
  for (let i = 0; i < array.length; i++) {
    state.push(1);
  }
  return state;
};

function MultipleItem() {
  // 用陣列設定多樣商品的狀態
  // 1 代表每樣商品初始值各買一個
  const [counts, setCounts] = useState(initState(products));

  // 取得初始值的totalAmount
  const totalAmount = () => {
    let tAmount = 0;
    for (let i = 0; i < counts.length; i++) {
      tAmount += counts[i];
    }
    return tAmount;
  };

  // 取得初始值的totalPrice
  const totalPrice = () => {
    let tPrice = 0;
    for (let i = 0; i < counts.length; i++) {
      tPrice += counts[i] * products[i].price;
    }
    return tPrice;
  };

  // 把計數器改成函式方便重複利用
  const setCount = (newCount, i) => {
    // step1 拷貝原狀態
    const newCounts = [...counts];
    // step2 拷貝出的陣列作處理
    newCounts[i] = newCount;
    // step3 設定回狀態
    setCounts(newCounts);
  };

  return (
    <>
      <h4>Total Amount: {totalAmount()}</h4>
      <h4>Total Price: {totalPrice()}</h4>
      <hr />

      {products.map((v, i) => {
        return (
          <React.Fragment key={v.id}>
            <h5>
              Product: {v.name} / {v.price}
            </h5>
            <button
              onClick={() => {
                setCount(counts[i] - 1, i);
              }}
            >
              -
            </button>
            <p>Amount: {counts[i]}</p>
            <button
              onClick={() => {
                setCount(counts[i] + 1, i);
              }}
            >
              +
            </button>
          </React.Fragment>
        );
      })}
    </>
  );
}
export default MultipleItem;
