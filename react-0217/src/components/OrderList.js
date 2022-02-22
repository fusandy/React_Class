// import React from 'react';
import ProductItem from './ProductItem';

function OrderList(props) {
  // counts is an array
  const { products, counts, setCounts, totalAmount } = props;
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>Shopping Cart</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              {totalAmount} items
            </div>
          </div>
        </div>
        {products.map((v, i) => {
          return (
            <ProductItem
              key={v.id}
              name={v.name}
              categroy={v.categroy}
              price={v.price}
              image={v.image}
              counts={counts[i]}
              setCounts={(newCount) => {
                // 先複製原本的counts array
                const newCounts = [...counts];
                console.log(newCounts);
                // 從子元件傳回的newCount作正負數判斷
                newCounts[i] = newCount < 1 ? 1 : newCount;
                console.log(newCounts);
                // 將新的counts array設定回狀態
                setCounts(newCounts);
              }}
            />
          );
        })}

        <div className="back-to-shop">
          <a href="#/">&#x02190;</a>
          <span className="text-muted">Back to shop</span>
        </div>
      </div>
    </>
  );
}

export default OrderList;
