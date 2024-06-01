import React from 'react';
import './OrderDetails.css';

interface OrderDetailsProps {
    assortmentProducts: { [key: string]: number };
    removeProduct: (name: string) => void;
    calculatePrice: () => number;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
                                                       assortmentProducts,
                                                       removeProduct,
                                                       calculatePrice,
                                                   }) => {
    const hasProducts = Object.values(assortmentProducts).some(count => count > 0);

    return (
        <div className="OrderDetails">
            <h2>Order Details</h2>
            {!hasProducts ? (
                <div>Order is empty. Please add some items.</div>
            ) : (
                <ul>
                    {Object.entries(assortmentProducts).map(([product, count]) => (
                        count > 0 && (
                            <li key={product}>
                                <div className="product-name">{product}</div>
                                <div>Count: {count}</div>
                                <button onClick={() => removeProduct(product)}>Remove</button>
                            </li>
                        )
                    ))}
                </ul>
            )}
            <div>Total Price: {calculatePrice()} сом</div>
        </div>
    );
};

export default OrderDetails;
