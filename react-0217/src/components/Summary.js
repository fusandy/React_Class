// 0222 課堂: 實例(購物車)
// import React from 'react';

function Summary(props) {
  // const { totalAmount, totalPrice } = props;
  // 陣列物件的寫法
  const { productCount, total } = props;
  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>Summary</b>
          </h5>
        </div>
        <hr />
        <div className="row extra-1">
          <div className="col">TOTAL ITEMS: {productCount} items</div>
        </div>
        <div className="row extra-2">
          <div className="col">TOTAL PRICE: ${total}</div>
        </div>
        <button className="btn">CHECKOUT</button>
      </div>
    </>
  );
}

export default Summary;
