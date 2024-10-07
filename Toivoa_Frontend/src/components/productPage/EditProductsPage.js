import { useState, useContext, useEffect } from "react";
import useField from "../../hooks/useField";
import { ProductContext } from "../../context/productContext";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

const EditProduct = () => {
    const { fetchProductById } = useContext(ProductContext)
    const { id } = useParams();

    const [name, setName] = useState('');
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

    useEffect(() => {
        const fetchProductData = async () => {
            if (id) {
                const product = await fetchProductById(id)
                if (product) {
                    setName(product.name);
                    setDescription(product.description);
                    setImage(product.image);
                    setSizes(product.sizes);
                    setIsInStock(product.isInStock);
                    setColors(product.colors);
                    setPrice(product.prics);
                }
            }
        }

        fetchProductData
    }, [id, fetchProductById]);

    const handleProductSubmission = async (e) => {
        e.preventDefault();
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
            const response = await fetch(`/api/products${id}`, {
                method: 'PUT',
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
        <div className="add-edit-Products">
            <form onSubmit={handleProductSubmission} className="add-edit-ProductForm">
                <div className="add-edit-ProductsTitle">
                    <h1>Edit Product</h1>
                </div>
                <div className="add-edit-ProductInputs">
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

export default EditProduct;