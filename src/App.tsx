import React, { useState } from 'react';
import Products from './containers/Products.tsx';
import Assortment from './components/Assortment/Assortment.tsx';
import './App.css';

const App: React.FC = () => {
    const [assortmentProducts, setAssortmentProducts] = useState<{ [key: string]: number }>({
        Salad: 0,
        Cheese: 0,
        Meat: 0,
        Bacon: 0,
        Sandwich: 0,
        Pizza: 0
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
        const basePrice = 0;
        const prices: { [key: string]: number } = { Salad: 10, Cheese: 50, Meat: 80, Bacon: 60, Sandwich: 100, Pizza: 90 };
        let total = basePrice;
        for (const [product, count] of Object.entries(assortmentProducts)) {
            total += prices[product] * count;
        }
        return total;
    };

    return (
        <div className="App">
            <Products
                addProduct={addProduct}
                removeProduct={removeProduct}
                assortmentProducts={assortmentProducts}
            />
            <Assortment products={assortmentProducts} />
            <div>Total Price: {calculatePrice()} сом</div>
        </div>
    );
};

export default App;
