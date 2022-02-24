// 0222 課堂: 實例(購物車)
// import React from 'react';

function Summary(props) {
  const { totalAmount, totalPrice } = props;
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
          <div className="col">TOTAL ITEMS: {totalAmount} items</div>
        </div>
        <div className="row extra-2">
          <div className="col">TOTAL PRICE: ${totalPrice}</div>
        </div>
        <button className="btn">CHECKOUT</button>
      </div>
    </>
  );
}

export default Summary;
