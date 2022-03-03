// URL Params版本
import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/product';

function ProductDetail(props) {
  // 如果路由有id，在detail頁利用useParams勾子抓取參數
  const { id } = useParams();
  console.log('id:', id);
  // 利用id，找到對應的product
  const product = data.find((v, i) => v.id === id);
  return (
    <>
      <h1>Product Detail</h1>
      <p>id={id}</p>
      {product && (
        <h5>
          {product.name} / {product.price}
        </h5>
      )}
    </>
  );
}

export default ProductDetail;
