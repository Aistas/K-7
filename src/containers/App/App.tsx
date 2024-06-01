import React, { useState } from 'react';
import Products from '../Products/Products.tsx';
import { PRODUCTS } from '../../products.ts';
import OrderDetails from '../../components/OrderDetails/OrderDetails.tsx';
import './App.css';

const App: React.FC = () => {
    const [assortmentProducts, setAssortmentProducts] = useState<{ [key: string]: number }>({
        Water: 0,
        Coffee: 0,
        Cheeseburger: 0,
        Bacon: 0,
        Sandwich: 0,
        Pizza: 0,
    });

    const addProduct = (name: string) => {
        setAssortmentProducts(prev => ({
            ...prev,
            [name]: (prev[name] || 0) + 1,
        }));
    };

    const removeProduct = (name: string) => {
        setAssortmentProducts(prev => ({
            ...prev,
            [name]: Math.max((prev[name] || 0) - 1, 0),
        }));
    };

    const calculatePrice = () => {
        const prices = PRODUCTS.reduce((acc, product) => {
            acc[product.name] = product.price;
            return acc;
        }, {} as { [key: string]: number });

        let total = 0;
        for (const [product, count] of Object.entries(assortmentProducts)) {
            total += (prices[product] || 0) * count;
        }
        return total;
    };

    return (
        <div className="App">
            <div className="left-panel">
                <Products addProduct={addProduct} />
            </div>
            <div className="right-panel">
                <OrderDetails
                    assortmentProducts={assortmentProducts}
                    removeProduct={removeProduct}
                    calculatePrice={calculatePrice}
                />
            </div>
        </div>
    );
};

export default App;

