import { Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { productFetch } from "../managers/ProductManager.js";
import { categoryFetch } from "../managers/CategoryManager.js";
import "./Product.css"

export const ProductContainer = () => {
    const [products, setProduct] = useState([])
    const [categories, setCategory] = useState([])
    const [advertisements, setAdvertisement] = useState([])

    useEffect(() => {
        productFetch().then(data => setProduct(data));
    }, [])

    useEffect(() => {
        categoryFetch().then(data => setCategory(data));
    }, [])

    return (
    <div className="home_containr">
        <div className="home_title">
            Jason's Barbell Apparel
        </div>
        <div className="home_description">
            Promos
        </div>
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