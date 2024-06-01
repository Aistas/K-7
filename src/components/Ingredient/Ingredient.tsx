import React from 'react';

interface IngredientProps {
    name: string;
    price: number;
    image: string;
    count: number;
    addIngredient: (name: string) => void;
    removeIngredient: (name: string) => void;
}

const Ingredient: React.FC<IngredientProps> = ({
                                                   name,
                                                   price,
                                                   image,
                                                   count,
                                                   addIngredient,
                                                   removeIngredient,
                                               }) => {
    return (
        <div className="Ingredient">
            <div>{name}</div>
            <div>Price: {price}</div>
            <div>Count: {count}</div>
            <button className="add-button" onClick={() => addIngredient(name)}>
                <img src={image} alt={name} />
            </button>
            <button onClick={() => removeIngredient(name)}>Remove</button>
        </div>
    );
};

export default Ingredient;


