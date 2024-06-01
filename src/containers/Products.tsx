import React from 'react';
import Product from '../components/Product/Product.tsx';
import { PRODUCTS } from '../products.ts';
import { Product as ProductType } from '../products.ts';

interface ProductsProps {
    addProduct: (name: string) => void;
    removeProduct: (name: string) => void;
    assortmentProducts: { [key: string]: number };
}

const Products: React.FC<ProductsProps> = ({
                                               addProduct,
                                               removeProduct,
                                               assortmentProducts,
                                           }) => {
    return (
        <div className="Products">
            <h2>Products</h2>
            {PRODUCTS.map((product: ProductType) => (
                <Product
                    key={product.name}
                    name={product.name}
                    price={product.price}
                    count={assortmentProducts[product.name] || 0}
                    addProduct={addProduct}
                    removeProduct={removeProduct}
                />
            ))}
        </div>
    );
};

export default Products;