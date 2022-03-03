// Query String版本
import React from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../data/product';

function ProductDetailQS(props) {
  // 利用useLocation勾子，location.search尋找網址的字串 ex."id=2&name=hello"
  const location = useLocation();
  console.log(location.search);

  // 拿到之後再利用URLSearchParams將網址字串解析成物件
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const product = data.find((v, i) => v.id === id);
  return (
    <>
      <h1>Product Detail - Query String</h1>
      <p>id={id}</p>
      {product && (
        <h5>
          {product.name} / {product.price}
        </h5>
      )}
    </>
  );
}

export default ProductDetailQS;
