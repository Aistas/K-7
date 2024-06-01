import React from 'react';

interface ProductProps {
    name: string;
    price: number;
    count: number;
    addProduct: (name: string) => void;
    removeProduct: (name: string) => void;
}

const Product: React.FC<ProductProps> = ({
                                             name,
                                             price,
                                             count,
                                             addProduct,
                                             removeProduct,
                                         }) => {
    return (
        <div className="Product">
            <div>{name}</div>
            <div>Price: {price}</div>
            <div>Count: {count}</div>
            <button className="add-button" onClick={() => addProduct(name)}>
                add product
            </button>
            <button onClick={() => removeProduct(name)}>Remove</button>
        </div>
    );
};

export default Product;

