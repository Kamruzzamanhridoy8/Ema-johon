// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setproducts]=useState([]);
    useEffect(
        ()=>{
            fetch('products.json')
            .then(res=>res.json())
            .then(data=>setproducts(data))
        }

    )
    const [card,setcard]=useState([])

    const addToCard=(product)=>{
        const Newcard =[...card,product]
        setcard(Newcard)
        // console.log(Newcard);
        addToDb(product.id)
    }
    useEffect(()=>{
        const stordCart=getShoppingCart()
        const saveCart=[]
        for (const id in stordCart) {
            const addedProduct= products.find(product => product.id===id)
            console.log('add product',addedProduct);
            if (addedProduct){
                const quantity= stordCart[id];
                addedProduct.quantity=quantity;
                saveCart.push(addedProduct)

                console.log(addedProduct);
            }
            
        }
        setcard(saveCart)
    },[products])

    return (
        <div>
            <div className="shop-page">
                <div className="products-container">
                    <h2>product list: {products.length}</h2>
                    <div className="products">
                        {
                            products.map(product=> <Product 
                                key={product.id}
                                product={product}
                                addToCard={addToCard}
                            
                            ></Product>)
                        }
                    </div>


                </div>
                <div className="order-info">
                    <Cart card={card}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;