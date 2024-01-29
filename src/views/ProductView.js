import { Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { productFetch } from "../managers/ProductManager.js";
import "./Product.css"

export const ProductContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        productFetch().then(data => setProducts(data));
    }, [])

    return (
        <div className="product-container">
            <div className="product_title">Products</div>
            <div className="product_name">Elmo Male Waitress(used)</div>
            <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96768393-b5ef-4ecd-b39c-6ef9c12ef61a/dgbafd7-2c27225b-1342-4bae-8d06-c5cb151c0c81.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2NzY4MzkzLWI1ZWYtNGVjZC1iMzljLTZlZjljMTJlZjYxYVwvZGdiYWZkNy0yYzI3MjI1Yi0xMzQyLTRiYWUtOGQwNi1jNWNiMTUxYzBjODEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NNr6qCqrKlooAEmvX4tDqRZNTaVuKS8YtTjyWv5YaHE"
            alt="oafa"
            className="sofa"
          />
          <div className="price">129.99</div>
          <button type="submit" className="btn-add-to-cart"> Add to Cart</button>
            <div className="container">
                {
                    products.map(product => {
                        return (
                            <section key={`product--${product.id}`} className="product_listing">
                                <div className="product_name">{product.title}</div>
                                <div className="product_type">{product.type}</div>
                                <div className="product_image">{product.image}</div>
                                <div className="product_price">{product.price}</div>
                                <div className="product_delivery">{product.deliveryTime}</div>
                                <div className="product_stock">{product.inStock}</div>
                            </section>
                        )
                    })
                }
            </div>
        </div>
    )
}