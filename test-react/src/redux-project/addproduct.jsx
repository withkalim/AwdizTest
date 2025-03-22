import { useState } from "react";

function AddProducts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h2 style={{ marginLeft: "38%", marginRight: "40%" }}>
        Add Product you want
      </h2>
      <form style={{ marginLeft: "40%", marginRight: "40%" }}>
        <input
          type="text"
          name="productName"
          placeholder="Enter Product Name"
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          name="price"
          placeholder="Enter Product Price"
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="number"
          name="category"
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />
        <br></br>
        <button>Add Product</button>
      </form>
    </div>
  );
}
export default AddProducts;
