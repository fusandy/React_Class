function ProductItem(props) {
  // Product
  // {
  //     id:1,
  //     name: 'Shirt',
  //     category: 'Cotton T-shirt',
  //     image:'https://i.imgur.com/1GrakTl.jpg',
  //     price:44.00,
  // }

  // const { name, category, image, price, counts, setCounts } = props;

  // 陣列物件的寫法
  const { name, category, image, price, count, setCount, handleDelete } = props;
  return (
    <>
      <div className="card mb-2">
        <div className="row">
          <div className="row main align-items-center">
            <div className="col-2 ">
              <img className="img-fluid" alt="img" src={image} />
            </div>
            <div className="col">
              <div className="row text-muted">{category}</div>
              <div className="row">{name}</div>
            </div>
            <div className="col">
              <a
                href="#/"
                onClick={() => {
                  count === 1 ? setCount(count) : setCount(count - 1);
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {count}
              </a>
              <a
                href="#/"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </a>
            </div>
            <div className="col">
              $ {price}
              <span className="close" onClick={handleDelete}>
                &#10005;
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductItem;
