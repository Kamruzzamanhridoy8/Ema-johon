// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'

const Cart = ({card}) => {
    // const card= props.card;
    // console.log(card);
    let total=0;
    let shipping=0;
    let tex=0;
    let grandTotal=0;
    let quantity=0;
    for (const product of card) {
        // product.quantity=product.quantity||1;
        if(product.quantity===0){
            product.quantity=1;
        }
        total=total+product.price*product.quantity;
        shipping=shipping+product.shipping
        tex=((total)*5)/100;
        grandTotal=total+shipping+tex;
        quantity=quantity+product.quantity;


    }
    
    return (
        <div>
            <div className="cart-container">
                <h2>order info</h2>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tex}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            </div>
        </div>
    );
};

export default Cart;