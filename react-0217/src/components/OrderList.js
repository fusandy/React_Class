// 0222 課堂: 實例(購物車)
// import React from 'react';
import ProductItem from './ProductItem';

function OrderList(props) {
  // counts is an array
  // const { products, counts, setCounts, totalAmount } = props;
  // 陣列物件寫法
  const { productsInOrder, setProductsInOrder, productCount } = props;

  const handleDelete = (id) => {
    let newProductsInOrder = [...productsInOrder];
    newProductsInOrder = newProductsInOrder.filter((v, i) => {
      return v.id !== id;
    });
    setProductsInOrder(newProductsInOrder);
  };
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
              {productCount} items
            </div>
          </div>
        </div>
        {productsInOrder.map((v, i) => {
          return (
            <ProductItem
              key={v.id}
              id={v.id}
              name={v.name}
              categroy={v.categroy}
              price={v.price}
              image={v.image}
              // counts={counts[i]}
              count={v.count}
              // setCounts={(newCount) => {
              //   // 先複製原本的counts array
              //   const newCounts = [...counts];
              //   console.log(newCounts);
              //   // 從子元件傳回的newCount作正負數判斷
              //   newCounts[i] = newCount < 1 ? 1 : newCount;
              //   console.log(newCounts);
              //   // 將新的counts array設定回狀態
              //   setCounts(newCounts);
              // }}
              setCount={(newCount) => {
                const newProductsInOrder = [...productsInOrder];
                newProductsInOrder[i].count = newCount;
                setProductsInOrder(newProductsInOrder);
              }}
              handleDelete={() => {
                handleDelete(v.id);
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
