import React from 'react';
import Ingredient from '../components/Ingredient/Ingredient.tsx';
import { INGREDIENTS } from '../ingredients';
import { Ingredient as IngredientType } from '../ingredients';

interface IngredientsProps {
    addIngredient: (name: string) => void;
    removeIngredient: (name: string) => void;
    burgerIngredients: { [key: string]: number };
}

const Ingredients: React.FC<IngredientsProps> = ({
                                                     addIngredient,
                                                     removeIngredient,
                                                     burgerIngredients,
                                                 }) => {
    return (
        <div className="Ingredients">
            <h2>Ingredients</h2>
            {INGREDIENTS.map((ingredient: IngredientType) => (
                <Ingredient
                    key={ingredient.name}
                    name={ingredient.name}
                    price={ingredient.price}
                    image={ingredient.image}
                    count={burgerIngredients[ingredient.name] || 0}
                    addIngredient={addIngredient}
                    removeIngredient={removeIngredient}
                />
            ))}
        </div>
    );
};

export default Ingredients;



