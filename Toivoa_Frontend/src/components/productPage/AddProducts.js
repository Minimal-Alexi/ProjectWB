import { useState } from "react";
import useField from "../../hooks/useField";
import "./ProductPage.css";

const AddProduct = () => {const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [isInStock, setIsInStock] = useState(false);
    const [colors, setColors] = useState([]);
    const [price, setPrice] = useState(0);

    const nameField = useField('text', name, setName);
    const descriptionField = useField('text', description, setDescription);
    const imageField = useField('text', image, setImage);
    const sizesField = useField('text', sizes, setSizes);
    const isInStockField = useField('checkbox', isInStock, setIsInStock);
    const colorsField = useField('text', colors, setColors);
    const priceField = useField('number', price, setPrice);

    const handleProductSubmission = async (e) => {
        e.preventDefault();

        if (!name || !description || !image.length === 0 || !isInStock || price <= 0) {
            console.log("Fill all necesary fields");
            return;
        }

        const product = {
            name,
            description,
            image,
            sizes,
            isInStock,
            colors,
            price
        };

        try {
            const response = await fetch(`/api/products`, {
                method: 'POST',
                body: JSON.stringify(product),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const json = await response.json();
            console.log(json);

            setName('');
            setDescription('');
            setImage([]);
            setSizes([]);
            setIsInStock(false);
            setColors([]);
            setPrice(0);
        } catch (error) {
            console.error("Error while adding product:", error);
        }
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
                        placeholder="Enter your products name"
                        className="input"
                    />
                    <input
                        {...descriptionField}
                        id="description"
                        name="description"
                        placeholder="Enter your products description"
                        className="input"
                    />
                    <input
                        {...imageField}
                        id="image"
                        name="image"
                        placeholder="Enter your products image"
                        className="input"
                    />
                    <input
                        {...sizesField}
                        id="sizes"
                        name="sizes"
                        placeholder="Enter your products sizes"
                        className="input"
                    />
                    <input
                        {...colorsField}
                        id="colors"
                        name="colors"
                        placeholder="Enter your products colors"
                        className="input"
                    />
                    <input
                        {...priceField}
                        id="price"
                        name="price"
                        placeholder="Enter your products price"
                        className="input"
                    />
                    <select
                        {...isInStockField}
                        id="sizes"
                        name="sizes"
                        placeholder="Enter your products sizes"
                        className="input"
                    >
                        <option value="true">Is in stock</option>
                        <option value="false">Is not in stock</option>
                    </select>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
};

export default AddProduct;