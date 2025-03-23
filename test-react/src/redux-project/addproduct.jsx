import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addFormData } from "./formSlice";

function AddProducts(){
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    category: '',
  });
  const forDispatch = useDispatch();
  var takeNav = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const whenUserSub = (event)=>{
    event.preventDefault();
    if (!formData.productName || !formData.price || !formData.category) return;
    forDispatch(addFormData(formData));

    alert("Products are added");

    setFormData({ productName: '', price: '', category: '' });
  }
  return (
    <div>
      <div class="button-container">
        <button class="add-to-cart" onClick={() => takeNav("/allproduct")}>
          All Products 
        </button>
        <button class="buy-now" onClick={() => takeNav("/card")}>
          Card
        </button>
      </div>

      <h2 style={{ marginLeft: "38%", marginRight: "40%" }}>
        Add Product you want
      </h2>
      <form onClick={whenUserSub}  style={{ marginLeft: "40%", marginRight: "40%" }}>
        <input
          type="text"
          name="productName"
          placeholder="Enter Product Name"
          value={formData.productName}
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          name="price"
          placeholder="Enter Product Price"
          value={formData.price}
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          name="category"
            placeholder="Enter Category"
            value={formData.category}
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
