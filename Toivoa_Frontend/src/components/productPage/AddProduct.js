import { useState, useContext } from "react";
import useField from "../../hooks/useField";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ProductPage.css";
import { AuthContext } from "../../context/authContext";

const AddProductPage = () => {
  const nameField = useField("text");
  const descriptionField = useField("text");
  const imageField = useField("text");
  const sizesField = useField("text");
  const isInStockField = useField("checkbox");
  const colorsField = useField("text");
  const priceField = useField("number");

  const { token } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const addProduct = async (newProduct) => {
    if (!token) {
      console.error("No token found. User is not authenticated.");
      return false;
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token in headers
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        throw new Error("Failed to add product");
      }

      return true;
    } catch (error) {
      console.error("Error adding product:", error);
      return false;
    }
  };

  const handleProductSubmission = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: nameField.value,
      description: descriptionField.value,
      image: imageField.value,
      sizes: sizesField.value.split(","), 
      isInStock: isInStockField.value === "true", 
      colors: colorsField.value.split(","), 
      price: priceField.value,
    };

    const success = await addProduct(newProduct);
    if (success) {
      console.log("Product added successfully");
      navigate("/"); // Redirect after successful product addition
    } else {
      console.error("Failed to add the product");
    }
  };

  if (!token) {
    return <div>You are not authorized to add a product.</div>; // Handle unauthorized access
  }

  return (
    <div className="addProducts">
      <form onSubmit={handleProductSubmission} className="addProductForm">
        <div className="addProductsTitle">
          <h1>Add Product</h1>
        </div>
        <div className="addProductInputs">
          <input
            {...nameField}
            id="name"
            name="name"
            placeholder="Enter your product's name"
            className="input"
          />
          <input
            {...descriptionField}
            id="description"
            name="description"
            placeholder="Enter your product's description"
            className="input"
          />
          <input
            {...imageField}
            id="image"
            name="image"
            placeholder="Enter your product's image URL"
            className="input"
          />
          <input
            {...sizesField}
            id="sizes"
            name="sizes"
            placeholder="Enter your product's sizes (comma-separated)"
            className="input"
          />
          <input
            {...colorsField}
            id="colors"
            name="colors"
            placeholder="Enter your product's colors (comma-separated)"
            className="input"
          />
          <input
            {...priceField}
            id="price"
            name="price"
            placeholder="Enter your product's price"
            className="input"
            type="number"
            step="0.01" // To ensure the price can be decimal
          />
          <select
            {...isInStockField}
            id="isInStock"
            name="isInStock"
            className="input"
          >
            <option value="true">In Stock</option>
            <option value="false">Out of Stock</option>
          </select>
          <button type="submit" className="submitButton">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
