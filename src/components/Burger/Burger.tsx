import React from 'react';
import './Burger.css';

interface BurgerProps {
    ingredients: { [key: string]: number };
}

const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
    const renderIngredients = () => {
        const ingredientComponents = [];
        for (const [ingredient, count] of Object.entries(ingredients)) {
            for (let i = 0; i < count; i++) {
                ingredientComponents.push(<div key={ingredient + i} className={ingredient}></div>);
            }
        }
        return ingredientComponents;
    };

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {renderIngredients()}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;






