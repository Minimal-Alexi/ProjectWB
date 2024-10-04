import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async (number) => {
        try {
            const link = `api/products?number=${number}`;
            const response = await fetch(link,
                {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                    },
                });
            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem("products", JSON.stringify(data));
                setProducts(JSON.parse(sessionStorage.getItem("products")));
            }
        }
        catch (err) {
            console.error(err);
            console.error('Failed to fetch products');
        }
    }

    const fetchProductbyID = async (id) => {
            try
            {
                const link = `/api/products/${id}`;
                console.log(link);
                const response = await fetch(link,
                    {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json",
                        },
                    }
                );
                console.log(response);
                if (response.ok)
                    {
                        const data = await response.json();
                        if(!products.includes(data))
                            {
                                setProducts(prevProducts => [...prevProducts,data])
                            }
                        return data;
                    }
            }
            catch (err)
            {
                console.error(err);
                console.error("Failed to fetch product.");
                return null;
            }
        }

    useEffect(() => {
        const storedProducts = sessionStorage.getItem("products");
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            fetchProducts(12);
        }
    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts, fetchProducts,fetchProductbyID}}>
            {children}
        </ProductContext.Provider>
    );
}