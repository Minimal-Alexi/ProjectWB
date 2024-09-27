import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async (number) => {
        try {
            const link = `http://localhost:4000/api/products?number=${number}`;
            const response = await fetch(link,
                {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                    },
                });
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            }
        }
        catch (err) {
            console.error(err);
            console.error('Failed to fetch products');
        }
    }

    useEffect(() => {
        const storedProducts = sessionStorage.getItem("products");
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts)); // Load from session storage
        } else {
            fetchProducts(10); // Fetch if not in session storage
        }
    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts, fetchProducts }}>
            {children} {/* This renders the child components */}
        </ProductContext.Provider>
    );
}