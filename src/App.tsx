import React, { useState } from 'react';
import Ingredients from './containers/Ingredients';
import Burger from './components/Burger/Burger';
import './App.css';

const App: React.FC = () => {
    const [burgerIngredients, setBurgerIngredients] = useState<{ [key: string]: number }>({
        Salad: 0,
        Cheese: 0,
        Meat: 0,
        Bacon: 0
    });

    const addIngredient = (name: string) => {
        setBurgerIngredients(prev => ({
            ...prev,
            [name]: (prev[name] || 0) + 1,
        }));
    };

    const removeIngredient = (name: string) => {
        setBurgerIngredients(prev => ({
            ...prev,
            [name]: Math.max((prev[name] || 0) - 1, 0),
        }));
    };

    const calculatePrice = () => {
        const basePrice = 30;
        const prices: { [key: string]: number } = { Salad: 10, Cheese: 50, Meat: 80, Bacon: 60 };
        let total = basePrice;
        for (const [ingredient, count] of Object.entries(burgerIngredients)) {
            total += prices[ingredient] * count;
        }
        return total;
    };

    return (
        <div className="App">
            <Ingredients
                addIngredient={addIngredient}
                removeIngredient={removeIngredient}
                burgerIngredients={burgerIngredients}
            />
            <Burger ingredients={burgerIngredients} />
            <div>Total Price: {calculatePrice()} сом</div>
        </div>
    );
};

export default App;
