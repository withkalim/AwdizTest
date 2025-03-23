import { useNavigate } from "react-router-dom";

function Card() {
    const takeNav = useNavigate();

  return (
    <div>
      <nav
        style={{
          border: "1px solid #000000",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h3 onClick={() => takeNav("/allproduct")}>All Products</h3>
        <h3 onClick={() => takeNav("/add-product")}>Add Product</h3>
      </nav>
      <h2>Card Items</h2>
    </div>
  );
}
export default Card;
