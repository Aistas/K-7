import saladImage from './assets/salad.jpg';
import cheeseImage from './assets/cheese.jpg';
import meatImage from './assets/meat.jpg';
import baconImage from './assets/bacon.jpg';

export interface Ingredient {
    name: string;
    price: number;
    image: string;
}

export const INGREDIENTS: Ingredient[] = [
    { name: 'Salad', price: 10, image: saladImage },
    { name: 'Cheese', price: 50, image: cheeseImage },
    { name: 'Meat', price: 80, image: meatImage },
    { name: 'Bacon', price: 60, image: baconImage },
];