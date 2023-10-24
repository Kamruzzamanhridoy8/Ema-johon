// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product);
    const {img,name,price,seller}=props.product;
    const Addtocardbtn=props.addToCard;

    return (
        <div>
            <div className="product-container">
                <div className="sigle-product">
                    <img src={img} alt="Missing picture" />
                    <h4>{name}</h4>
                    <p><b>Price:</b> ${price}</p>
                    <p><b>Seller:</b> {seller}</p>
                    <button onClick={()=>{Addtocardbtn(props.product)}}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;