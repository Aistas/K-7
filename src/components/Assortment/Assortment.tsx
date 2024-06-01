import React from 'react';

interface AssortmentProps {
    products: { [key: string]: number };
}

const Assortment: React.FC<AssortmentProps> = ({ products }) => {
    const renderProducts = () => {
        const productsComponents = [];
        for (const [product, count] of Object.entries(products)) {
            for (let i = 0; i < count; i++) {
                productsComponents.push(<div key={product + i} className={product}></div>);
            }
        }
        return productsComponents;
    };

    return (
        <div className="Assortment">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {renderProducts()}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Assortment;
