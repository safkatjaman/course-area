import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const price = cart.reduce((total,product)=>total+product.price,0);
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="text-left">
            <h3>Order Summary</h3>
            <h4>Ordered Course: {cart.length}</h4>
            <h5>Sub Total : ${formatNumber(price)}</h5>

        </div>
    );
};

export default Cart;