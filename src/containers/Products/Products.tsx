import React from 'react';
import { PRODUCTS } from '../../products.ts';
import { Product as ProductType } from '../../products.ts';
import './Products.css';

interface ProductsProps {
    addProduct: (name: string) => void;
}

const Products: React.FC<ProductsProps> = ({ addProduct }) => {
    return (
        <div className="Products">
            <h2>Menu</h2>
            {PRODUCTS.map((product: ProductType) => (
                <div key={product.name} className="product-item">
                    <span>{product.name}</span>
                    <span className="product-price">{product.price} сом</span>
                    <button onClick={() => addProduct(product.name)}>Add</button>
                </div>
            ))}
        </div>
    );
};

export default Products;