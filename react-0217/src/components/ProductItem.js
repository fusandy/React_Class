function ProductItem(props) {
  // Product
  // {
  //     id:1,
  //     name: 'Shirt',
  //     category: 'Cotton T-shirt',
  //     image:'https://i.imgur.com/1GrakTl.jpg',
  //     price:44.00,
  // }

  const { name, category, image, price, counts, setCounts } = props;

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
                  setCounts(counts - 1);
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {counts}
              </a>
              <a
                href="#/"
                onClick={() => {
                  setCounts(counts + 1);
                }}
              >
                +
              </a>
            </div>
            <div className="col">
              $ {price}
              <span className="close">&#10005;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductItem;
