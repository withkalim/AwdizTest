import { useNavigate } from "react-router-dom";

function AddProducts() {
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
        <h3 onClick={() => takeNav("/add-product")}>Add Products</h3>
        <h3 onClick={() => takeNav("/card")}>Cart-</h3>
      </nav>
      <h2>Add Products </h2>
    </div>
  );
}
export default AddProducts;
