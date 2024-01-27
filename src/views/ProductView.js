import { Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { productFetch } from "../managers/ProductManager.js";

export const ProductContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        productFetch().then(data => setProducts);
    }, [])

    return (
        <div className="product-container">
            <div className="product_title">Products</div>
            <div className="container">
                {
                    products.map(product => {
                        return (
                            <section key={`product--${product.id}`} className="product_listing">
                                <div className="product_name">{product.name}</div>
                            </section>
                        )
                    })
                }
            </div>
        </div>
    )
}